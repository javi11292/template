FROM node:alpine as client
ARG NODE_ENV=production
ENV NODE_ENV $NODE_ENV
WORKDIR /client
COPY client/package*.json ./
RUN npm install
COPY client .
RUN npm run build

FROM node:alpine
RUN mkdir /client && chown node:node /client
USER node
COPY --from=client /client /client
WORKDIR /client

EXPOSE 3000

ENTRYPOINT []

CMD ["node", "/client/node_modules/.bin/next", "start"]