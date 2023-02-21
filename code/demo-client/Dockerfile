FROM node:18-alpine AS builder

WORKDIR /opt/web

COPY package.json ./
COPY package-lock.json ./

RUN npm ci

COPY . .

RUN npm run build

FROM nginx:alpine

COPY --from=builder /opt/web/build/ /usr/share/nginx/html
