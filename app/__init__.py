import os
from flask import Flask, render_template, request, session
from flask_cors import CORS
from flask_migrate import Migrate
from flask_wtf.csrf import CSRFProtect, generate_csrf
from flask_login import LoginManager

from .models import db, User
from .api.user_routes import user_routes
from .api.auth_routes import auth_routes
from .api.note_routes import note_routes
from .api.notebook_routes import notebook_routes
from .api.tag_routes import tag_routes
from .api.note_tag_routes import note_tag_routes


from .seeds import seed_commands

from .config import Config

app = Flask(__name__)

# Setup login manager
login = LoginManager(app)
login.login_view = 'auth.unauthorized'


@login.user_loader
def load_user(id):
    return User.query.get(int(id))


# Tell flask about our seed commands
app.cli.add_command(seed_commands)

app.config.from_object(Config)

app.register_blueprint(user_routes, url_prefix='/api/users')
app.register_blueprint(auth_routes, url_prefix='/api/auth')
app.register_blueprint(
    note_routes, url_prefix='/api/users/<int:userid>/notebooks/<int:notebookid>/notes')
app.register_blueprint(
    notebook_routes, url_prefix='/api/users/<int:userid>/notebooks')
app.register_blueprint(tag_routes, url_prefix='/api/users/<int:userid>/tags')
app.register_blueprint(
    note_tag_routes, url_prefix='/api/notes/<int:noteid>/tags')


db.init_app(app)
Migrate(app, db)

# Application Security
CORS(app)


@app.before_request
def redirect_https():
    if os.environ.get('FLASK_ENV') == 'production':
        if request.headers.get('X-Forwarded-Proto') == 'http':
            url = request.url.replace('http://', 'https://', 1)
            code = 301
            return redirect(url, code=code)


@app.after_request
def inject_csrf_token(response):
    response.set_cookie('csrf_token',
                        generate_csrf(),
                        secure=True if os.environ.get(
                            'FLASK_ENV') == 'production' else False,
                        samesite='Strict' if os.environ.get(
                            'FLASK_ENV') == 'production' else None,
                        httponly=True)
    return response


@app.route('/', defaults={'path': ''})
@app.route('/<path:path>')
def react_root(path):
    if (path.startswith('favicon')
      or path.startswith('android')
      or path.startswith('apple')
      or path.startswith('mstile')):
        return app.send_static_file(path)
    return app.send_static_file('index.html')
