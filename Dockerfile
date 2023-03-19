FROM node:16.17.0

WORKDIR /app
# Copies only package.json and yarn.lock before running yarn install. This enables better caching, as the yarn install step will only be re-run if these files have changed.
COPY package.json yarn.lock ./
# Uses the --frozen-lockfile option to ensure that yarn.lock is not updated during the install process
# Adds the --production flag to only install production dependencies, skipping development dependencies
RUN yarn install --frozen-lockfile --production

COPY . .

RUN yarn build

EXPOSE 8080

# Create app directory
WORKDIR /app

COPY ./nginx.conf /etc/nginx/conf.d/default.conf
COPY --from=builder /app/public /usr/share/nginx/html

EXPOSE 8080
