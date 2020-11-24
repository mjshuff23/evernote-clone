from app.models import db, Note

# Adds a demo user, you can add other users here if you want


def seed_notes():

    demo_note = Note(title='Test', content='jehbwhefwehbdajlksdbkjsdbjlsdbljhsbdjhf', user_id=1, notebook_id=1)
    db.session.add(demo_note)
    db.session.commit()


# Uses a raw SQL query to TRUNCATE the users table.
# SQLAlchemy doesn't have a built in function to do this
# TRUNCATE Removes all the data from the table, and resets
# the auto incrementing primary key


def undo_notes():
    db.session.execute('TRUNCATE notes RESTART IDENTITY CASCADE;')
    db.session.commit()
