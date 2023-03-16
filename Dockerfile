FROM node:16.17.0

WORKDIR /app

COPY . /app

RUN yarn install
RUN yarn build

EXPOSE 80

CMD [ "npx", "serve", "-s", "public", "-l", "80" ]
