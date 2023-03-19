FROM node:16.17.0 as builder

WORKDIR /app

COPY . /app

RUN yarn install
RUN yarn build

FROM nginx:1.23.3 as final

# Create app directory
WORKDIR /app

COPY ./nginx.conf /etc/nginx/conf.d/default.conf
COPY --from=builder /app/public /usr/share/nginx/html

EXPOSE 8080