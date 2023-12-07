FROM node:18-alpine as BUILD_IMAGE

WORKDIR /app

COPY package.json .
COPY vite.config.ts .

RUN npm install

COPY . .

EXPOSE 8080

RUN npm run build

FROM node:18-alpine as PROD_IMAGE

WORKDIR /app

COPY --from=BUILD_IMAGE /app/dist /app/dist
EXPOSE 8080

COPY package.json .
COPY vite.config.ts . 

RUN npm install typescript
CMD [ "npm" ,"run", "preview" ]