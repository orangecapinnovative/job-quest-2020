FROM node:alpine

WORKDIR /app

RUN npm install nodemon -g

EXPOSE 3030