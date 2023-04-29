from flask import Blueprint, request, jsonify

bp = Blueprint('api',__name__)

@bp.route('/')
def main():
    return jsonify({"msg":"API Rest flask"})