FROM alpine


RUN apk update && apk add python3 uwsgi-python3 
RUN pip3 install Flask flask-restful pymongo flask-pymongo


RUN mkdir -pv /data/www/
ADD inventory/ /data/www/inventory/
ADD inventory.ini /etc/uwsgi/conf.d/

CMD cd /data/www/; uwsgi --ini /etc/uwsgi/conf.d/inventory.ini