FROM node:alpine as client
ARG NODE_ENV=production
ENV NODE_ENV $NODE_ENV
ENV NEXT_TELEMETRY_DISABLED 1
WORKDIR /client
COPY client/package*.json ./
RUN npm install
COPY client .
RUN npm run build

FROM node:alpine
ARG NODE_ENV=production
ENV NODE_ENV $NODE_ENV
ENV NEXT_TELEMETRY_DISABLED 1
COPY --from=client /client /client
WORKDIR /client

EXPOSE 3000

ENTRYPOINT []

CMD ["node", "/client/node_modules/.bin/next", "start"]