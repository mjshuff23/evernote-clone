from app.models import db, Tag

# Adds a demo user, you can add other users here if you want


def seed_tags():

    demo_tag = Tag(title='test', user_id=1)
    db.session.add(demo_tag)
    demo_tag = Tag(title='class', user_id=1)
    db.session.add(demo_tag)
    demo_tag = Tag(title='fix', user_id=1)
    db.session.add(demo_tag)
    demo_tag = Tag(title='javascript', user_id=1)
    db.session.add(demo_tag)
    demo_tag = Tag(title='c++', user_id=1)
    db.session.add(demo_tag)
    demo_tag = Tag(title='java', user_id=1)
    db.session.add(demo_tag)
    demo_tag = Tag(title='to do', user_id=1)
    db.session.add(demo_tag)
    demo_tag = Tag(title='team', user_id=1)
    db.session.add(demo_tag)
    demo_tag = Tag(title='project', user_id=1)
    db.session.add(demo_tag)
    demo_tag = Tag(title='agenda', user_id=1)
    db.session.add(demo_tag)
    demo_tag = Tag(title='quick', user_id=1)
    db.session.add(demo_tag)
    demo_tag = Tag(title='animals', user_id=1)
    db.session.add(demo_tag)
    demo_tag = Tag(title='zoo', user_id=1)
    db.session.add(demo_tag)
    demo_tag = Tag(title='victories', user_id=1)
    db.session.add(demo_tag)
    demo_tag = Tag(title='fail', user_id=1)
    db.session.add(demo_tag)
    demo_tag = Tag(title='future', user_id=1)
    db.session.add(demo_tag)
    demo_tag = Tag(title='clean', user_id=1)
    db.session.add(demo_tag)
    demo_tag = Tag(title='grocery', user_id=1)
    db.session.add(demo_tag)
    demo_tag = Tag(title='lists', user_id=1)
    db.session.add(demo_tag)
    db.session.commit()


# Uses a raw SQL query to TRUNCATE the users table.
# SQLAlchemy doesn't have a built in function to do this
# TRUNCATE Removes all the data from the table, and resets
# the auto incrementing primary key


def undo_tags():
    db.session.execute('TRUNCATE tags RESTART IDENTITY CASCADE;')
    db.session.commit()
