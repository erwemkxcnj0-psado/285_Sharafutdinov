from webapp import create_app
from webapp.database import db
from webapp.seed_data import create_initial_data

app = create_app()

with app.app_context():
    db.create_all()
    create_initial_data()

if __name__ == "__main__":
    app.run(debug=True)