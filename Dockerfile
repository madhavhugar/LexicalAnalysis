FROM node:10.16

RUN apt-get update
WORKDIR /app
COPY package*.json ./
RUN yarn install
ENV PATH="./node_modules/.bin:${PATH}"

