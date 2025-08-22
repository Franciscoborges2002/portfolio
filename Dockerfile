# ---------- builder ----------
FROM node:20-alpine AS builder
WORKDIR /app

# Install deps (cached)
COPY package*.json ./
RUN npm ci

# Build
COPY . .
RUN npm run build

# Trim dev deps AFTER the build (runtime only needs prod deps)
RUN npm prune --omit=dev

# ---------- runner ----------
FROM node:20-alpine AS runner
WORKDIR /app
ENV NODE_ENV=production
ENV PORT=3001

# Copy runtime artifacts
COPY --from=builder /app/.next ./.next
COPY --from=builder /app/public ./public
COPY --from=builder /app/node_modules ./node_modules
COPY --from=builder /app/package*.json ./

EXPOSE 3001
CMD ["npm", "run", "start"]