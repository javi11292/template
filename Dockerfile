FROM node:alpine as client
WORKDIR /client
COPY client/package*.json ./
RUN npm install
COPY client .
RUN npm run build

FROM node:alpine as server
ARG NODE_ENV=production
ENV NODE_ENV $NODE_ENV
WORKDIR /server
COPY server/package*.json ./
RUN npm install
COPY server .

FROM node:alpine
RUN mkdir /server && chown node /server
USER node
WORKDIR /server
COPY --from=client /client/build build
COPY --from=server /server .

EXPOSE 3000