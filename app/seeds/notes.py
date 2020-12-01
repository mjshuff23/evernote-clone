from app.models import db, Note

# Adds a demo user, you can add other users here if you want


def seed_notes():

    demo_note = Note(
        title='ES6 JS', content='JavaScript is dope', user_id=1, notebook_id=1)
    db.session.add(demo_note)
    demo_note = Note(title='Destructuring',
                     content='Destructuring is lifee', user_id=1, notebook_id=1)
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
        title='Fun stuff', content='<strong>super fun super fun, let\'s do stuff</strong>', user_id=1, notebook_id=2)
    db.session.add(demo_note)
    demo_note = Note(title='Grocery list',
                     content='milk, eggs, soda, candy, bread, veggies, soap, sponges', user_id=1, notebook_id=2)
    db.session.add(demo_note)
    demo_note = Note(title='Black Friday List',
                     content='Stay Home and drink coffeez', user_id=1, notebook_id=3)
    db.session.add(demo_note)
    demo_note = Note(title='Coffee',
                     content='All these notes are about coffeez', user_id=1, notebook_id=3)
    db.session.add(demo_note)
    demo_note = Note(title='Favorite Game Systems',
                     content='N64, PSX, PS4', user_id=1, notebook_id=3)
    db.session.add(demo_note)

    demo_note = Note(title='The Story', content='<strong>1 lb. dried elbow pasta <br>1/2 cup unsalted butter <br>1/2 cup all purpose flour  <br>1 1/2 cups whole milk  <br>2 1/2 cups half and half  <br>4 cups grated medium sharp cheddar cheese - divided (measured after grating)  <br>2 cups grated Gruyere cheese - divided (measured after grating) <br> 1/2 Tbsp. salt  <br>1/2 tsp. black pepper  <br>1/4 tsp. paprika</strong> <br><em>Preheat oven to 325 degrees F and grease a 3 qt baking dish (9x13").</em>  <br>Set aside.  <br><em>Bring a large pot of salted water to a boil.  <br>When boiling, add dried pasta and cook 1 minute less than the package directs for al dente.  <br>Drain and drizzle with a little bit of olive oil to keep from sticking. </em>  <br> <br><h2>Enjoiii</h2>', user_id=1, notebook_id=4)


    db.session.add(demo_note)
    db.session.commit()

    demo_note = Note(title='Basic Workout',
                     content='<strong>Pushups</strong><br><strong>Bench Press</strong>', user_id=1, notebook_id=5)
    db.session.add(demo_note)


# Uses a raw SQL query to TRUNCATE the users table.
# SQLAlchemy doesn't have a built in function to do this
# TRUNCATE Removes all the data from the table, and resets
# the auto incrementing primary key


def undo_notes():
    db.session.execute('TRUNCATE notes RESTART IDENTITY CASCADE;')
    db.session.commit()
