FROM node:19-slim

WORKDIR /usr/src/app

COPY package.json ./

COPY config.example.js config/config.js
COPY matrix-googlevoice-bot.js matrix-googlevoice-bot.js
RUN npm install

VOLUME /usr/src/app/config
ENV DATA_PATH="/storage"

CMD ["node", "matrix-googlevoice"]
