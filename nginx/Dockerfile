FROM alpine

RUN apk update && apk add nginx nodejs-npm

RUN mkdir -pv /data/www/
COPY static-webpack/ /data/www/static-webpack
RUN cd /data/www/static-webpack; npm i
RUN cd /data/www/static-webpack; npm run build:dev
RUN rm /etc/nginx/conf.d/default.conf
COPY inventory-nginx.conf /etc/nginx/conf.d/

run mkdir -pv /run/nginx

# CMD cat /etc/resolv.conf

# RUN nginx -t
CMD ["nginx", "-g", "daemon off;"]

# COPY inventory/ /data/www/inventory/
# COPY inventory.ini /etc/uwsgi/conf.d/

# CMD cd /data/www/; uwsgi --ini /etc/uwsgi/conf.d/inventory.ini
