FROM node:16.13.2-alpine

WORKDIR /usr/app

COPY package*.json ./
RUN npm ci -qy

COPY . .

RUN npm run build

EXPOSE 8080


CMD ["npm", "start"]
