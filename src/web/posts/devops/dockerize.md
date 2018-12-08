# 14.1 Dockerize the app with Docker

## Install
Make sure Docker is installed in your machine.

## Configure
Create a file called `Dockerfile` at the root of your project and add the following code

    FROM node:latest
    WORKDIR /usr/src/app
    COPY package.json /tmp/package.json
    COPY package-lock.json /tmp/package-lock.json
    RUN cd /tmp && npm i
    RUN mkdir -p /opt/app && cp -a /tmp/node_modules /opt/app/
    WORKDIR /opt/app
    COPY .babelrc /opt/app/.babelrc
    EXPOSE 5000
    CMD [ "./node_modules/.bin/webpack-dev-server", "--config=webpack/webpack.config.js", "--env=dev", "--hot", "--inline", "--host=0.0.0.0"]


Create a file called `docker-compose-web.yml` and add the following code.

    web:
      build: .
      ports:
      - 5000:5000
      volumes:
      - ./src:/opt/app/src:rw
      - ./webpack:/opt/app/webpack:rw
      environment:
      - NODE_ENV=development

Add the following npm script to your package.json

    ...
    "scripts": {
        "docker": "docker-compose -f docker-compose-web.yml up",
    }

Commit and push.
