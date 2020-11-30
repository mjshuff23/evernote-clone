from flask import Blueprint, jsonify, request
from flask_login import login_required
from app.models import Note, db
from sqlalchemy.sql import func
import json

note_routes = Blueprint('notes', __name__)

## For Testing Only
@note_routes.route('/')
def test(userid, notebookid):
    return f'{userid} {notebookid}'
## For Testing Only

@note_routes.route('/', methods=['POST'], strict_slashes=False)
@login_required
def create_note(userid, notebookid):
    new_note = Note(title="Untitled", user_id=userid, notebook_id=notebookid, content="")
    db.session.add(new_note)
    db.session.commit()
    return new_note.to_dict()


@note_routes.route('/<int:id>', methods=['PUT'], strict_slashes=False)
@login_required
def edit_note(userid, notebookid, id):
    req_data = json.loads(request.data)
    title = req_data["title"]
    content = req_data["content"]

    note = Note.query.filter(Note.id == id).first()

    note.title = title
    note.content = content
    note.updated_at = func.now()
    db.session.commit()

    return note.to_dict()



@note_routes.route('/<int:id>', methods=['DELETE'], strict_slashes=False)
@login_required
def delete_note(userid, notebookid, id):
    note = Note.query.filter(Note.id == id).first()
    db.session.delete(note)
    db.session.commit()
    return {
        "id": id,
    }
