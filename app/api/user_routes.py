from flask import Blueprint, jsonify
from flask_login import login_required
from app.models import User, Note, Notebook, Tag, Note_Tag
from sqlalchemy.orm import joinedload

user_routes = Blueprint('users', __name__)


@user_routes.route('/')
@login_required
def users():
    users = User.query.all()
    return {"users": [user.to_dict() for user in users]}


@user_routes.route('/<int:id>')
# @login_required
def user(id):
    tags = Tag.query.filter(Tag.user_id == id).options(joinedload(Tag.notes)).all()
    tags_data = {
        "dict": {tag.id:tag.to_dict() for tag in tags},
        "ids": [tag.id for tag in tags]
    }

    notebooks = Notebook.query.filter(Notebook.user_id == id).options(joinedload(Notebook.notes).joinedload(Note.tags)).all()
    notebooks_data = [notebook.to_dict() for notebook in notebooks]
    notebooks_data = {
        "dict": {notebook.id:notebook.to_dict() for notebook in notebooks},
        "ids": [notebook.id for notebook in notebooks]
    }

    notes = []
    for notebook in notebooks:
        notes.extend(notebook.notes)
    notes_data = {
        "dict": {note.id: note.to_dict() for note in notes},
        "ids": [note.id for note in notes],
    }

    return {"tags": tags_data, "notebooks": notebooks_data, "notes": notes_data}
