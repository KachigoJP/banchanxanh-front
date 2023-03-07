FROM node:18 as builder

# Create app directory
WORKDIR /app
COPY package.json .
COPY yarn.lock .
RUN yarn global add serve pm2
RUN yarn install
COPY . .
RUN yarn build

EXPOSE 5000

ENTRYPOINT [ "pm2-runtime", "start", "ecosystem.json" ]