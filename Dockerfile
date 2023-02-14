ARG NODE_VERSION=16.13


FROM node:${NODE_VERSION}-alpine as builder
WORKDIR /app
COPY . .


FROM node:${NODE_VERSION}-alpine as runner
# Node ENV
ARG NODE_ENV
ENV NODE_ENV ${NODE_ENV:-production}

WORKDIR /app
COPY --from=builder /app/${MYAPP}/package.json      ./
#COPY --from=builder /app/${MYAPP}/build             ./build
COPY --from=builder /app/${MYAPP}/node_modules      ./node_modules
#COPY --from=builder /app/${MYAPP}/public            ./public

EXPOSE 3000
CMD ["yarn", "start"]
