FROM node:14
WORKDIR /app
COPY package*.json ./
RUN npm ci
COPY . .
CMD [ "node", "index.js" ]
