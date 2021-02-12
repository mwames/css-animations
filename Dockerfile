FROM node:12.18-alpine AS base

# Set the container's working directory to /usr/src/app
WORKDIR /usr/src/app/

# Install node modules first so we don't need to re-download when src changes
COPY ["app/package.json", "app/package-lock.json*", "app/npm-shrinkwrap.json*", "./"]

FROM base AS dependencies 
RUN npm install

FROM base as release
# Copy the rest of source
COPY --from=dependencies /usr/src/app/node_modules /usr/src/app/node_modules
COPY ["./app", "./"]

# Listen on 8082
EXPOSE $PORT

# Start the server
CMD [ "npm", "run", "prod" ]
