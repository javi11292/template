FROM node

RUN apt-get update

ADD . /code
WORKDIR /code

CMD npm run start:${NODE_ENV}