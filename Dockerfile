# pull official base image
FROM node:14.15.4-alpine3.10
LABEL maintainer "iGhz <ghezal-ilies@outlook.fr>"

# set working directory
WORKDIR /home/node/app

# add `/node_modules/.bin` to $PATH
ENV PATH /node_modules/.bin:$PATH

# install app dependencies
COPY ./package.json ./
# COPY ./yarn.lock ./
RUN yarn cache clean && yarn install --network-timeout 100000

# add app
COPY . ./

# start app
CMD ["yarn", "dev"]