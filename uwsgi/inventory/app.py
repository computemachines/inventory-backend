from flask import Flask, request
from flask_restful import Resource, Api
from flask_pymongo import PyMongo
import json
import os

app = Flask(__name__)
api = Api(app)

if 'DOCKER' in os.environ.keys():
    app.config['MONGO_HOST'] = 'mongo'
else:
    app.config['MONGO_HOST'] = 'localhost'

app.config['MONGO_DBNAME'] = 'inventory'
mongo = PyMongo(app)

class Thing(Resource):
    """Represents a physical thing."""
    def get(self, thingId):
        return mongo.db.things.find_one_or_404({'_id': thingId})
    def post(self, thingId):
        thing = json.loads(request.form['data'])
        thing['_id'] = thing['thingId']
        del thing['thingId']
        mongo.db.things.insert_one(thing)
        return mongo.db.things.find_one_or_404({'_id': thingId})

class Item(Resource):
    """Represents a specific set of equivalent things."""
    def get(self, itemId):
        return mongo.db.items.find_one_or_404({"_id": itemId})
    def put(self, itemId):
        item = json.loads(request.form['data'])


api.add_resource(Thing, '/thing/<int:thingId>')
