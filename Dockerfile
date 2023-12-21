FROM alpine
RUN apk add --update nodejs npm
WORKDIR /usr/src/app
COPY package*.json ./
# Install Node.js dependencies
RUN npm install
# Copy the rest of the application code to the working directory
COPY . .
CMD ["node", "matrix-googlevoice-bot.js"]
