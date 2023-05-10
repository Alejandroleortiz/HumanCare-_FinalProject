from flask import Blueprint, request, jsonify
from cloudinary.uploader import upload
from models import Medical_file

bpFile = Blueprint('bpFile', __name__)

@bpFile.route('/medical-file', methods=['POST']) #Agregar Historial medico y archivos medicos
def add_medical_file():
    filename = request.form['filename']

    if not filename:
        return jsonify({ "msg": "The filename is required"}), 400    #Capturo el nombre del archivo

    if not 'file' in request.files:
        return jsonify({ "msg": "The file is required"}), 400    #Pregunto y Capturo el archivo
    
    file = request.files['file']
    public_id = file.filename
    resp = upload(file, folder="archives", public_id=public_id) #Subo la imagen
    
    if not resp:
        return jsonify({"msg":"Error uploading file"}), 400

    
    archive = Medical_file()
    archive.filename = filename
    archive.file = resp['secure_url']
    archive.public_id = public_id
    
    archive.save()
    
    return jsonify(archive.serialize()), 201

   
    
    # datos = request.get_json()
    
    # if not 'file' in datos:
    #     return jsonify({ "msg": "Medical File required"}), 422
    
    
    # medicalFile = Medical_file()
    # medicalFile.file = datos['file']
    # medicalFile.user_id = datos['user_id']
   
    
    # medicalFile.save()
    
    # return jsonify(medicalFile.serialize())