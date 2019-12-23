FROM node:alpine AS image

RUN mkdir /server

WORKDIR /client
COPY client/package*.json ./
RUN npm install

COPY client .
RUN npm run build
RUN mv build /server

WORKDIR /server
COPY server/package*.json ./
RUN npm install

COPY server .


FROM node:alpine

WORKDIR /server
COPY --from=image /server .