from datetime import datetime
from .database import db


class User(db.Model):
    __tablename__ = "users"

    id = db.Column(db.Integer, primary_key=True)
    full_name = db.Column(db.String(150), nullable=False)
    username = db.Column(db.String(80), unique=True, nullable=False)
    password = db.Column(db.String(255), nullable=False)
    role = db.Column(db.String(50), nullable=False)
    phone = db.Column(db.String(30), nullable=True)

    comments = db.relationship("Comment", backref="author", lazy=True)
    assigned_requests = db.relationship(
        "Request",
        backref="specialist_user",
        lazy=True,
        foreign_keys="Request.specialist_id"
    )
    client_requests = db.relationship(
        "Request",
        backref="client_user",
        lazy=True,
        foreign_keys="Request.client_id"
    )

    def __repr__(self):
        return f"<User {self.username}>"


class Request(db.Model):
    __tablename__ = "requests"

    id = db.Column(db.Integer, primary_key=True)
    request_number = db.Column(db.String(50), unique=True, nullable=False)

    start_date = db.Column(db.String(50), nullable=True)
    created_at = db.Column(db.DateTime, default=datetime.utcnow)

    equipment_type = db.Column(db.String(100), nullable=False)
    equipment_model = db.Column(db.String(100), nullable=False)
    problem_description = db.Column(db.Text, nullable=False)

    client_name = db.Column(db.String(150), nullable=False)
    client_phone = db.Column(db.String(30), nullable=False)

    status = db.Column(db.String(50), default="Новая")
    planned_end_date = db.Column(db.String(50), nullable=True)
    repair_parts = db.Column(db.Text, nullable=True)

    client_id = db.Column(db.Integer, db.ForeignKey("users.id"), nullable=True)
    specialist_id = db.Column(db.Integer, db.ForeignKey("users.id"), nullable=True)

    comments = db.relationship(
        "Comment",
        backref="request",
        lazy=True,
        cascade="all, delete-orphan"
    )

    def __repr__(self):
        return f"<Request {self.request_number}>"


class Comment(db.Model):
    __tablename__ = "comments"

    id = db.Column(db.Integer, primary_key=True)
    text = db.Column(db.Text, nullable=False)
    created_at = db.Column(db.DateTime, default=datetime.utcnow)

    request_id = db.Column(db.Integer, db.ForeignKey("requests.id"), nullable=False)
    author_id = db.Column(db.Integer, db.ForeignKey("users.id"), nullable=False)

    def __repr__(self):
        return f"<Comment {self.id}>"