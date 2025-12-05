FROM node:18-slim

WORKDIR /app

# Copy package files
COPY package*.json ./

# Install dependencies
RUN npm ci --only=production

# Install TypeScript globally for building
RUN npm install -g typescript

# Copy source code
COPY . .

# Build TypeScript files
RUN tsc

# Expose port
EXPOSE 8080

# Start the server
CMD ["npm", "start"]