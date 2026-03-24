from .database import db
from .models import User


def create_initial_data():
    users = [
        {
            "full_name": "Иванов Иван Иванович",
            "username": "operator",
            "password": "12345",
            "role": "Оператор",
            "phone": "+7 900 111-11-11"
        },
        {
            "full_name": "Петров Петр Петрович",
            "username": "specialist",
            "password": "12345",
            "role": "Специалист",
            "phone": "+7 900 222-22-22"
        },
        {
            "full_name": "Сидоров Алексей Николаевич",
            "username": "manager",
            "password": "12345",
            "role": "Менеджер по качеству",
            "phone": "+7 900 333-33-33"
        },
        {
            "full_name": "Кузнецов Сергей Андреевич",
            "username": "client",
            "password": "12345",
            "role": "Заказчик",
            "phone": "+7 900 444-44-44"
        }
    ]

    for item in users:
        existing = User.query.filter_by(username=item["username"]).first()
        if not existing:
            user = User(
                full_name=item["full_name"],
                username=item["username"],
                password=item["password"],
                role=item["role"],
                phone=item["phone"]
            )
            db.session.add(user)

    db.session.commit()