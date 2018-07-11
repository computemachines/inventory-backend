FROM alpine

RUN apk update && apk add nginx bash curl ca-certificates openssl ncurses coreutils python2 make gcc g++ libgcc linux-headers grep util-linux binutils findutils
#nodejs-npm
RUN touch /root/.bashrc
RUN curl -o- https://raw.githubusercontent.com/creationix/nvm/v0.33.11/install.sh | bash
RUN . /root/.nvm/nvm.sh && nvm install -s node && nvm use node
RUN . /root/.nvm/nvm.sh && npm -v

RUN mkdir -pv /data/www/static-webpack
COPY static-webpack/package.json static-webpack/package-lock.json /data/www/static-webpack/

RUN . /root/.nvm/nvm.sh && cd /data/www/static-webpack; npm i

COPY static-webpack/ /data/www/static-webpack/
RUN . /root/.nvm/nvm.sh && cd /data/www/static-webpack; npm run build
RUN . /root/.nvm/nvm.sh && rm /etc/nginx/conf.d/default.conf
COPY inventory-nginx.conf /etc/nginx/conf.d/

run mkdir -pv /run/nginx

# CMD cat /etc/resolv.conf

# RUN nginx -t
CMD ["nginx", "-g", "daemon off;"]

# COPY inventory/ /data/www/inventory/
# COPY inventory.ini /etc/uwsgi/conf.d/

# CMD cd /data/www/; uwsgi --ini /etc/uwsgi/conf.d/inventory.ini
