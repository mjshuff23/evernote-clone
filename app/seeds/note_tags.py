from app.models import db, Note_Tag

# Adds a demo user, you can add other users here if you want


def seed_note_tags():

    demo_note_tag = Note_Tag(note_id='1', tag_id='1')
    db.session.add(demo_note_tag)
    demo_note_tag = Note_Tag(note_id='1', tag_id='2')
    db.session.add(demo_note_tag)
    demo_note_tag = Note_Tag(note_id='2', tag_id='3')
    db.session.add(demo_note_tag)
    demo_note_tag = Note_Tag(note_id='2', tag_id='4')
    db.session.add(demo_note_tag)
    demo_note_tag = Note_Tag(note_id='3', tag_id='4')
    db.session.add(demo_note_tag)
    demo_note_tag = Note_Tag(note_id='3', tag_id='5')
    db.session.add(demo_note_tag)
    demo_note_tag = Note_Tag(note_id='4', tag_id='5')
    db.session.add(demo_note_tag)
    demo_note_tag = Note_Tag(note_id='4', tag_id='6')
    db.session.add(demo_note_tag)
    demo_note_tag = Note_Tag(note_id='5', tag_id='6')
    db.session.add(demo_note_tag)
    demo_note_tag = Note_Tag(note_id='5', tag_id='7')
    db.session.add(demo_note_tag)
    demo_note_tag = Note_Tag(note_id='6', tag_id='8')
    db.session.add(demo_note_tag)
    demo_note_tag = Note_Tag(note_id='6', tag_id='9')
    db.session.add(demo_note_tag)
    demo_note_tag = Note_Tag(note_id='7', tag_id='5')
    db.session.add(demo_note_tag)
    demo_note_tag = Note_Tag(note_id='8', tag_id='6')
    db.session.add(demo_note_tag)
    demo_note_tag = Note_Tag(note_id='9', tag_id='4')
    db.session.add(demo_note_tag)
    db.session.commit()


# Uses a raw SQL query to TRUNCATE the users table.
# SQLAlchemy doesn't have a built in function to do this
# TRUNCATE Removes all the data from the table, and resets
# the auto incrementing primary key


def undo_note_tags():
    db.session.execute('TRUNCATE note_tags RESTART IDENTITY CASCADE;')
    db.session.commit()
