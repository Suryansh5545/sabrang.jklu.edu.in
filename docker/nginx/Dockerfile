FROM nginx:1.25.1-alpine
COPY docker/nginx/nginx_production.conf /etc/nginx/conf.d/default.conf
RUN rm -rf /usr/share/nginx/html/*
COPY frontend /usr/share/nginx/html