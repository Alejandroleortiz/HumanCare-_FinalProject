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

@bpPatient.route('/patient/<int:id>', methods=['DELETE'])
def delete_patient(id):
    # Busca el usuario por su ID
    patient = Medical_record.query.get(id)

    # Si no se encuentra el usuario, devuelve este mensaje
    if not patient:
        return jsonify({"msg": "patient not found"}), 404

    # Eliminar el usuario de la base de datos
    patient.delete()

    # Devuelve un mensaje de eliminacion exitosa
    return jsonify({"msg": "patient successfully deleted"}), 200

@bpPatient.route('/patient', methods=['DELETE'])
def delete_all_patient():
    # Busca el usuario por su ID
    patients = Medical_record.query.all()
    for patient in patients:
    # Eliminar el pacientes de la base de datos
        patients.delete(patient)
    patients.commit()

    # Devuelve un mensaje de eliminacion exitosa
    return jsonify({"msg": "All patients successfully deleted"}), 200