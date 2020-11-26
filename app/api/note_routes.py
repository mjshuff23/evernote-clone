from flask import Blueprint, jsonify, request
from flask_login import login_required
from app.models import Note, db
from sqlalchemy.sql import func

note_routes = Blueprint('notes', __name__)


@note_routes.route('/')
def test(userid, notebookid):
    return f'{userid} {notebookid}'

@note_routes.route('/', methods=['POST'])
@login_required
def create_note(userid, notebookid):
    new_note = Note(title="Untitled", user_id=userid, notebook_id=notebookid, content="")
    db.session.add(new_note)
    db.session.commit()
    return {
        'id': new_note.id,
        'title': new_note.title,
        'user_id': new_note.user_id,
        'notebook_id': new_note.notebook_id,
        'content': new_note.content,
        'created_at': new_note.created_at,
        'updated_at': new_note.updated_at
    }


@note_routes.route('/<int:id>', methods=['PUT'])
@login_required
def edit_note(userid, notebookid, id):
    req_data = request.get_json()
    print(req_data)
    title = req_data["title"]
    content = req_data["content"]
    note = Note.query.filter(Note.id == id).first()
    note.title = title
    note.content = content
    note.updated_at = func.now()
    db.session.commit()
    return {
        'id': note.id,
        'title': note.title,
        'content': note.content,
        'notebook_id': note.notebook_id,
        'user_id': note.user_id,
        'created_at': note.created_at,
        'updated_at': note.updated_at
    }



@note_routes.route('/<int:id>', methods=['DELETE'])
@login_required
def delete_note(userid, notebookid, id):
    note = Note.query.filter(Note.id == id).first()
    db.session.delete(note)
    db.session.commit()
    return 'Note deleted'
