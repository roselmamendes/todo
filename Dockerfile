FROM node:alpine

RUN mkdir -p /usr/src/app

WORKDIR /usr/src

COPY package.json /usr/src/

RUN npm install

COPY . /usr/src/app

WORKDIR /usr/src/app

EXPOSE 3000