FROM node

RUN apt-get update

WORKDIR /server
COPY package*.json ./

RUN npm install

COPY . .