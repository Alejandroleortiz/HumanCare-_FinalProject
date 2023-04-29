from datetime import datetime
from flask import Blueprint, request, jsonify
from flask_jwt_extended import create_access_token

bpAuth = Blueprint('bpAuth', __name__)

@bpAuth.route('/signup', methods=['POST']) #register
def signup():
    return jsonify({"status":""})

@bpAuth.route('/signup', methods=['POST']) #login
def signin():
    pass