FROM node:12-alpine as builder

ARG NODE_APP_INSTANCE
ENV NODE_ENV="development"

WORKDIR /app/
COPY package.json yarn.lock ./
RUN yarn install --frozen-lockfile
COPY . .
RUN NODE_ENV=production yarn export

FROM node:12-alpine
RUN apk add --no-cache \
        python3 \
        py3-pip \
    && pip3 install --upgrade pip \
    && pip3 install \
        awscli \
    && rm -rf /var/cache/apk/*


ARG NODE_APP_INSTANCE
ENV NODE_ENV="production"

WORKDIR /app/
COPY --from=builder /app/scripts /app/scripts
COPY --from=builder /app/out /app/out
COPY --from=builder /app/.next /app/.next
COPY config /app/config
COPY package.json yarn.lock next.config.js ./
COPY public ./public
COPY server.js ./server.js
RUN yarn install --frozen-lockfile

EXPOSE 3000

CMD yarn start
