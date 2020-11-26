from app.models import db, Note

# Adds a demo user, you can add other users here if you want


def seed_notes():

    demo_note = Note(
        title='Test', content='jehbwhefwehbdajlksdbkjsdbjlsdbljhsbdjhf', user_id=1, notebook_id=1)
    db.session.add(demo_note)
    demo_note = Note(title='Another Note',
                     content='bkjsdbjlsdbljhsbdjhf', user_id=1, notebook_id=1)
    db.session.add(demo_note)
    demo_note = Note(title='Programming Notes',
                     content='<code/>', user_id=1, notebook_id=1)
    db.session.add(demo_note)
    demo_note = Note(title='My Super Cool Note',
                     content='something super cool is here for sure', user_id=1, notebook_id=1)
    db.session.add(demo_note)
    demo_note = Note(title='This one is personal',
                     content='My personal journal... don\'t read this... or else', user_id=1, notebook_id=1)
    db.session.add(demo_note)
    demo_note = Note(
        title='La La La', content='do re mi fa so la ti do', user_id=1, notebook_id=1)
    db.session.add(demo_note)
    demo_note = Note(title='Wonderful :D',
                     content='Isn\'t this note just wonderful? <3 ^_^', user_id=1, notebook_id=1)
    db.session.add(demo_note)
    demo_note = Note(title='More notes', content='a b c d e f g :)',
                     user_id=1, notebook_id=1)
    db.session.add(demo_note)
    demo_note = Note(
        title='Puppies', content='Mason, Misa, Buddy, Beth, and Macho', user_id=1, notebook_id=1)
    db.session.add(demo_note)
    demo_note = Note(
        title='Fun stuff', content='super fun super fun, let\'s do stuff', user_id=1, notebook_id=1)
    db.session.add(demo_note)
    demo_note = Note(title='Grocery list',
                     content='milk, eggs, soda, candy, bread, veggies, soap, sponges', user_id=1, notebook_id=1)
    db.session.add(demo_note)
    db.session.commit()


# Uses a raw SQL query to TRUNCATE the users table.
# SQLAlchemy doesn't have a built in function to do this
# TRUNCATE Removes all the data from the table, and resets
# the auto incrementing primary key


def undo_notes():
    db.session.execute('TRUNCATE notes RESTART IDENTITY CASCADE;')
    db.session.commit()
