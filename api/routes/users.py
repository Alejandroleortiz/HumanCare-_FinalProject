from flask import Blueprint, request, jsonify
from flask_jwt_extended import jwt_required
from werkzeug.security import generate_password_hash
from models import User


bpUser = Blueprint('bpUser', __name__)

@bpUser.route('/users', methods=['GET']) #Obtener todos los usuarios
def get_users():
    users = User.query.all()
    users = list(map(lambda user: user.serialize(), users))
    return jsonify(users), 200
    
    
@bpUser.route('/user/<int:id>', methods=['GET']) #Obtener usuario por su id
@jwt_required()
def get_user_by_id(id):
    user = User.query.get(id)

    if user is None:
        return jsonify({'error': 'User not found'}), 404

    return jsonify(user.serialize()), 200

@bpUser.route('/user/<int:id>', methods=['PUT']) #actualizar usuarios por su id
@jwt_required()
def update_users(id): 
    user = User.query.get(id)
   
    if not user:
        return jsonify({"msg": "User not found"}), 404
    
    # datos para actualizar
    email = request.json.get('email')
    password = request.json.get('password')
    profile_information = request.json.get('profile_information')
    profile_picture = request.json.get('profile_picture')
    role = request.json.get('roles_id')
    print(role)
    
    # Actualizar los campos del usuario
    if email:
        user.email = email

    if password:
        user.password = generate_password_hash(password)

    if profile_information:
        user.profile_information = profile_information

    if profile_picture:
        user.profile_picture = profile_picture

    if role:
        user.role = role

    user.update()

    return jsonify(user.serialize()), 200

@bpUser.route('/user/<int:id>', methods=['DELETE'])
@jwt_required()
def delete_user(id):
    # Busca el usuario por su ID
    user = User.query.get(id)

    # Si no se encuentra el usuario, devuelve este mensaje
    if not user:
        return jsonify({"msg": "User not found"}), 404

    # Eliminar el usuario de la base de datos
    user.delete()

    # Devuelve un mensaje de eliminacion exitosa
    return jsonify({"msg": "User successfully deleted"}), 200