FROM node

RUN apt-get update

WORKDIR /code
COPY package.json package-lock.json ./

RUN npm install

COPY . .