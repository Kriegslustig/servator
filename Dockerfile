FROM alpine:edge

MAINTAINER Kriegslustig <github@kriegslustig.me>

WORKDIR /app
VOLUME /app
ADD package.json /app/
EXPOSE 80 3042
CMD npm start

RUN apk update
RUN apk add nodejs
RUN npm i

