ARG CHROME_VERSION='131.0.6778.108-1'
ARG NODE_VERSION='20.10.0'

FROM cypress/factory:latest

WORKDIR /opt/app

# Install corepack
RUN npm install -g corepack

# Enable corepack
RUN corepack enable

# Install AWS CLI
RUN apt-get update && apt-get install -y awscli

# Copy only the package.json and pnpm-lock files first
COPY package.json pnpm-lock.yaml ./

# Install dependencies without copying the entire context
RUN pnpm install --frozen-lockfile

# Copy the rest of the application files
COPY . /opt/app