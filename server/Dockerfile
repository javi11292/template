FROM node

RUN apt-get update

ADD . /code
WORKDIR /code

ENV NODE_ENV production

CMD npm run start:${NODE_ENV}