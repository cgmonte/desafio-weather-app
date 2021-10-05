FROM nginx:alpine
WORKDIR /usr/share/nginx/html
RUN rm -rf ./*
COPY /build .

RUN rm -rf /etc/nginx/conf.d
COPY /nginx.conf /etc/nginx/conf.d/default.conf
# COPY conf /etc/nginx

ENTRYPOINT ["nginx", "-g", "daemon off;"]