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
@login_required
def user(id):
    user = User.query.filter(User.id == id).options(joinedload(User.tags)).first()
    user_object = user.to_dict()
    user_object["tags"] = [user_tag.to_dict() for user_tag in user.tags]

    notebooks = Notebook.query.filter(Notebook.user_id == id).options(joinedload(Notebook.notes).joinedload(Note.note_tags)).all()

    notebooks_object = [notebook.to_dict() for notebook in notebooks]
    user_object["notebooks"] = notebooks_object

    notes = []
    for notebook in notebooks:
        notes.extend(notebook.notes)
    notes_object = [note.to_dict() for note in notes]
    user_object["notes"] = notes_object

    note_tags = []
    for note in notes:
        note_tags.extend(note.note_tags)
    user_object["note_tags"] = [note_tag.to_dict() for note_tag in note_tags]


    return user_object
