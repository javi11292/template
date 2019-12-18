FROM node

ENV NODE_ENV production

RUN apt-get update

ADD . /code
WORKDIR /code/server

CMD npm run start:${NODE_ENV}