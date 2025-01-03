ARG EDGE_VERSION='120.0.2210.91-1'
ARG NODE_VERSION='20.10.0'

FROM cypress/factory:latest

WORKDIR /

RUN npm install -g pnpm

COPY package.json package-lock.json ./

RUN npm i

RUN pnpm exec playwright install --with-deps webkit

COPY . /opt/app