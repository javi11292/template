FROM node:alpine as server
ARG NODE_ENV=production
ENV NODE_ENV $NODE_ENV
WORKDIR /server
COPY server/package*.json ./
RUN npm install
COPY server .

FROM node:alpine
RUN mkdir /server && chown node:node /server
USER node
COPY --from=server /server /server
WORKDIR /server

EXPOSE 3000

ENTRYPOINT []

CMD ["node", "src/index"]