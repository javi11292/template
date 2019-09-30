FROM node

RUN apt-get update

RUN npm i -g pm2

ADD . /code
WORKDIR /code

ENV NODE_ENV production

CMD npm run start:${NODE_ENV}
