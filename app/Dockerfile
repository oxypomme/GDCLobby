FROM node:15-alpine as builder

ENV NODE_ENV build

WORKDIR /usr/src/app

COPY app/. .

RUN npm install && npm run build

# ---

FROM nginx:1.19-alpine

COPY --from=builder /usr/src/app/dist /usr/share/nginx/html