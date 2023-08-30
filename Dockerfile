FROM node:18-alpine

COPY . .

WORKDIR /app/notication-service

COPY package*.json ./

RUN npm install

RUN npm install cross-env -g

COPY . .

RUN npm run build

CMD ["npm", "run","prod"]