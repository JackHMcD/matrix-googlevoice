FROM node:19-slim

WORKDIR /usr/src/app

COPY package.json ./

COPY config.example.js config.js
COPY matrix-googlevoice-bot.js matrix-googlevoice-bot.js
RUN npm install

VOLUME /storage
ENV DATA_PATH="/storage"

CMD ["node", "matrix-googlevoice"]
