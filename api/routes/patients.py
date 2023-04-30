from flask import Blueprint, request, jsonify
from models import Medical_record

bpPatient = Blueprint('bpPatient', __name__)

@bpPatient.route('/patient', methods=['POST']) #Agregar Paciente
def add_patient():
    datos = request.get_json()
    
    patient = Medical_record()
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
    
    if patient.id:
        return jsonify({ "msg": "patient already exists"}), 400

    
    
    return jsonify(patient.serialize())


@bpPatient.route('/patients', methods=['GET']) #Obtener todos los pacientes
def get_patients():
    patients = Medical_record.query.all()
    patients = list(map(lambda patient: patient.serialize(), patients))
    return jsonify(patients), 200