from flask import Blueprint, jsonify, session, request
from app.models import Tag, Note, db

tag_routes = Blueprint('tags', __name__)

# userid is in the params,
# tag_name is in the request body


@tag_routes.route('/', methods=['POST'])
def createTag(userid):
    tag_name = str(request.data)
    tag_name = tag_name[2:-1]
    new_tag = Tag(title=tag_name, user_id=userid)
    db.session.add(new_tag)
    db.session.commit()
    return {
        "id": new_tag.id,
        "title": new_tag.title,
        "user_id": new_tag.user_id
    }


@tag_routes.route('/<int:tagid>', methods=['DELETE'])
def deleteTag(tagid):
    Tag.delete().where(Tag.id == tagid)
