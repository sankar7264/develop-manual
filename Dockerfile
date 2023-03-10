ARG NODE_VERSION=16.14.0


FROM node:${NODE_VERSION}-slim as builder
WORKDIR /app
COPY . .


FROM node:${NODE_VERSION}-slim as runner
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
