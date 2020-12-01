from .db import db
from sqlalchemy.sql import func


class Note(db.Model):
    __tablename__ = 'notes'

    id = db.Column(db.Integer, primary_key=True)
    title = db.Column(db.String(100), nullable=False)
    content = db.Column(db.String)
    user_id = db.Column(db.Integer, db.ForeignKey('users.id'), nullable=False)
    notebook_id = db.Column(db.Integer, db.ForeignKey('notebooks.id'), nullable=False)
    created_at = db.Column(db.DateTime, nullable=False, default=func.now())
    updated_at = db.Column(db.DateTime, nullable=False, default=func.now())

    tags = db.relationship('Tag', secondary='note_tags', back_populates='notes', lazy=True) #cascade = "all, delete-orphan"


    def to_dict(self):
        return {
            "id": self.id,
            "title": self.title,
            "content": self.content,
            "user_id": self.user_id,
            "notebook_id": self.notebook_id,
            "created_at": self.created_at,
            "updated_at": self.updated_at,
            "tag_ids": [tag.id for tag in self.tags]
        }
