from flask import Flask
from flask_cors import CORS
from routes.field_routes import field_bp

app = Flask(__name__)

CORS(app)

app.register_blueprint(field_bp)

@app.route("/")
def home():
    return {
        "message": "FormSaarthi Backend Running"
    }

print("\nRegistered Routes:")

for rule in app.url_map.iter_rules():
    print(rule)

if __name__ == "__main__":
    app.run(debug=True)