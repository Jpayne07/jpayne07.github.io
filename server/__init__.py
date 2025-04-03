from flask import request, jsonify, send_from_directory, Flask
from flask_cors import CORS
import os
from .bank_app import bank_routes
from datetime import timedelta
from .extensions import db, bcrypt, api, migrate, session
import os
from .bank_app.bank_application import Callback



def create_app(test_config=None):
    # create and configure the app
    env = os.environ.get('FLASK_ENV', 'development')
    app = Flask(
        __name__, 
        static_url_path='',
        static_folder='../client/build',
        template_folder='../client/build')
    # app.config.from_mapping(
    # )
    CORS(app, supports_credentials=True, origins=["https://yourusername.github.io"])

    if env == 'BANK_ENV':
        # load the instance config, if it exists, when not testing
        app.config.from_pyfile('config.py', silent=True)
    else:
        # load the test config if passed in
        app.config.from_mapping(
        PERMANENT_SESSION_LIFETIME = timedelta(days=1),
        SQLALCHEMY_DATABASE_URI = "sqlite:///db.sqlite3"
    )
        
        app.config.from_mapping(test_config)

    # ensure the instance folder exists
    try:
        os.makedirs(app.instance_path)
    except OSError:
        pass
    

    api.add_resource(Callback, "/callback")
    app.register_blueprint(bank_routes.bank_app)
    api.init_app(app)
    api.add_resource(Callback, "/callback")
    db.init_app(app)
    app.config['SESSION_SQLALCHEMY'] = db
    bcrypt.init_app(app)
    migrate.init_app(app, db)
    session.init_app(app)


    @app.errorhandler(404)
    def not_found(e):
        # If the request path starts with /api, return a JSON response
        if request.path.startswith('/api/'):
            return jsonify({"error": "API endpoint not found"}), 404
        # Otherwise, serve the React app
        print(f"404 error encountered: {e}. Serving index.html")
        return send_from_directory(app.static_folder, 'index.html')
    @app.errorhandler(401)
    def unauthorized(e):
        return jsonify({"error": "Unauthorized"}), 401

    if __name__ == '__main__':
        port = int(os.environ.get('PORT', 5000))
        print(f"Starting app on port {port}")
        app.run(host='0.0.0.0', port=port, debug=True)
    print("\n✅ Final route map:")
    for rule in app.url_map.iter_rules():
        methods = ','.join(sorted(rule.methods - {'HEAD', 'OPTIONS'}))
        print(f"{rule.rule:30s} → {rule.endpoint:25s} [{methods}]")
    return app