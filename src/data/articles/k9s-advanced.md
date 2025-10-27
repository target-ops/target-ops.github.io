# K9s: Advanced Kubernetes CLI Management

## Introduction

K9s for advanced usage, exploring, technical examples for experienced Kubernetes users.\
prvide by [target-ops](https://github.com/target-ops) 

Install K9s using Homebrew:

```bash
brew install k9s
```
> Alternatively, download the latest binary from the K9s releases page and add it to your PATH. 

## 1. Custom Resource Views
K9s allows you to create custom views for specific Kubernetes resources.\
Create a `$HOME/.k9s/views.yml` file:
```
k9s:
  views:
    v1/pods:
      columns:
        - NAME
        - READY
        - STATUS
        - RESTARTS
        - CPU
        - MEM
        - AGE
        - NODE
```
This configuration customizes the pod view to include CPU and memory usage.

## 2. Plugins
K9s supports plugins for extended functionality. Create a plugin in `$HOME/.k9s/plugins.yml`:
```
plugins:
  helm:
    shortCut: Ctrl-H
    description: Helm Charts
    scopes:
      - all
    command: kubectl
    background: false
    args:
      - get
      - helmreleases
      - --all-namespaces
```
This plugin allows quick access to Helm releases across all namespaces.

## 3. Resource Editing
built-in YAML editor for resources. To edit a resource:

1. Navigate to the resource
2. Press `e` to open the editor
3. Make changes and save

## 4. Port Forwarding
Easily set up port forwarding:

1. Navigate to a pod
2. Press `Shift-F`
3. Enter local and remote ports
```
Example:
CopyLocal Port: 8080
Remote Port: 80
```
This forwards local port 8080 to the pod's port 80.

## 5. Log Streaming and Filtering
Stream logs from multiple pods simultaneously:

1. Select pods using the space bar
2. Press `l` to view logs
Apply filters using the `/` key:

    `error|warning`

This filters logs to show only lines containing "error" or "warning".

## 7. CRD Management
Easily manage Custom Resource Definitions (CRDs):

1. Press `:crd` to list all CRDs
2. Navigate to a CRD and press `enter` to view instances

## 8. Context and Namespace Switching
Quickly switch between contexts and namespaces:

Press `:ctx` to list contexts
Press `:ns` to list namespaces


## 9. Cluster Events Monitoring
Monitor cluster-wide events:

1. Press `:events` or `ctrl-e`
2. View real-time cluster events

Filter events: `/NodeNotReady|FailedMount`

## 10. Resource Utilization
View resource utilization across the cluster:

1. Press `:pulses` or `ctrl-u`
2. Monitor CPU, memory, and storage usage

## 11. YAML Diff
Compare resource YAML definitions:

1. Navigate to a resource
2. Press `d` to view YAML diff
3. Use `j` and `k` to navigate changes

This is useful for tracking changes over time or across environments.

#### Advanced Example: Automated Deployment Analysis
Let's create a K9s plugin that analyzes deployments and reports potential issues.\
1. Create a script analyze_deployments.sh:
```
#!/bin/bash

kubectl get deployments -A -o json | jq -r '
  .items[] | 
  select(.spec.replicas != .status.availableReplicas) | 
  "\(.metadata.namespace),\(.metadata.name),\(.spec.replicas),\(.status.availableReplicas)"
' | column -t -s, -N "Namespace,Deployment,Desired,Available"
```
2. Add the plugin to $HOME/.k9s/plugins.yml:
```
plugins:
  analyze-deployments:
    shortCut: Ctrl-A
    description: Analyze Deployments
    scopes:
      - deployments
    command: /path/to/analyze_deployments.sh
    background: false
```
3. In K9s, press Ctrl-A to run the analysis

This plugin quickly identifies deployments where the desired state doesn't match the current state, helping troubleshoot scaling or health issues.
Conclusion.\
\
K9s offers a wealth of advanced features for managing Kubernetes clusters on macOS. By leveraging custom views, plugins, and built-in tools, you can significantly enhance your Kubernetes workflow. Experiment with these advanced techniques to streamline your cluster management and gain deeper insights into your Kubernetes environments.