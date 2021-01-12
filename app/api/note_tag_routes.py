from flask import Blueprint, jsonify, session, request
from flask_login import login_required
from app.models import Note_Tag, db
from sqlalchemy import and_
import json

note_tag_routes = Blueprint('note_tags', __name__)


@note_tag_routes.route('/', methods=['POST'], strict_slashes=False)
@login_required
def addTagToNote(noteid):
    req_data = json.loads(request.data)
    tag_id = req_data['tagid']
    note_tag = Note_Tag.query.filter(
        and_(Note_Tag.note_id == noteid, Note_Tag.tag_id == tag_id)).first()
    if note_tag is None:
        new_note_tag = Note_Tag(tag_id=tag_id, note_id=noteid)
        db.session.add(new_note_tag)
        db.session.commit()
        return new_note_tag.to_dict()
    else:
        return note_tag.to_dict()


@note_tag_routes.route('/<int:tagid>', methods=['DELETE'], strict_slashes=False)
@login_required
def removeTagFromNote(noteid, tagid):
    notetag = Note_Tag.query.filter(
        and_(Note_Tag.tag_id == tagid, Note_Tag.note_id == noteid)).one()
    db.session.delete(notetag)
    db.session.commit()
    return notetag.to_dict()
