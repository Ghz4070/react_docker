# pull official base image
FROM node:14.15.4-alpine3.10
LABEL maintainer "iGhz <ghezal-ilies@outlook.fr>"

# set working directory
RUN mkdir -p /usr/src/app
WORKDIR /usr/src/app

# add `/node_modules/.bin` to $PATH
ENV PATH /node_modules/.bin:$PATH

COPY package*.json /usr/src/app/
RUN yarn install && yarn cache clean

# add app
COPY . /usr/src/app

# start app
CMD ["yarn", "dev"]