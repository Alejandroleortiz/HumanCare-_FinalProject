from datetime import datetime
from flask import Blueprint, request, jsonify
from flask_jwt_extended import create_access_token
from models import User, Role
from werkzeug.security import generate_password_hash, check_password_hash

bpAuth = Blueprint('bpAuth', __name__)

@bpAuth.route('/signup', methods=['POST']) #register
def signup():
    
    # Datos de la tabla "users"
    email = request.json.get('email')
    password = request.json.get('password')
    role = request.json.get('roles_id') # Datos de la tabla roles
    
    if not email:
        return jsonify({ "msg": "email is required"}), 422

    if not password:
        return jsonify({ "msg": "Password is required"}), 422
    
    if not role:
        return jsonify({ "msg": "Role is required"}), 422

    user = User.query.filter_by(email=email).first()

    if user:
        return jsonify({ "msg": "User already exists"}), 400

    
    user = User()
    user.email = email
    user.password = generate_password_hash(password)

    
    # Token sin vencimiento
    access_token = create_access_token(identity=user.id)

    data = {
        "access_token": access_token,
        "user": user.serialize()
    }

    return jsonify(data), 200

@bpAuth.route('/signin', methods=['POST']) #login
def signin():
    email = request.json.get('email')
    password = request.json.get('password')

    if not email:
        return jsonify({ "msg": "email is required"}), 422

    if not password:
        return jsonify({ "msg": "Password is required"}), 422

    user = User.query.filter_by(email=email).first()

    if not user:
        return jsonify({ "msg": "email/Password are incorrects"}), 401

    if not check_password_hash(user.password, password):
        return jsonify({ "msg": "email/Password are incorrects"}), 401
    
    access_token = create_access_token(identity=user.id)

    data = {
        "access_token": access_token,
        "user": user.serialize()
    }

    return jsonify(data), 200