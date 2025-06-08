# 1. Use the official Node.js image
FROM node:18-alpine AS builder

# 2. Set working directory
WORKDIR /app

# 3. Copy package files and install dependencies
COPY package.json package-lock.json* ./
RUN npm install

# 4. Copy the rest of your app and build it
COPY . .
RUN npm run build

# 5. Use a smaller base image for production
FROM node:18-alpine AS runner

# Set environment variables (adjust as needed)
ENV NODE_ENV production
ENV PORT 3000

# 6. Set working directory and copy built app
WORKDIR /app
COPY --from=builder /app ./

# 7. Install only production dependencies
RUN npm install --omit=dev

# 8. Expose the port and start the server
EXPOSE 3000
CMD ["npm", "start"]