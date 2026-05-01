# gitswitch: Per-Directory Git Identity Binding with a Pre-Commit Guard

Multi-account git on a single laptop is a problem every consulting engineer recognises. You set `git config --global user.email` to one address for a client engagement, forget to switch back, and weeks later notice that personal commits went out under the work email — or worse, the other way around. The pieces to prevent this exist in git itself, but they're scattered, undocumented, and easy to misconfigure.

Target-Ops is a small team of senior DevOps engineers who maintain identities across many client environments as part of daily work. We built **gitswitch** because the manual setup that *should* prevent wrong-author commits — `includeIf` blocks, per-account SSH host aliases, `IdentitiesOnly yes`, `gh auth switch` — is a 90-minute yak shave we kept redoing on every new laptop, and it never actually refused to let us commit when something was misconfigured.

This article walks through what gitswitch does, why per-directory identity binding matters, how it compares to the manual alternatives, and the architectural decisions that keep it small and safe.

## Why Per-Directory Git Identity Matters

If you only ever commit from one identity, none of this is your problem. But the moment a developer has more than one — work and personal, two clients, an open-source contributor identity, a fork-maintainer alias — the cost of getting it wrong stops being theoretical.

### The Three Failure Modes

**Wrong-author commits.** The most common case: `git config --global user.email` was set for one project and never reset. Every subsequent commit, anywhere on the machine, goes out as the wrong person. There is no warning. The commit lands in the public log of a repository that may not even belong to you.

**SSH key leakage.** Without `IdentitiesOnly yes` in `~/.ssh/config`, the SSH agent presents *every* loaded key to *every* host you connect to. This isn't just a privacy issue — it's the source of the famous "Permission denied (publickey)" failure pattern when you have two GitHub accounts and the wrong key is offered first.

**Untracked authentication state.** The GitHub CLI (`gh`) maintains its own logged-in account, completely independent of git's user.email. You can be authenticated to `gh` as one identity while your commits go out under a different one. `gh pr create` will silently use the gh account; the commit will use git's email; the two never reconcile.

Each of these has a fix in the standard tooling. None of them talk to each other, and none of them refuse the operation when wrong. That's the gap gitswitch fills.

## What gitswitch Does

gitswitch is a single Go binary that binds a *git identity* — meaning email, signing key, SSH key, and gh CLI account — to a *directory*. After a one-time setup, every `cd` into the bound directory becomes the switch. No manual juggling, no per-repo config, no chance of forgetting.

The full command surface is nine commands:

| Command | What it does |
|---|---|
| `gitswitch init` | Auto-detects identities from your existing `~/.gitconfig`, `~/.ssh/config`, public keys, and `gh auth status` |
| `gitswitch use <id> [<dir>]` | Binds an identity to a directory |
| `gitswitch guard install` | Installs a global pre-commit hook that refuses wrong-author commits |
| `gitswitch doctor` | Verifies all four layers (git, ssh, gh, signing) agree on who you are |
| `gitswitch why` | Explains in plain English which `includeIf` block fired and why |
| `gitswitch list` | Shows configured identities and bindings |
| `gitswitch add <name>` | Manually registers an identity init didn't catch |
| `gitswitch delete <name>` | Removes an identity, its bindings, and includeIf blocks |
| `gitswitch rename <old> <new>` | Renames an identity without delete-and-re-add |

The first five are the headline; the last four are the lifecycle CRUD that any real management tool needs.

## How It Compares to the Manual Alternatives

Three approaches exist for solving multi-account git. Here's an honest comparison.

| Approach | Auto-switch by directory | Per-account SSH key isolation | Keeps `gh` in lockstep | Refuses wrong-author commits | Setup time |
|---|---|---|---|---|---|
| Manual `includeIf` | ✓ if you nail the trailing-slash gotcha | ✗ | ✗ | ✗ | 30 min |
| `gh auth switch` alone | ✗ | ✗ | partial | ✗ | 5 min |
| 1Password SSH agent | ✗ (still global identity) | ✓ | ✗ | ✗ | 15 min |
| Manual all-three combo | ✓ | ✓ | requires shell hook | ✗ | 90 min |
| **gitswitch** | ✓ | ✓ | ✓ | **✓** | **30 sec** |

