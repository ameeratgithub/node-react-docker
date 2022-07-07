FROM node:16.13.2-alpine

WORKDIR /usr/app

COPY package*.json ./

RUN npm ci -qy

RUN mkdir -p node_modules/.cache && chmod -R 777 node_modules/.cache

COPY . .

EXPOSE 3000

CMD ["npm", "start"]
