FROM node:16

WORKDIR /app

COPY package*.json ./

RUN npm install

COPY . .

ENV MONGODB_URL=mongodb+srv://admin:admin@starwars.ikyldtq.mongodb.net/star_wars 

EXPOSE 7004

CMD [ "npm","start" ]