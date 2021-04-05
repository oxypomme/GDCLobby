FROM node:15-alpine AS builder

ENV NODE_ENV build

WORKDIR /usr/src/api

COPY api/. .

RUN npm install && npm run build

# ---

FROM node:15-alpine

ENV NODE_ENV=production

WORKDIR /usr/src/api

COPY ./.env ./
COPY --from=builder /usr/src/api/package*.json ./
COPY --from=builder /usr/src/api/dist ./dist

RUN npm ci

EXPOSE 3000

CMD npm run start:prod
