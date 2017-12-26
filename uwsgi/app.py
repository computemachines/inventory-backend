import connexion

app = connexion.FlaskApp("inventory_api")
flask_app = app.app

app.add_api("swagger.yaml")
app.run()
