from flask import Blueprint, jsonify, session, request
from flask_login import login_required
from app.models import Tag, Note, db

tag_routes = Blueprint('tags', __name__)

# userid is in the params,
# tag_name is in the request body


@tag_routes.route('/', methods=['POST'])
@login_required
def createTag(userid):
    tag_name = str(request.data)
    tag_name = tag_name[2:-1]
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
    return {'message': 'success'}
