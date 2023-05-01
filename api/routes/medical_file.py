from flask import Blueprint, request, jsonify
from models import Medical_file

bpFile = Blueprint('bpFile', __name__)

@bpFile.route('/medical-file', methods=['POST']) #Agregar Historial medico y archivos medicos
def add_medical_file():
    datos = request.get_json()
    
    if not 'file' in datos:
        return jsonify({ "msg": "Medical File required"}), 422
    
    
    medicalFile = Medical_file()
    medicalFile.file = datos['file']
    medicalFile.user_id = datos['user_id']
   
    
    medicalFile.save()
    
    return jsonify(medicalFile.serialize())