from .db import db

class Note_Tag(db.Model):
    __tablename__ = 'note_tags'

    id = db.Column(db.Integer, primary_key = True)
    tag_id = db.Column(db.Integer, db.ForeignKey('tags.id'), nullable=False)
    note_id = db.Column(db.Integer, db.ForeignKey('notes.id'), nullable=False)

    __table_args__ = (db.Index("only_one_unique_tag_per_note", "tag_id", "note_id", unique=True),)

    def to_dict(self):
        return {
            "id": self.id,
            "note_id": self.note_id,
            "tag_id": self.tag_id
        }
