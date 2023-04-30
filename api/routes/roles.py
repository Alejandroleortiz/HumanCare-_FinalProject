from flask import Blueprint, request, jsonify
from models import Role


bpRole = Blueprint('bpRole', __name__)

@bpRole.route('/roles', methods=['POST']) #Crear roles 
def create_role():
    datos = request.get_json()
    
    role = Role()
    role.name = datos['name']
    role.save()
    
    if not role.name:
        return jsonify({ "msg": "Name is required"}), 422
    
    if role.name:
        return jsonify({ "msg": "Role already exists"}), 400

    return jsonify(role.serialize())
    
    
@bpRole.route('/roles', methods=['GET']) #Consultar roles 
def get_roles():
    roles = Role.query.all()
    roles = list(map(lambda role: role.serialize(), roles))
    return jsonify(roles), 200
