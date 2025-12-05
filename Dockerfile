FROM node:18-slim

WORKDIR /app

# Copy package files
COPY package*.json ./

# Install dependencies including express
RUN npm ci --only=production

# Install TypeScript and build dependencies as dev dependencies
RUN npm install

# Copy source code
COPY . .

# Build TypeScript files
RUN npm run build

# Remove dev dependencies to reduce image size
RUN npm prune --production

# Expose port
EXPOSE 8080

# Start the server
CMD ["npm", "start"]