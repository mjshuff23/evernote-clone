from .db import db
from sqlalchemy.sql import func
from sqlalchemy.orm import backref

class Notebook(db.Model):
    __tablename__ = 'notebooks'

    id = db.Column(db.Integer, primary_key = True)
    title = db.Column(db.String(100), nullable=False)
    user_id = db.Column(db.Integer, db.ForeignKey('users.id'), nullable=False)
    created_at = db.Column(db.DateTime, nullable=False, default=func.now())
    updated_at = db.Column(db.DateTime, nullable=False, default=func.now())
    notes = db.relationship('Note', backref=backref('notebooks', uselist=False), lazy=True)

    __table_args__ = (db.Index("only_one_unique_notebook_per_user", "user_id", "title", unique=True),)

    def to_dict(self):
        return {
            "id": self.id,
            "title": self.title,
            "user_id": self.user_id,
            "created_at": self.created_at,
            "updated_at": self.updated_at,
            "note_ids": [note.id for note in self.notes]
        }
