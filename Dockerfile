# pull official base image
FROM node:14.15.4-alpine3.10
LABEL maintainer "iGhz <ghezal-ilies@outlook.fr>"

# set working directory
WORKDIR /app

# add `/app/node_modules/.bin` to $PATH
ENV PATH /app/node_modules/.bin:$PATH

# install app dependencies
COPY package.json ./
RUN yarn install

# add app
COPY . ./

# start app
CMD ["yarn", "dev"]