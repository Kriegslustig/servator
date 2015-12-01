FROM alpine:edge

MAINTAINER Kriegslustig <github@kriegslustig.me>

WORKDIR /app
VOLUME /app
EXPOSE 80 3042
CMD npm i && npm start

RUN apk update
RUN apk add nodejs