The "refuses wrong-author commits" column is the one that matters. Even a perfectly configured manual stack can't catch the case where you accidentally `git config --local user.email <wrong-thing>` in a repo. gitswitch's pre-commit hook does.

## Installation

gitswitch ships as a single Go binary via Homebrew:

```bash
brew install target-ops/tap/gitswitch
```

Approximately 2 MB, no runtime dependencies. macOS arm64/x64, Linux x64/arm64, and Windows binaries are produced on every release tag via GoReleaser. Linux users without Homebrew can grab the tarball from [GitHub Releases](https://github.com/target-ops/gitswitch/releases/latest); Windows users grab the `.zip`.

## The Usage Flow

A complete first-run takes about 30 seconds:

```bash
gitswitch init                       # auto-detect identities
gitswitch use work     ~/work        # bind work identity to a directory
gitswitch use personal ~/code        # ditto for personal
gitswitch guard install              # turn on the pre-commit hook
```

After that, every `cd` into `~/work` or `~/code` is the switch. Commits made anywhere inside those trees use the bound identity automatically. No manual step, no remembering.

To verify the chain at any time:

```bash
gitswitch doctor    # checks all four layers agree
gitswitch why       # explains the active includeIf for the cwd
```

When the pre-commit hook catches a wrong-author commit, the output is unambiguous:

```
✗ gitswitch guard: blocked commit

  in directory:   ~/work/some-repo/
  expected:       you@company.com   (bound identity: work)
  got:            you@gmail.com

  fix:            gitswitch use work ~/work
                  (or: git commit --no-verify to override this once)
```

The commit does not proceed. The error includes the exact one-line fix. Override with `git commit --no-verify` when needed, but the default is "block."

## Architecture: How the Binding Actually Works

Three things happen the first time you run `gitswitch use <id> <dir>`:

**1. A per-identity gitconfig file** is written to `~/.config/gitswitch/identities/<id>.gitconfig`. It contains:

```ini
[user]
    name = ...
    email = ...
    signingkey = ...

[commit]
    gpgsign = true

[gpg]
    format = ssh

[core]
    sshCommand = ssh -i <key> -o IdentitiesOnly=yes
```

The `core.sshCommand` line is what enforces per-directory key selection without requiring host aliases or remote-URL rewriting. `IdentitiesOnly yes` prevents ssh-agent from broadcasting other keys.

**2. A sentinel-marked `includeIf` block** is appended to `~/.gitconfig`:

```ini
# >>> gitswitch:work
[includeIf "gitdir:/Users/x/work/"]
    path = /Users/x/.config/gitswitch/identities/work.gitconfig
# <<< gitswitch:work
```

The sentinel comments are not decorative — they're how subsequent operations (`use` re-runs, `delete`, `rename`) find and replace the block atomically. No regex parsing of the user's gitconfig structure, no risk of corrupting unrelated content. The trailing slash on `gitdir:` is the single most common configuration mistake in manual `includeIf` setups; gitswitch always emits it correctly.

**3. The binding is recorded in `~/.config/gitswitch/config.json`**. This is the single source of truth gitswitch consults for `list`, `why`, and the guard hook.

The pre-commit hook itself is a thin shell wrapper that exec's `gitswitch guard check`. Keeping the logic in the Go binary means upgrading gitswitch upgrades the check — no per-machine re-install. The check itself completes in approximately 5 milliseconds, fast enough to be invisible on every commit.

## Common Pitfalls and How gitswitch Handles Them

The manual `includeIf` setup has a small set of well-known footguns. gitswitch is designed around them.

### The Trailing-Slash Gotcha

`gitdir:/path/to/work/` matches every repository inside `/path/to/work/`. `gitdir:/path/to/work` (no trailing slash) matches only a literal directory named `work` and nothing else. The git documentation does not surface this clearly, and there are GitHub issues, blog post comments, and Stack Overflow questions in the thousands from people who got it wrong.

gitswitch always appends the trailing slash automatically. The configuration is never wrong by construction.

### `core.hooksPath` Conflicts With Other Tools

If you already use `husky`, `lefthook`, or `pre-commit`, those tools manage their own `core.hooksPath`. gitswitch's `guard install` will refuse to overwrite an existing hooksPath setting unless you pass `--force`, and the error message explains the two paths forward (overwrite, or copy our hook into your existing hooks directory). No silent clobbering.

### Local `user.email` Overrides the includeIf

A `git config --local user.email <wrong>` in a specific repository wins over any `includeIf`-derived value. Manual setups can't catch this. gitswitch's pre-commit hook reads the *effective* `user.email` (what git would actually write into the commit) and compares it to the bound identity. Local overrides that disagree with the binding are caught.

### Stale ssh-agent Keys

Without `IdentitiesOnly yes` in the SSH config, the agent offers every loaded key to every host. GitHub picks the first one that matches a registered public key — which may not be the account you intended to act as. gitswitch's per-identity gitconfig sets `core.sshCommand` with `IdentitiesOnly=yes`, so only the bound key is offered for git operations within that directory.

## Real-World Example: Two GitHub Accounts on a Consulting Laptop

The setup we use at Target-Ops for engineers who work across both their personal account and several client GitHub Enterprise instances looks like this:

```bash
# After installing gitswitch and running `gitswitch init` once

gitswitch use personal       ~/personal
gitswitch use client-acme    ~/clients/acme
gitswitch use client-globex  ~/clients/globex
gitswitch guard install
```

A `gitswitch list` then shows three identities and three bindings. From that point forward:

- Anything inside `~/personal/` commits as the personal identity
- Anything inside `~/clients/acme/` commits as the Acme identity
- Anything inside `~/clients/globex/` commits as the Globex identity
- Any commit attempt where the active git email doesn't match the bound identity is blocked at commit time, with a clear fix message

Onboarding a new client is one `gitswitch use` away. Onboarding a new laptop is `gitswitch init` plus three `gitswitch use` calls — about a minute total.

## Conclusion

gitswitch is a small tool that solves a well-defined problem: making per-directory git identity *automatic* and *enforced* rather than something the developer has to remember. The mechanism is standard git (`includeIf`, `core.sshCommand`, pre-commit hooks) — the contribution is the integration and the safety net.

For DevOps engineers who work across many client environments, the savings show up in two places: the time not spent setting up multi-account git on every new machine, and the wrong-author commits that never make it into the log. Both add up over a year.

## Next Steps

1. **Install gitswitch** with `brew install target-ops/tap/gitswitch`.
2. **Run `gitswitch init`** to detect identities already on your machine.
3. **Bind your work and personal directories** with `gitswitch use <name> <dir>`.
4. **Install the pre-commit guard** with `gitswitch guard install`.

**Need help designing internal developer tooling, or want to talk about per-team identity management?** [Book a free 30-minute call with Target-Ops](/contact) — happy to trade notes on developer experience or scope something for your team.

## Related Resources

- [gitswitch on GitHub](https://github.com/target-ops/gitswitch) — source, releases, issue tracker
- [AnyClown: One-Click Git Repository Cloning to VS Code](/articles/anyclown-vscode-extension)
- [VScode DevOps Ultra Pack](/articles/vscode-devops-pack)
- [git documentation: Conditional Includes](https://git-scm.com/docs/git-config#_conditional_includes)
- [Target-Ops DevOps Consulting](/solutions/devops-consulting)

---

*Last updated: May 2026 | Published by the Target-Ops DevOps Engineering Team*
