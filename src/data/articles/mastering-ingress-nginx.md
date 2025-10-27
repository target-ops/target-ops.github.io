# Mastering ingress-nginx
### Advanced Optimization Techniques for High-Performance Kubernetes Ingress

As a seasoned DevOps engineer with 15 years of experience, I've seen the evolution of ingress controllers in Kubernetes. Today, we'll dive deep into optimizing ingress-nginx, one of the most popular ingress controllers in the Kubernetes ecosystem.

## 1. Fine-tuning Worker Processes and Connections

One of the first areas to optimize is the NGINX worker configuration. By default, ingress-nginx uses auto-detection, but for high-traffic environments, manual tuning can yield better results.

```yaml
controller:
  config:
    worker-processes: "8"
    max-worker-connections: "65536"
```

Adjust these values based on your server's CPU cores and expected concurrent connections.

## 2. Leveraging HTTP/2 and TLS 1.3

Enable HTTP/2 and TLS 1.3 to improve connection efficiency and security:

```yaml
controller:
  config:
    use-http2: "true"
    ssl-protocols: "TLSv1.2 TLSv1.3"
```

## 3. Optimizing SSL/TLS

Implement OCSP stapling and adjust SSL buffer size:

```yaml
controller:
  config:
    ssl-buffer-size: "4k"
    ssl-ocsp: "on"
```

## 4. Tuning Timeouts and Keepalive

Adjust timeouts and keepalive settings to balance between resource usage and client needs:

```yaml
controller:
  config:
    keep-alive: "75"
    keep-alive-requests: "100"
    upstream-keepalive-connections: "1000"
    upstream-keepalive-timeout: "60"
    client-header-timeout: "60s"
    client-body-timeout: "60s"
```

## 5. Implementing Caching and Compression

Enable and configure caching and compression for improved performance:

```yaml
controller:
  config:
    use-gzip: "true"
    gzip-level: "6"
    gzip-types: "application/json application/x-javascript text/css text/javascript"
    proxy-cache-path: "/tmp/nginx-cache levels=1:2 keys_zone=my_cache:10m max_size=10g inactive=60m use_temp_path=off"
```

Then, in your Ingress resource:

```yaml
annotations:
  nginx.ingress.kubernetes.io/proxy-cache: "my_cache"
  nginx.ingress.kubernetes.io/proxy-cache-valid: "200 60m"
```

## 6. Implementing Rate Limiting

Protect your services with intelligent rate limiting:

```yaml
annotations:
  nginx.ingress.kubernetes.io/limit-rps: "10"
  nginx.ingress.kubernetes.io/limit-rpm: "100"
```

## 7. Optimizing Backend Connections

Fine-tune how ingress-nginx connects to your backends:

```yaml
controller:
  config:
    upstream-keepalive-connections: "1000"
    upstream-keepalive-timeout: "60"
    upstream-keepalive-requests: "1000"
```

## 8. Implementing Custom Error Pages

Enhance user experience with custom error pages:

```yaml
controller:
  config:
    custom-http-errors: "404,503"
  defaultBackendService: "default/custom-error-pages-service"
```

## 9. Leveraging Lua for Advanced Functionality

ingress-nginx supports Lua scripting for custom logic. Here's an example of using Lua to add custom headers:

```yaml
controller:
  config:
    load-balance: "ewma"
    lua-shared-dicts: "configuration_data:5M"
  extraVolumeMounts:
    - name: lua-scripts
      mountPath: /etc/nginx/lua
  extraVolumes:
    - name: lua-scripts
      configMap:
        name: lua-scripts
```

Then, create a ConfigMap with your Lua script:

```yaml
apiVersion: v1
kind: ConfigMap
metadata:
  name: lua-scripts
data:
  custom_headers.lua: |
    local headers = ngx.req.get_headers()
    ngx.header["X-Custom-Header"] = "ingress-nginx"
```

## 10. Implementing Canary Deployments

Use ingress-nginx's built-in canary deployment feature:

```yaml
annotations:
  nginx.ingress.kubernetes.io/canary: "true"
  nginx.ingress.kubernetes.io/canary-weight: "30"
```

## 11. Monitoring and Metrics

Enable Prometheus metrics for comprehensive monitoring:

```yaml
controller:
  metrics:
    enabled: true
    serviceMonitor:
      enabled: true
```

## Conclusion

Optimizing ingress-nginx is a continuous process that requires understanding your specific traffic patterns and application requirements. The configurations provided here serve as a starting point for high-performance setups, but always test thoroughly in your environment.

Remember, while these optimizations can significantly improve performance, they may also increase resource usage. Monitor your ingress controller closely after implementing changes and be prepared to fine-tune based on real-world results.

By leveraging these advanced techniques, you can ensure your ingress-nginx setup is performant, secure, and ready to handle enterprise-level traffic with ease.

---