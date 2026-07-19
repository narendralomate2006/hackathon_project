import json

def load_fields():

    with open("data/fields.json", "r") as file:
        return json.load(file)


def get_field_information(field_name):

    fields = load_fields()

    field_name = field_name.lower().strip()

    for key, value in fields.items():

        if key in field_name or field_name in key:
            return value

    return None