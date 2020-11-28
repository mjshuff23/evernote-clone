from flask import Blueprint, jsonify, session, request
from flask_login import login_required
from app.models import Note_Tag, db
import json

note_tag_routes = Blueprint('note_tags', __name__)


@note_tag_routes.route('/', methods=['POST'])
@login_required
def addTagToNote(noteid):
    data = json.loads(request.data)
    tag_id = data['tagid']
    new_note_tag = Note_Tag(tag_id=tag_id, note_id=noteid)
    db.session.add(new_note_tag)
    db.session.commit()
    return new_note_tag.to_dict()


@note_tag_routes.route('/<int:notetagid>', methods=['DELETE'])
@login_required
def removeTagFromNote(noteid, notetagid):
    notetag = Note_Tag.query.filter(Note_Tag.id == notetagid).first()
    db.session.delete(notetag)
    db.session.commit()
    return {'id': notetagid}
