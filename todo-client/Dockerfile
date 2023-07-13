FROM node:alpine

WORKDIR /user/application 

COPY package.json .

RUN ["npm", "install"]

COPY . .

CMD [ "npm", "run", "start" ]