from flask import Blueprint, jsonify, session, request
from flask_login import login_required
from app.models import Tag, db
import json

tag_routes = Blueprint('tags', __name__)


@tag_routes.route('/', methods=['POST'])
@login_required
def createTag(userid):
    data = json.loads(request.data)
    tag_name = data['name']
    new_tag = Tag(title=tag_name, user_id=userid)
    db.session.add(new_tag)
    db.session.commit()
    return new_tag.to_dict()


@tag_routes.route('/<int:tagid>', methods=['DELETE'])
@login_required
def deleteTag(userid, tagid):
    tag = Tag.query.filter(Tag.id == tagid).first()
    db.session.delete(tag)
    db.session.commit()
    return {'id': tagid}
