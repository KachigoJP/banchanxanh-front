FROM node:16.17.0

WORKDIR /app

COPY . /app

RUN yarn install
RUN yarn build

EXPOSE 8080

CMD npm run start
