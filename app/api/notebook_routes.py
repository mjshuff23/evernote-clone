from flask import Blueprint, jsonify, request, session
from flask_login import login_required
from app.models import Notebook, db
from sqlalchemy.sql import func


notebook_routes = Blueprint('notebook', __name__)


# create a new notebook
@notebook_routes.route('/', methods=['POST'])
@login_required
def create_notebook(userid):
    title = str(request.data)[2:-1]
    user_id = userid
    new_notebook = Notebook(title=title, user_id=user_id)
    db.session.add(new_notebook)
    db.session.commit()
    return {
        'id': new_notebook.id,
        'title': new_notebook.title,
        'user_id': new_notebook.user_id,
        'created_at': new_notebook.created_at,
        'updated_at': new_notebook.updated_at
    }


# edit an existing notebook
@notebook_routes.route('/<int:notebookid>', methods=['PUT'])
@login_required
def edit_notebook(userid, notebookid):
    title = str(request.data)[2:-1]
    notebook = Notebook.query.filter(Notebook.id == notebookid).first()
    notebook.title = title
    notebook.updated_at = func.now()
    db.session.commit()
    return {
        'id': notebook.id,
        'title': notebook.title,
        'user_id': notebook.user_id,
        'created_at': notebook.created_at,
        'updated_at': notebook.updated_at
    }


# delete an existing notebook
@notebook_routes.route('/<int:notebookid>', methods=['DELETE'])
@login_required
def delete_notebook(userid, notebookid):
    notebook = Notebook.query.filter(Notebook.id == notebookid).first()
    db.session.delete(notebook)
    db.session.commit()
    return 'Notebook deleted'
