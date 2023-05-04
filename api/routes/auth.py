from datetime import datetime
from flask import Blueprint, request, jsonify
from flask_jwt_extended import create_access_token
from models import User, Role
from werkzeug.security import generate_password_hash, check_password_hash

bpAuth = Blueprint('bpAuth', __name__)

@bpAuth.route('/signup', methods=['POST']) #register
def signup():
    
    # Datos de la tabla "users"
    first_name = request.json.get('first_name')
    last_name = request.json.get('last_name')
    gender = request.json.get('gender')
    email = request.json.get('email')
    phone_number = request.json.get('phone_number')
    speciality = request.json.get('speciality')
    city = request.json.get('city')
    country = request.json.get('country')
    password = request.json.get('password')
    profile_picture = request.json.get('profile_picture')
    role = request.json.get('roles_id') # Datos de la tabla roles
    
    if not first_name:
        return jsonify({ "msg": "First name information is required"}), 422
    
    if not last_name:
        return jsonify({ "msg": "Last name information is required"}), 422
    
    if not gender:
        return jsonify({ "msg": "Gender information is required"}), 422
    
    if not email:
        return jsonify({ "msg": "email is required"}), 422
    
    if not phone_number:
        return jsonify({ "msg": "Phone number information is required"}), 422
    
    if not speciality:
        return jsonify({ "msg": "Speciality information is required"}), 422
    
    if not city:
        return jsonify({ "msg": "city information is required"}), 422
    
    if not country:
        return jsonify({ "msg": "country information is required"}), 422

    if not password:
        return jsonify({ "msg": "Password is required"}), 422
    
    if not profile_picture:
        return jsonify({ "msg": "Profile picture is required"}), 422
    
    

    user = User.query.filter_by(email=email).first()

    if user:
        return jsonify({ "msg": "User already exists"}), 400

    
    user = User()
    user.first_name = first_name
    user.last_name = last_name
    user.gender = gender
    user.email = email
    user.phone_number = phone_number
    user.speciality = speciality
    user.city = city
    user.country = country
    user.password = generate_password_hash(password)
    user.profile_picture = profile_picture
    user.roles_id = role
    user.save()
    
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