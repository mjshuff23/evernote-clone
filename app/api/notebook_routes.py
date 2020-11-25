from flask import Blueprint, jsonify
from flask_login import login_required
from app.models import Notebook

notebook_routes = Blueprint('notebook', __name__)

# create a new notebook
@notebook_routes.route('/', methods=['POST'])
@login_required
def create_notebook(user_id):
    pass


# edit an existing notebook
@notebook_routes.route('/<int:notebook_id>', methods=['PUT'])
@login_required
def edit_notebook(user_id, notebook_id):
    pass


# delete an existing notebook (first :id is user's id, second :id is notebook_id)
@notebook_routes.route('/<int:notebook_id>', methods=['DELETE'])
@login_required
def delete_notebook(user_id, notebook_id):
    pass
