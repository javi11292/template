FROM node

RUN apt-get update

WORKDIR /code
COPY package*.json ./

RUN npm install

COPY . .