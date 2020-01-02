FROM node:alpine AS image

RUN mkdir /client && chown node /client
RUN mkdir /server && chown node /server

USER node

WORKDIR /client

COPY client/package*.json ./
RUN npm install

COPY client .
RUN npm run build && mv build /server

WORKDIR /server

ARG NODE_ENV=production
ENV NODE_ENV $NODE_ENV

COPY server/package*.json ./
RUN npm install

COPY server .


FROM node:alpine

RUN mkdir /server && chown node /server

USER node

WORKDIR /server

COPY --from=image /server .

EXPOSE 3000