FROM node:gallium-slim

WORKDIR /app

COPY package.json .

RUN npm install

COPY . .

CMD [ "npm", "run", "dev" ]
