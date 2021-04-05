FROM node:12.18-alpine AS builder

WORKDIR /usr/src/api
COPY ["./package.json", "./package-lock.json*", "./"]
RUN npm install
COPY . .

RUN ["npm", "run", "build"]

FROM node:12.18-alpine
ENV NODE_ENV=production
WORKDIR /usr/src/api
COPY "../.env" "./.env"
COPY --from=builder /usr/src/api/ ./


EXPOSE 3000
CMD ["npm", "run", "start:prod"]
