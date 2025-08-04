# Use a smaller base image with Node.js
FROM node:20-alpine AS builder

# Set working directory
WORKDIR /app

# Install dependencies first for better caching
COPY package*.json ./
RUN npm install

# Copy the rest of the application files
COPY . .

# Build the app
RUN npm run build


# Use a lightweight image for production
FROM node:20-alpine AS runner

WORKDIR /app

# Copy only necessary files from the builder stage
COPY --from=builder /app/dist ./dist
COPY --from=builder /app/node_modules ./node_modules
COPY --from=builder /app/package*.json ./

# Expose the port
EXPOSE 3001

# Start the application
CMD ["npm", "run", "start"]