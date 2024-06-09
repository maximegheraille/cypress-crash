ARG CHROME_VERSION='120.0.6099.109-1'
ARG NODE_VERSION='20.10.0'

FROM cypress/factory:latest

WORKDIR /
# Set NODE_OPTIONS environment variable
ENV NODE_OPTIONS="--max_old_space_size=8192"
RUN npm install -g pnpm

COPY package.json pnpm-lock.yaml ./

RUN pnpm install --frozen-lockfile

RUN pnpm exec playwright install --with-deps webkit

COPY . /opt/app
