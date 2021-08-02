FROM node:14-alpine

WORKDIR /app
COPY . /app

RUN yarn
RUN yarn build
ENTRYPOINT ["node"]
CMD ["./dist/server.js"]
EXPOSE 3000
