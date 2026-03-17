# =======================================
# Stage 1: Build the React.js application
# =======================================

ARG NODE_VERSION=24.14.0-alpine
ARG NGINX_VERSION=alpine3.23

################################################################################
# Use node image for base image for all stages.
FROM node:${NODE_VERSION} AS builder

# Set working directory for all build stages.
WORKDIR /app

# Copy package related files first to leverage docker's caching mechanism. Building is made layer by layer, so files that are less likely to change should be copied first so they don't need to be copied every time the image is built
COPY package.json package-lock.json* ./

# Install project dependencies using npm ci
RUN --mount=type=cache,target=/root/.npm npm ci

# Copy the rest of the application
COPY . .

# Build the React app (outputs to /app/dist)
RUN npm run build


# =======================================
# Stage 2: Prepare NGINX to serve static files
# =======================================

FROM nginxinc/nginx-unprivileged:${NGINX_VERSION} AS runner

# Copy custom Nginx config
COPY nginx.conf /etc/nginx/nginx.conf

# Copy the static build output from the build stage to Nginx's default HTML serving directory
COPY --chown=nginx:nginx --from=builder /app/dist /usr/share/nginx/html

# Use a built-in non-root user for security best practices
USER nginx

# Expose port 8080 to allow HTTP traffic
# Note: The default NGINX container now listens on port 8080 instead of 80 
EXPOSE 8080

# Start Nginx directly with custom config
ENTRYPOINT ["nginx", "-c", "/etc/nginx/nginx.conf"]
CMD ["-g", "daemon off;"]