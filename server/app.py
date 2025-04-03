# from flask import request, jsonify, send_from_directory, Flask
# import os
# from config import app, api
# from bank_app.bank_routes import register_routes, bank_app


# def create_app(test_config=None):
#     # create and configure the app
#     app = Flask(__name__, instance_relative_config=True)
#     app.config.from_mapping(
#         SECRET_KEY='dev',
#         DATABASE=os.path.join(app.instance_path, 'flaskr.sqlite'),
#     )

#     if test_config is None:
#         # load the instance config, if it exists, when not testing
#         app.config.from_pyfile('config.py', silent=True)
#     else:
#         # load the test config if passed in
#         app.config.from_mapping(test_config)

#     # ensure the instance folder exists
#     try:
#         os.makedirs(app.instance_path)
#     except OSError:
#         pass

#     # a simple page that says hello
#     @app.route('/hello')
#     def hello():
#         return 'Hello, World!'
    
#     from . import db
#     db.init_app(app)

#     from . import auth
#     app.register_blueprint(bank_app, url_prefix="/bank_app")
#     register_routes(api)

#     @app.errorhandler(404)
#     def not_found(e):
#         # If the request path starts with /api, return a JSON response
#         if request.path.startswith('/api/'):
#             return jsonify({"error": "API endpoint not found"}), 404
#         # Otherwise, serve the React app
#         print(f"404 error encountered: {e}. Serving index.html")
#         return send_from_directory(app.static_folder, 'index.html')

#     if __name__ == '__main__':
#         port = int(os.environ.get('PORT', 5000))
#         print(f"Starting app on port {port}")
#         app.run(host='0.0.0.0', port=port, debug=True)
#     return app