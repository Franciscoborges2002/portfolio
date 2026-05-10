# ---------- builder ----------
FROM node:24-alpine AS builder
WORKDIR /app

# Install deps (cached)
COPY package*.json ./
RUN npm ci

# Build
COPY . .
RUN npm run build

# ---------- runner ----------
FROM nginx:1.27-alpine AS runner

# Install wget for healthcheck
RUN apk add --no-cache wget

# Copy Vite build output to nginx
COPY --from=builder /app/dist /usr/share/nginx/html

# Override nginx.conf to remove the user directive (we run as non-root)
RUN sed -i 's/^user\s*nginx;//' /etc/nginx/nginx.conf

# Handle client-side routing (react-router-dom)
RUN echo 'server { \
    listen 8080; \
    location / { \
        root /usr/share/nginx/html; \
        index index.html; \
        try_files $uri $uri/ /index.html; \
    } \
}' > /etc/nginx/conf.d/default.conf

RUN chown -R nginx:nginx /usr/share/nginx/html && \
    chown -R nginx:nginx /var/cache/nginx && \
    chown -R nginx:nginx /var/log/nginx && \
    touch /var/run/nginx.pid && \
    chown nginx:nginx /var/run/nginx.pid

USER nginx

HEALTHCHECK --interval=30s --timeout=5s --retries=3 \
  CMD wget -qO- http://localhost:8080 || exit 1

EXPOSE 8080
CMD ["nginx", "-g", "daemon off;"]