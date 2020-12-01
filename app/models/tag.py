from .db import db
from sqlalchemy.sql import func

class Tag(db.Model):
    __tablename__ = 'tags'

    id = db.Column(db.Integer, primary_key = True)
    title = db.Column(db.String(30), nullable=False)
    user_id = db.Column(db.Integer, db.ForeignKey('users.id'), nullable=False)

    users = db.relationship('User', backref='tags', lazy=True)
    notes = db.relationship('Note', secondary='note_tags', back_populates='tags', lazy=True)
    __table_args__ = (db.Index("only_one_tag_per_user", "user_id", "title", unique=True),)

    def to_dict(self):
        return {
            "id": self.id,
            "title": self.title,
            "user_id": self.user_id,
            "note_ids": [note.id for note in self.notes]
        }
