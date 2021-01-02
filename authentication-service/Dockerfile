FROM node:12-alpine

WORKDIR /usr/app

# RUN apk --no-cache add --virtual builds-deps build-base python 
COPY package.json .

RUN npm install 
# && apk del builds-deps

COPY . .    