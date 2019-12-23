FROM node:alpine

RUN mkdir /server

WORKDIR /client
COPY client/package*.json ./
RUN npm install

COPY client .
RUN npm run build
RUN mv build /server
RUN rm -r /client

WORKDIR /server
COPY server/package*.json ./
RUN npm install

COPY server .