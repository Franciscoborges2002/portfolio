# ---------- builder ----------
FROM node:20-alpine AS builder
WORKDIR /app

# Install deps (cached)
COPY package*.json ./
RUN npm ci

# Build
COPY . .
RUN npm run build

# ---------- runner ----------
FROM nginx:alpine AS runner

# Copy Vite build output to nginx
COPY --from=builder /app/dist /usr/share/nginx/html

# Handle client-side routing (react-router-dom)
RUN echo 'server { \
    listen 80; \
    location / { \
        root /usr/share/nginx/html; \
        index index.html; \
        try_files $uri $uri/ /index.html; \
    } \
}' > /etc/nginx/conf.d/default.conf

EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]