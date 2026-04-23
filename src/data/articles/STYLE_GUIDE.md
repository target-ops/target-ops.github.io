# Target-Ops Article Style Guide

## Brand Voice

**Professional, authoritative, but approachable**
- We are DevOps experts sharing battle-tested knowledge
- Speak directly to readers (use "you", "we", "your")
- Confident but not arrogant
- Practical and actionable

## Target Audience

- **Primary**: Experienced DevOps engineers (3+ years)
- **Secondary**: Cloud architects, SREs, platform engineers
- **Assumption**: Readers have technical background

## SEO Optimization Standards

### Title Format
```
[Primary Keyword]: [Compelling Subtitle] | Target-Ops
```

Examples:
- ✅ Kubernetes Ingress: Advanced Optimization Techniques for Production
- ✅ Cloud Provider Selection: Strategic Framework for DevOps Teams
- ❌ Mastering ingress-nginx (too vague)
- ❌ How to Choose a Cloud Provider (too generic)

### Introduction (First 100 words)
1. **First sentence**: Include primary keyword
2. **Second sentence**: Establish authority (Target-Ops experience)
3. **Third sentence**: Set expectations (what they'll learn)

Example:
```
Kubernetes ingress optimization is critical for high-performance applications serving millions of users. Target-Ops is a small team of senior DevOps engineers who tune ingress-nginx for production workloads as part of daily work. In this guide, we'll show you advanced techniques to maximize throughput, minimize response times, and ensure reliability at scale.
```

### Keyword Usage
- **Primary keyword**: 3-5 times (title, intro, H2, conclusion)
- **Secondary keywords**: Naturally throughout
- **LSI keywords**: Include variations and related terms
- **Avoid**: Keyword stuffing, unnatural placement

### Headings (H2, H3)
- Use descriptive, keyword-rich headings
- Include action words when possible
- Be specific, not generic

Examples:
- ✅ "Optimizing Worker Processes for High Traffic"
- ✅ "Implementing SSL/TLS Best Practices"
- ❌ "Configuration"
- ❌ "Tips"

## Content Structure

### Required Sections

1. **Title** (H1)
2. **Introduction** (2-3 paragraphs)
3. **Why This Matters** section (H2) - Relevance
4. **3-5 Main Content Sections** (H2)
5. **Best Practices** section (H2)
6. **Common Pitfalls** section (H2)
7. **Real-World Example** (H2)
8. **Conclusion** (2-3 paragraphs)
9. **Next Steps / CTA** (H2)
10. **Related Resources** (H2)

### Optional Sections
- Table of contents (for 2000+ word articles)
- Prerequisites
- Comparison tables
- Troubleshooting

## Writing Style

### Do's
- ✅ Use code examples liberally
- ✅ Include specific numbers and metrics
- ✅ Provide actionable takeaways
- ✅ Link to official documentation
- ✅ Share real-world experiences
- ✅ Use lists and bullet points
- ✅ Include visual breaks (code blocks, quotes)

### Don'ts
- ❌ Use marketing fluff or buzzwords
- ❌ Make unsupported claims
- ❌ Write walls of text
- ❌ Use excessive jargon
- ❌ Include outdated information
- ❌ Copy content from other sources

## Code Examples

### Format
```language
# Always include comments explaining what the code does
# Use realistic examples from production scenarios
# Show complete, working configurations when possible
```

### Best Practices
- Always specify language for syntax highlighting
- Include context (where this goes, what it does)
- Show both "before" and "after" when relevant
- Use realistic values (not foo/bar placeholders)

## Tone Examples

### ✅ Good Tone
"After optimizing hundreds of Kubernetes clusters, we've found that worker process tuning delivers the biggest performance gains. Here's our battle-tested configuration:"

### ❌ Wrong Tone
"In my humble opinion, you should probably consider maybe tuning worker processes if you think it might help."

### ✅ Good Tone
"This configuration reduced our P95 latency from 200ms to 80ms - a 60% improvement under peak load."

### ❌ Wrong Tone
"This is the best configuration ever and will solve all your problems!"

## Call-to-Action (CTA)

### Every article MUST end with:
1. Summary of key points
2. Clear next steps (3 actionable items)
3. Target-Ops service CTA (when relevant)
4. Related resources

### CTA Examples

**For Tool Articles:**
```
Ready to boost your DevOps productivity? [Download the extension](link) and start optimizing your workflow today.

**Need help setting up your DevOps toolchain?** [Contact our team](/contact) for personalized recommendations.
```

**For Technical How-To Articles:**
```
Following these practices will help you achieve production-grade reliability and performance. At Target-Ops, we've implemented these patterns for companies processing billions of requests daily.

**Want expert guidance on your Kubernetes infrastructure?** [Schedule a consultation](/contact) with our team.
```

## SEO Checklist

Before publishing, verify:

- [ ] Primary keyword in title
- [ ] Primary keyword in first 100 words
- [ ] Primary keyword in at least one H2
- [ ] Primary keyword in conclusion
- [ ] 3-5 internal links to other Target-Ops content
- [ ] 2-3 external links to authoritative sources
- [ ] Meta description (120-160 characters)
- [ ] Clear CTA
- [ ] Alt text for images (if any)
- [ ] Code examples have language tags
- [ ] Article is 1000+ words (1500+ preferred)

## Metadata Standards

### Article ID
- Lowercase, hyphens only
- Include primary keyword
- Max 60 characters

Example: `kubernetes-ingress-optimization`

### Title (60 characters max)
Primary keyword + compelling subtitle

Example: "Kubernetes Ingress: Production Optimization Guide"

### Description (120-160 characters)
Action-oriented, includes primary keyword and benefit

Example: "Learn advanced ingress-nginx optimization techniques from Target-Ops engineers. Reduce latency by 40% and handle 10x more traffic."

### Tags
- 3-5 tags
- Use existing tags when possible
- Capitalize properly

Examples: ["Kubernetes", "Performance", "DevOps", "Networking"]

### SEO Keywords (4-6)
- Primary keyword
- 3-5 related long-tail keywords
- Include variations

Example: ["kubernetes ingress", "ingress-nginx optimization", "kubernetes performance tuning"]

## Article Length Guidelines

- **Minimum**: 1000 words
- **Optimal**: 1500-2500 words
- **Maximum**: 3500 words (break into series if longer)

## Update Policy

- Review articles every 6 months
- Update version numbers and best practices
- Refresh "Last updated" date
- Keep deprecated content but note it

## Example Article Structure

```markdown
# Kubernetes Ingress: Advanced Optimization for Production Traffic

Optimizing Kubernetes ingress controllers is essential for applications serving high-traffic workloads at scale. Target-Ops is a small team of senior DevOps engineers who tune ingress-nginx for production workloads as part of daily work. This guide shares the optimization techniques we rely on in production environments.

Whether you're experiencing performance bottlenecks or preparing for scale, these advanced configurations will help you maximize throughput, minimize response times, and ensure reliable traffic management.

## Why Ingress Optimization Matters in 2024

[Content explaining relevance...]

## Understanding Ingress-nginx Architecture

[Technical foundation...]

## Worker Process Optimization

[Detailed section with code examples...]

## SSL/TLS Performance Tuning

[Detailed section...]

## Connection Management and Timeouts

[Detailed section...]

## Best Practices for Production

- **Monitor key metrics**: Track P95/P99 latency...
- **Use connection pooling**: Reuse connections...
- **Implement proper timeouts**: Prevent hanging requests...

## Common Pitfalls to Avoid

1. **Over-allocating worker processes**...
2. **Ignoring connection limits**...

## Real-World Example: E-commerce Platform

At Target-Ops, we optimized ingress for an e-commerce platform processing 50K requests/second...

## Conclusion

Ingress optimization is critical for production Kubernetes applications. By tuning worker processes, enabling HTTP/2, optimizing SSL/TLS, and implementing proper connection management, you can dramatically improve performance and reliability.

Following these battle-tested practices will help you handle massive traffic spikes while maintaining low latency. At Target-Ops, we've used these techniques to optimize infrastructure for companies serving billions of requests.

## Next Steps

1. Audit your current ingress configuration
2. Implement worker process tuning first (biggest impact)
3. Enable HTTP/2 and optimize SSL/TLS
4. Set up monitoring and alerting

**Need help optimizing your Kubernetes infrastructure?** [Contact Target-Ops](/contact) for expert guidance tailored to your specific requirements.

## Related Resources

- [Kubernetes Security Best Practices](/articles/kubernetes-security)
- [Cloud Infrastructure Consulting](/solutions/cloud-infrastructure)
- [Official ingress-nginx Documentation](https://kubernetes.github.io/ingress-nginx/)

---

*Last updated: January 2024 | Published by Target-Ops DevOps Engineering Team*
```

## Questions?

Refer to this guide when writing or updating articles. Consistency is key to building authority and ranking well in search results.

