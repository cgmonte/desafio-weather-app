FROM node:16-slim
ADD . /weather_app
WORKDIR /weather_app
RUN apt-get update -y
RUN apt-get install -y build-essential
RUN apt-get install -y python3
RUN npm install
RUN npm rebuild node-sass --force