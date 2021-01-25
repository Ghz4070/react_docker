# pull official base image
FROM node:14.15.4-alpine3.10

# set working directory
WORKDIR /home/node/app

# add `/node_modules/.bin` to $PATH
ENV PATH /node_modules/.bin:$PATH

# install app dependencies
COPY ./package.json ./
COPY ./yarn.lock ./
RUN yarn install 

# add app
COPY . ./

# start app
CMD ["yarn", "dev"]