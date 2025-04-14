
import os
from dotenv import load_dotenv
from datetime import timedelta


load_dotenv()
DEBUG = False
SQLALCHEMY_DATABASE_URI = os.environ.get('DATABASE_URI')
SECRET_KEY = os.environ.get('APP_SECRET_KEY')
# app.config['SQLALCHEMY_DATABASE_URI'] = "sqlite:///db.sqlite3"
SQLALCHEMY_TRACK_MODIFICATIONS = False
SESSION_COOKIE_SAMESITE = 'None'
SESSION_COOKIE_SECURE = True
SESSION_TYPE = 'sqlalchemy'
PERMANENT_SESSION_LIFETIME = timedelta(days=1)


