FROM node:20-alpine

ENV TMX_PATH whats-number-game\
    TMX_NAME "What's number game"

LABEL name=${TMX_NAME}

LABEL description="Simple game for choose a number among several possibilities. Go ahead until found the correct number. Enjoy it!"

WORKDIR /${TMX_PATH}

COPY package*.json .

RUN npm i

COPY . .

EXPOSE 3000

CMD [ "npm", "start" ]
