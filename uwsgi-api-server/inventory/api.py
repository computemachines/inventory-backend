from pymongo import MongoClient
from pymongo.errors import ConnectionFailure

DEBUG = False
if DEBUG:
    db_host = "localhost"
else:
    db_host = "mongo"
client = MongoClient(db_host, 27017)

db = client.inventorydb

def things_put(data):
    print(data)
    label = data["label"]
    db.things.insert_one(data)
    return label, 201
def thing_get(thing_label):
    thing = db.things.find_one({"label": thing_label})
    return {
        "label": thing["label"],
        "name": thing["name"]
    }, 200

def bins_put(data):
    pass
def bin_get(bin_label):
    pass
