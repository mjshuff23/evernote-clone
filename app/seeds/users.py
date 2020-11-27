from werkzeug.security import generate_password_hash
from app.models import db, User, Notebook
from datetime import datetime

# Adds a demo user, you can add other users here if you want
def seed_users():

    demo = User(username='Demo', email='demo@aa.io',
                password='password')
    demo_notebook = Notebook(title='Default', user_id=1)

    db.session.add(demo)
    db.session.commit()
    db.session.add(demo_notebook)
    db.session.commit()
    
    demo = User(username='Demo2', email='demo2@aa.io',
                password='password')
    demo_notebook = Notebook(title='Default', user_id=2)

    db.session.add(demo)
    db.session.commit()
    db.session.add(demo_notebook)
    db.session.commit()

    demo = User(username='Demo3', email='demo3@aa.io',
                password='password')
    demo_notebook = Notebook(title='Default', user_id=3)

    db.session.add(demo)
    db.session.commit()
    db.session.add(demo_notebook)
    db.session.commit()

# Uses a raw SQL query to TRUNCATE the users table.
# SQLAlchemy doesn't have a built in function to do this
# TRUNCATE Removes all the data from the table, and resets
# the auto incrementing primary key
def undo_users():
    db.session.execute('TRUNCATE users RESTART IDENTITY CASCADE;')
    db.session.commit()
    db.session.execute('TRUNCATE notebooks RESTART IDENTITY CASCADE;')
    db.session.commit()
