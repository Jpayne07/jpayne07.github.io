from .bank_application import (
  Account, SingularAccount, Banks, Transactions_List, TransactionSeed,
  User_Item, CheckSession, Login, Signup, LoginWithGithub,
  ClearSession, IndivdiualTransaction
)
from flask import Blueprint
from flask_restful import Api


bank_app = Blueprint('bank_app', __name__,url_prefix="/api/bank")
api = Api(bank_app)
api.add_resource(Account, '/accounts')
api.add_resource(SingularAccount, '/singular_account/<int:id>')
api.add_resource(Banks, '/banks')
api.add_resource(Transactions_List, '/transactions')
api.add_resource(TransactionSeed, '/transactionseed')
api.add_resource(User_Item, '/user')
api.add_resource(CheckSession, '/check_session')
api.add_resource(Login, '/login')
api.add_resource(Signup, '/signup')
api.add_resource(LoginWithGithub, '/login-github')
api.add_resource(ClearSession, '/clear_session')
api.add_resource(IndivdiualTransaction, '/transaction/<int:id>')
