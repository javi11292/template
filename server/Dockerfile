FROM node

RUN apt-get update

RUN npm i -g pm2

ADD . /code
WORKDIR /code

CMD pm2-runtime start ecosystem.config.js
