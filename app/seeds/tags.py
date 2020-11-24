from app.models import db, Tag

# Adds a demo user, you can add other users here if you want


def seed_tags():

    demo_tag = Tag(title='Test', user_id=1)
    db.session.add(demo_tag)
    db.session.commit()


# Uses a raw SQL query to TRUNCATE the users table.
# SQLAlchemy doesn't have a built in function to do this
# TRUNCATE Removes all the data from the table, and resets
# the auto incrementing primary key


def undo_tags():
    db.session.execute('TRUNCATE tags RESTART IDENTITY CASCADE;')
    db.session.commit()
