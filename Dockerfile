# Docker file for the node js development mode

# The environment is development and PATH is exported to include node_modules
# in the sibling directory

# Docker container is built in the following phases : 
# - Make /vendor directory 
# - Assign it to the node user
# - /vendor path is included to include node_modules
# - COPY the package.json and package-lock.json to the /vendor
# - Set the npm config to download the particular version to avoid conflict
# - RUN npm install with production or development mode
# - COPY the project into the /vendor/app directory
# - Finally serve it with ng serve

# Docker container has basically has the file structure as
# - /vendor/node_modules
# - /vendor/app

# Specify the default image for making the build
# Revert back to node:17.8.0-alpine image 
# If args is not provided
ARG BUILD_IMAGE=node:18.10.0-alpine

# Installs the current application on a Node Image.
FROM $BUILD_IMAGE AS espl-prod-build

# The qq is for silent output in the console
# You are welcome to modify this part as it
# RUN apt-get update -qq && apt-get install -y build-essential libpq-dev vim

# Getting the environment and setting it to env
# Setting it to development mode if ARG is missing
ENV NODE_ENV=production

# Getting the build argument for staging or production
ARG DEPLOY_MODE=production

# Change the working directory to /vendor
WORKDIR /vendor

# Explicitly export the node path to search for our node_modules dir
ENV PATH=/vendor/node_modules/.bin:$PATH

# Copying the file to install and save the node_modules
COPY package*.json ./

# Setting the npm configuration to save exact version so
# that the npm does not install the latest version and
# the app does not breaks
RUN npm config set save=true && npm config set save-exact=true

# Install angular cli globally AND
# Run the npm install with prefix to save node_modules to 
# different directory, otherwise volume mount will override
# the current file system on the hostmachine and there will be
# no any node_modules from where they can read the data
# i.e Above WORKDIR /app is Overriden by line volumes: - ./:/app
# So, we will create an install directory and install node_modules 
# there and then import it from there
RUN npm install -g @angular/cli && npm install --production

# Changing the working directory to be /vendor/app
WORKDIR /vendor/app

# COPY whole project inside the container which is /app in container
COPY . .

# !IMPORTANT Copy the node modules for VSCode Intellisense
RUN ng build --configuration=$DEPLOY_MODE

# Stage 2 build
FROM nginx:1.20.2-alpine

# Set working directory to nginx asset directory
WORKDIR /usr/share/nginx/html

RUN rm -rf *

# Copy configuration file from the previous build stage to current one
COPY --from=espl-prod-build /vendor/app/deployment/config/prod/nginx.conf /etc/nginx/conf.d/default.conf

# Copy the static files from the build stage to the nginx folder
COPY --from=espl-prod-build /vendor/app/dist/espl-website /usr/share/nginx/html

# Containers run nginx with global directives and daemon off
ENTRYPOINT ["nginx", "-g", "daemon off;"]
