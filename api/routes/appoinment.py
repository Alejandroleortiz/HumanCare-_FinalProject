from flask import Blueprint, request, jsonify
from models import Medical_appoinment

bpAppoinment = Blueprint('bpAppoinment', __name__)

@bpAppoinment.route('/appoinment', methods=['POST']) #Agregar cita medica
def add_medical_appoinment():
    datos = request.get_json()
    
    if not 'file' in datos:
        return jsonify({ "msg": "file required"}), 422
    
    appoinment = Medical_appoinment()
    appoinment.user_id = datos['user_id']
    appoinment.doctor_id = datos['doctor_id']
    appoinment.file = datos['file']
    appoinment.comment = datos['comment']

   
    
    appoinment.save()
    

    return jsonify(appoinment.serialize())