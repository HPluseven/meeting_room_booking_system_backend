FROM node:18.20.0-alpine as build-stage

WORKDIR /app

# 安装 pnpm@10
RUN npm install pnpm@10 -g

COPY package.json pnpm-lock.yaml ./

RUN npm config set registry https://registry.npmmirror.com/

RUN pnpm install

COPY . .

RUN pnpm run build
RUN pnpm run migration:create src/migrations/data
RUN pnpm run migration:run

# production stage
FROM node:18.20.0-alpine as production-stage

COPY --from=build-stage /app/dist /app
COPY --from=build-stage /app/package.json /app/package.json

WORKDIR /app

# 安装 pnpm@10
RUN npm install pnpm@10 -g

RUN npm config set registry https://registry.npmmirror.com/

RUN pnpm install --production

EXPOSE 3005

CMD ["node", "/app/main.js"]
