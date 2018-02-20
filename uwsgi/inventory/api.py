

def thing_id_get(thingId):
    print(thingId)
    return {"thingId": thingId}, 200
def thing_id_post(thingId, data):
    return data, 201
def bin_id_get(id):
    pass
def test_get(arg):
    return {"note": "Hello worlds %r" % arg}, 200
