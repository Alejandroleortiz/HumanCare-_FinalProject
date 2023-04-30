import os
from flask import Flask, request, jsonify
from flask_migrate import Migrate
from flask_jwt_extended import JWTManager
from flask_cors import CORS
from dotenv import load_dotenv
from models import db
from routes.main import bp
from routes.auth import bpAuth
from routes.roles import bpRole
from routes.users import bpUser
from routes.patients import bpPatient

load_dotenv()

app = Flask(__name__)
app.config['DEBUG'] = True
app.config['ENV'] = 'development'
app.config['SQLALCHEMY_TRACK_MODIFICATIONS'] = False
app.config['SQLALCHEMY_DATABASE_URI'] = os.getenv('DATABASE_URI')
app.config['JWT_SECRET_KEY'] = "secret-key"

db.init_app(app)
Migrate(app, db)
jwt = JWTManager(app)
CORS(app)

app.register_blueprint(bp)
app.register_blueprint(bpAuth, url_prefix='/api')
app.register_blueprint(bpRole, url_prefix='/api')
app.register_blueprint(bpUser, url_prefix='/api')
app.register_blueprint(bpPatient, url_prefix='/api')

if __name__ == '__main__':
    app.run(port=9000)
