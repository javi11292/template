FROM node

RUN apt-get update

RUN npm i -g pm2

WORKDIR /code

CMD pm2-runtime start ecosystem.config.js

EXPOSE 80
