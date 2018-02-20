import connexion

app = connexion.FlaskApp("inventory_api")
flask_app = app.app

app.add_api("inventory/swagger.yaml")

print("Running Flask App")
app.run()
