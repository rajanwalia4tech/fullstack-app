# ---- Stage 1: Build dependencies ----
FROM node:20-alpine AS builder

# Set working directory
WORKDIR /app/backend

# Copy only package files to leverage caching
COPY package*.json ./

# Install dependencies
RUN npm install --production

# ---- Stage 2: Final lightweight image ----
FROM node:20-alpine

WORKDIR /app/backend

# Copy only needed files from builder
COPY --from=builder /app/backend/node_modules ./node_modules

# Copy source code
COPY . .

EXPOSE 5000

CMD ["npm", "start"]
