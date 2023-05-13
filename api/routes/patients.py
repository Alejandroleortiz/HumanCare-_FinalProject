from flask import Blueprint, request, jsonify
from models import Medical_record
from flask_jwt_extended import jwt_required, get_jwt_identity

bpPatient = Blueprint('bpPatient', __name__)

@bpPatient.route('/patient', methods=['POST']) #Agregar Paciente
@jwt_required()
def add_patient():
    datos = request.get_json()
    
    patient = Medical_record()
    patient.user_id = get_jwt_identity() # Asignar user_id después de inicializar 'patient'
    patient.full_name = datos['full_name']
    patient.age = datos['age']
    patient.identity_card = datos['identity_card']
    patient.adress = datos['adress']
    patient.phone_number = datos['phone_number']
    patient.reason_for_consultation = datos['reason_for_consultation']
    patient.current_illness = datos['current_illness']
    patient.criminal_record = datos['criminal_record']
    patient.family_history = datos['family_history']
    patient.surgical_history = datos['surgical_history']
    patient.physical_examination = datos['physical_examination']
    patient.diagnosis = datos['diagnosis']
    patient.treatment = datos['treatment']
    patient.observations = datos['observations']
    
    
    patient.save()
    
    if not patient.id:
        return jsonify({ "msg": "patient required"}), 422
    
    # if patient.id:
    #     return jsonify({ "msg": "patient already exists"}), 400

    
    
    return jsonify(patient.serialize())


@bpPatient.route('/patient', methods=['GET']) #Obtener todos los pacientes
@jwt_required()
def get_patients():
    user_id = get_jwt_identity() # Obtener el id del usuario autenticado
    patients = Medical_record.query.filter_by(user_id=user_id).all() # Filtrar los pacientes por el id del usuario
    patients = list(map(lambda patient: patient.serialize(), patients))
    return jsonify(patients), 200

@bpPatient.route('/patient/<int:id>', methods=['DELETE']) #Obtener todos los archivos medicos
@jwt_required()
def delete_medical_record(id):
    user_id = get_jwt_identity() # Obtener el id del usuario autenticado
    patient = Medical_record.query.get(id)
    
    if patient is None:
        return jsonify({"msg":"No patient found with given id"}), 404
    
    if patient.user_id != user_id:
        return jsonify({"msg":"Unathorized"}), 403 # Si el usuario no es el propietario del paciente, retorna un error 403.
    
    patient.delete()
   
    return jsonify({"msg":"Patient deleted"}), 200