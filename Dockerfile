# Stage 1: Install dependencies and build the Next.js app
FROM node:18-alpine AS builder

WORKDIR /app

COPY package.json package-lock.json ./

# clean install based on package-lock.json
RUN npm ci

COPY . .

RUN npm run build

# Stage 2: Serve the app in production
FROM node:18-alpine AS runner

WORKDIR /app

COPY --from=builder /app ./

# Expose port 3000 for the Next.js app
EXPOSE 3000

# Set the environment to production
ENV NODE_ENV=production

# Start the Next.js app (using the built-in Next.js server)
CMD ["npm", "run", "start"]
