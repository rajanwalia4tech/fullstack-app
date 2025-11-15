# ---- Stage 1: Dependency installation ----
FROM node:20-alpine AS deps

WORKDIR /app/frontend

# Copy package files only (best for caching)
COPY package*.json ./

# Install dependencies once
RUN npm install

# ---- Stage 2: Final development image ----
FROM node:20-alpine

WORKDIR /app/frontend

# Copy node_modules from deps image
COPY --from=deps /app/frontend/node_modules ./node_modules

# Copy source code
COPY . .

RUN npm run build

EXPOSE 3000

CMD ["npm", "start"]
