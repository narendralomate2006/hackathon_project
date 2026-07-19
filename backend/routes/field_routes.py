from flask import Blueprint, request, jsonify
from services.field_service import get_field_information

field_bp = Blueprint("field", __name__)

@field_bp.route("/field-info", methods=["POST"])
def field_info():

    data = request.get_json()

    print("Received:", data)

    field_name = data.get("field", "")

    print("Searching:", field_name)

    result = get_field_information(field_name)

    print("Result:", result)

    if result:
        return jsonify({
            **result,
            "found": True
        })

    return jsonify({
        "found": False,
        "message": "Field not found"
    }), 200