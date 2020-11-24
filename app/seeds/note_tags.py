from app.models import db, Note_Tag

# Adds a demo user, you can add other users here if you want


def seed_note_tags():

    demo_note_tag = Note_Tag(note_id='1', tag_id='1')

    db.session.add(demo_note_tag)
    db.session.commit()


# Uses a raw SQL query to TRUNCATE the users table.
# SQLAlchemy doesn't have a built in function to do this
# TRUNCATE Removes all the data from the table, and resets
# the auto incrementing primary key


def undo_note_tags():
    db.session.execute('TRUNCATE note_tags RESTART IDENTITY CASCADE;')
    db.session.commit()
