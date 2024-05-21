FROM node:20.0-alpine AS build

# Set the working directory
WORKDIR /usr/src/app

# Copy only package.json and package-lock.json to leverage Docker caching
COPY package*.json ./
COPY vite.config.js ./


RUN npm ci

COPY . .

RUN npm run build

# Final stage to create a smaller image
FROM node:20.0-alpine

# Set the working directory
WORKDIR /usr/src/app

# Install only serve globally for serving the application
RUN npm install -g serve

# Copy the built application from the build stage
USER node

COPY --chown=node:node --from=build /usr/src/app/dist ./dist

#COPY --chown=node:node /var/www/mosf-fe/.env ./.env
COPY --chown=node:node ./.env ./.env


# Expose the port your application is running on
EXPOSE 5401

# Set the default command to serve the application
CMD serve -s dist -l 5101