# === Stage 1: Build the React application ===
FROM node:20-alpine AS build

WORKDIR /app

# Copy package.json and install dependencies first to leverage caching
COPY package.json ./
RUN npm install

# Copy the rest of the source code
COPY . .

# Build the application for production
RUN npm run build

# === Stage 2: Serve the application with Nginx ===
FROM nginx:stable-alpine

# Copy the custom Nginx configuration
COPY nginx.conf /etc/nginx/conf.d/default.conf

# Copy the built static files from the 'build' stage
COPY --from=build /app/dist /usr/share/nginx/html

# Expose port 80 and start Nginx
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]