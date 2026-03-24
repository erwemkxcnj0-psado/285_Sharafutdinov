import os
import qrcode
from flask import Blueprint, render_template, request, redirect, url_for, session, flash
from sqlalchemy import func
import pandas as pd
from .models import User, Request, Comment
from .database import db
from .services import load_rows_from_file, detect_import_type, normalize_status
from datetime import datetime

main_bp = Blueprint("main", __name__)


def role_required(*allowed_roles):
    current_role = session.get("role")
    return current_role in allowed_roles


@main_bp.route("/")
def index():
    if "user_id" not in session:
        return redirect(url_for("main.login"))
    return redirect(url_for("main.dashboard"))


@main_bp.route("/login", methods=["GET", "POST"])
def login():
    error = None

    if request.method == "POST":
        username = request.form.get("username", "").strip()
        password = request.form.get("password", "").strip()

        user = User.query.filter_by(username=username, password=password).first()

        if user:
            session["user_id"] = user.id
            session["full_name"] = user.full_name
            session["role"] = user.role
            return redirect(url_for("main.dashboard"))
        else:
            error = "Неверный логин или пароль"

    return render_template("login.html", error=error)


@main_bp.route("/dashboard")
def dashboard():
    if "user_id" not in session:
        return redirect(url_for("main.login"))

    return render_template(
        "dashboard.html",
        full_name=session.get("full_name"),
        role=session.get("role")
    )


@main_bp.route("/requests")
def requests_list():
    if "user_id" not in session:
        return redirect(url_for("main.login"))

    q = request.args.get("q", "").strip()

    requests_query = Request.query.order_by(Request.created_at.desc())

    if q:
        requests_query = requests_query.filter(
            (Request.request_number.contains(q)) |
            (Request.client_name.contains(q)) |
            (Request.equipment_type.contains(q)) |
            (Request.equipment_model.contains(q)) |
            (Request.status.contains(q))
        )

    requests_items = requests_query.all()

    return render_template(
        "requests_list.html",
        requests_items=requests_items,
        q=q
    )


@main_bp.route("/requests/create", methods=["GET", "POST"])
def create_request():
    if "user_id" not in session:
        return redirect(url_for("main.login"))
    if not role_required("Оператор", "Менеджер по качеству"):
        flash("У вас нет прав для создания заявки.", "error")
        return redirect(url_for("main.dashboard"))

    specialists = User.query.filter(
        (User.role == "Специалист") | (User.role == "Менеджер по качеству")
    ).all()

    if request.method == "POST":
        request_number = request.form.get("request_number", "").strip()
        start_date = request.form.get("start_date", "").strip()
        equipment_type = request.form.get("equipment_type", "").strip()
        equipment_model = request.form.get("equipment_model", "").strip()
        problem_description = request.form.get("problem_description", "").strip()
        client_name = request.form.get("client_name", "").strip()
        client_phone = request.form.get("client_phone", "").strip()
        status = normalize_status(request.form.get("status", "Новая заявка"))
        planned_end_date = request.form.get("planned_end_date", "").strip()
        repair_parts = request.form.get("repair_parts", "").strip()
        specialist_id_raw = request.form.get("specialist_id", "").strip()

        specialist_id = None
        if specialist_id_raw:
            try:
                specialist_id = int(specialist_id_raw)
            except ValueError:
                specialist_id = None

        item = Request(
            request_number=request_number,
            start_date=start_date,
            equipment_type=equipment_type,
            equipment_model=equipment_model,
            problem_description=problem_description,
            client_name=client_name,
            client_phone=client_phone,
            status=status,
            planned_end_date=planned_end_date,
            repair_parts=repair_parts,
            specialist_id=specialist_id
        )

        db.session.add(item)
        db.session.commit()

        return redirect(url_for("main.requests_list"))

    return render_template("request_form.html", specialists=specialists)


@main_bp.route("/requests/<int:request_id>/edit", methods=["GET", "POST"])
def edit_request(request_id):
    if "user_id" not in session:
        return redirect(url_for("main.login"))
    if not role_required("Оператор", "Менеджер по качеству"):
        flash("У вас нет прав для редактирования заявки.", "error")
        return redirect(url_for("main.requests_list"))

    item = Request.query.get_or_404(request_id)
    specialists = User.query.filter(
        (User.role == "Специалист") | (User.role == "Менеджер по качеству")
    ).all()

    if request.method == "POST":
        old_status = item.status

        item.request_number = request.form.get("request_number", "").strip()
        item.start_date = request.form.get("start_date", "").strip()
        item.equipment_type = request.form.get("equipment_type", "").strip()
        item.equipment_model = request.form.get("equipment_model", "").strip()
        item.problem_description = request.form.get("problem_description", "").strip()
        item.client_name = request.form.get("client_name", "").strip()
        item.client_phone = request.form.get("client_phone", "").strip()
        item.status = normalize_status(request.form.get("status", "Новая заявка"))
        item.planned_end_date = request.form.get("planned_end_date", "").strip()
        item.repair_parts = request.form.get("repair_parts", "").strip()

        specialist_id_raw = request.form.get("specialist_id", "").strip()
        if specialist_id_raw:
            try:
                item.specialist_id = int(specialist_id_raw)
            except ValueError:
                item.specialist_id = None
        else:
            item.specialist_id = None

        db.session.commit()

        if old_status != item.status:
            flash(
                f"Статус заявки №{item.request_number} изменён: «{old_status}» → «{item.status}».",
                "info"
            )

            if item.status == "Завершена":
                flash(
                    f"Заявка №{item.request_number} завершена. Клиента можно уведомить о готовности.",
                    "success"
                )
        else:
            flash(
                f"Заявка №{item.request_number} успешно обновлена.",
                "info"
            )

        return redirect(url_for("main.request_detail", request_id=item.id))

    return render_template("request_edit.html", item=item, specialists=specialists)


@main_bp.route("/requests/<int:request_id>")
def request_detail(request_id):
    if "user_id" not in session:
        return redirect(url_for("main.login"))

    item = Request.query.get_or_404(request_id)
    comments = Comment.query.filter_by(request_id=item.id).order_by(Comment.created_at.desc()).all()

    return render_template(
        "request_detail.html",
        item=item,
        comments=comments
    )


@main_bp.route("/requests/<int:request_id>/comment", methods=["POST"])
def add_comment(request_id):
    if "user_id" not in session:
        return redirect(url_for("main.login"))
    if not role_required("Оператор", "Менеджер по качеству", "Специалист"):
        flash("У вас нет прав для добавления комментариев.", "error")
        return redirect(url_for("main.requests_list"))

    item = Request.query.get_or_404(request_id)
    text = request.form.get("text", "").strip()

    if text:
        comment = Comment(
            text=text,
            request_id=item.id,
            author_id=session["user_id"]
        )
        db.session.add(comment)
        db.session.commit()

    return redirect(url_for("main.request_detail", request_id=item.id))


@main_bp.route("/statistics")
def statistics():
    if "user_id" not in session:
        return redirect(url_for("main.login"))

    all_requests = Request.query.all()

    total_requests = len(all_requests)
    new_requests = 0
    in_progress_requests = 0
    waiting_parts_requests = 0
    done_requests = 0

    for item in all_requests:
        status = normalize_status(item.status)

        if status == "Новая заявка":
            new_requests += 1
        elif status == "В процессе ремонта":
            in_progress_requests += 1
        elif status == "Ожидание комплектующих":
            waiting_parts_requests += 1
        elif status == "Завершена":
            done_requests += 1

    done_percent = 0
    if total_requests > 0:
        done_percent = round((done_requests / total_requests) * 100, 2)

    equipment_stats = (
        db.session.query(
            Request.equipment_type,
            func.count(Request.id)
        )
        .group_by(Request.equipment_type)
        .all()
    )

    problem_stats = (
        db.session.query(
            Request.problem_description,
            func.count(Request.id)
        )
        .group_by(Request.problem_description)
        .all()
    )

    average_repair_days = 0
    counted_requests = 0

    completed_items = [item for item in all_requests if normalize_status(item.status) == "Завершена"]

    for item in completed_items:
        if not item.start_date or not item.planned_end_date:
            continue

        try:
            start_dt = datetime.strptime(item.start_date.strip(), "%Y-%m-%d")
            end_dt = datetime.strptime(item.planned_end_date.strip(), "%Y-%m-%d")

            diff_days = (end_dt - start_dt).days
            if diff_days >= 0:
                average_repair_days += diff_days
                counted_requests += 1
        except ValueError:
            try:
                start_dt = datetime.strptime(item.start_date.strip(), "%d.%m.%Y")
                end_dt = datetime.strptime(item.planned_end_date.strip(), "%d.%m.%Y")

                diff_days = (end_dt - start_dt).days
                if diff_days >= 0:
                    average_repair_days += diff_days
                    counted_requests += 1
            except ValueError:
                continue

    if counted_requests > 0:
        average_repair_days = round(average_repair_days / counted_requests, 2)
    else:
        average_repair_days = 0

    return render_template(
        "statistics.html",
        total_requests=total_requests,
        new_requests=new_requests,
        in_progress_requests=in_progress_requests,
        waiting_parts_requests=waiting_parts_requests,
        done_requests=done_requests,
        done_percent=done_percent,
        equipment_stats=equipment_stats,
        average_repair_days=average_repair_days,
        counted_requests=counted_requests,
        problem_stats=problem_stats
    )


@main_bp.route("/import", methods=["GET", "POST"])
def import_data():
    if "user_id" not in session:
        return redirect(url_for("main.login"))

    message = None

    if request.method == "POST":
        file = request.files.get("file")

        if not file or not file.filename:
            message = "Файл не выбран."
            return render_template("import.html", message=message)

        try:
            import_type = detect_import_type(file.filename)
            rows = load_rows_from_file(file)

            added_count = 0
            skipped_count = 0
            skipped_reasons = []

            if import_type == "users":
                for row in rows:
                    username = str(row.get("login", "")).strip()
                    if not username:
                        skipped_count += 1
                        skipped_reasons.append("Пропущен пользователь без логина.")
                        continue

                    exists = User.query.filter_by(username=username).first()
                    if exists:
                        skipped_count += 1
                        skipped_reasons.append(f"Пользователь '{username}' уже существует.")
                        continue

                    user = User(
                        full_name=str(row.get("fio", "Без имени")).strip(),
                        username=username,
                        password=str(row.get("password", "12345")).strip(),
                        role=str(row.get("type", "Заказчик")).strip(),
                        phone=str(row.get("phone", "")).strip()
                    )
                    db.session.add(user)
                    added_count += 1

            elif import_type == "requests":
                users_by_id = {user.id: user for user in User.query.all()}

                for row in rows:
                    request_number = str(row.get("requestID", "")).strip()
                    if not request_number:
                        skipped_count += 1
                        skipped_reasons.append("Пропущена заявка без requestID.")
                        continue

                    exists = Request.query.filter_by(request_number=request_number).first()
                    if exists:
                        skipped_count += 1
                        skipped_reasons.append(f"Заявка '{request_number}' уже существует.")
                        continue

                    client_id_raw = row.get("clientID")
                    master_id_raw = row.get("masterID")

                    client_id = None
                    specialist_id = None
                    client_name = "Неизвестный клиент"
                    client_phone = ""

                    if pd.notna(client_id_raw):
                        try:
                            client_id_val = int(client_id_raw)
                            user = users_by_id.get(client_id_val)
                            if user:
                                client_id = user.id
                                client_name = user.full_name
                                client_phone = user.phone or ""
                        except Exception:
                            pass

                    if pd.notna(master_id_raw):
                        try:
                            master_id_val = int(master_id_raw)
                            user = users_by_id.get(master_id_val)
                            if user:
                                specialist_id = user.id
                        except Exception:
                            pass

                    completion_date = row.get("completionDate")
                    planned_end_date = ""
                    if pd.notna(completion_date) and str(completion_date).lower() != "null":
                        planned_end_date = str(completion_date)

                    item = Request(
                    request_number=request_number,
                    equipment_type=str(row.get("climateTechType", "")).strip(),
                     equipment_model=str(row.get("climateTechModel", "")).strip(),
                    problem_description=str(row.get("problemDescription", "")).strip(),
                    client_name=client_name,
                    client_phone=client_phone,
                    status=normalize_status(row.get("requestStatus", "Новая заявка")),
                    planned_end_date=planned_end_date,
                    specialist_id=specialist_id
                    )

                    db.session.add(item)
                    added_count += 1

            elif import_type == "comments":
                requests_by_number = {r.request_number: r.id for r in Request.query.all()}
                users_by_id = {u.id: u for u in User.query.all()}
                fallback_user = User.query.first()

                for row in rows:
                    request_id_raw = row.get("requestID")
                    master_id_raw = row.get("masterID")
                    text = str(row.get("message", "")).strip()

                    if not text:
                        skipped_count += 1
                        skipped_reasons.append("Пропущен комментарий без текста.")
                        continue

                    if pd.isna(request_id_raw):
                        skipped_count += 1
                        skipped_reasons.append("Пропущен комментарий без requestID.")
                        continue

                    try:
                        request_number = str(int(request_id_raw))
                    except Exception:
                        request_number = str(request_id_raw).strip()

                    request_id = requests_by_number.get(request_number)
                    if not request_id:
                        skipped_count += 1
                        skipped_reasons.append(
                            f"Комментарий пропущен: заявка '{request_number}' ещё не импортирована."
                        )
                        continue

                    author_id = None
                    if pd.notna(master_id_raw):
                        try:
                            master_id_val = int(master_id_raw)
                            user = users_by_id.get(master_id_val)
                            if user:
                                author_id = user.id
                        except Exception:
                            pass

                    if not author_id:
                        if fallback_user:
                            author_id = fallback_user.id
                        else:
                            skipped_count += 1
                            skipped_reasons.append(
                                f"Комментарий к заявке '{request_number}' пропущен: нет ни одного пользователя в базе."
                            )
                            continue

                    comment = Comment(
                        text=text,
                        request_id=request_id,
                        author_id=author_id
                    )
                    db.session.add(comment)
                    added_count += 1

            else:
                message = "Не удалось определить тип файла."
                return render_template("import.html", message=message)

            db.session.commit()

            message = (
                f"Импорт завершён. Добавлено: {added_count}. "
                f"Пропущено: {skipped_count}."
            )

            if skipped_reasons:
                unique_reasons = []
                for reason in skipped_reasons:
                    if reason not in unique_reasons:
                        unique_reasons.append(reason)
                message += " Причины: " + " | ".join(unique_reasons[:10])

        except Exception as e:
            db.session.rollback()
            message = f"Ошибка импорта: {e}"

    return render_template("import.html", message=message)

@main_bp.route("/users")
def users_list():
    if "user_id" not in session:
        return redirect(url_for("main.login"))

    users = User.query.order_by(User.id.asc()).all()
    return render_template("users_list.html", users=users)

@main_bp.route("/comments")
def comments_list():
    if "user_id" not in session:
        return redirect(url_for("main.login"))

    comments = Comment.query.order_by(Comment.created_at.desc()).all()
    return render_template("comments_list.html", comments=comments)

@main_bp.route("/quality")
def quality_page():
    if "user_id" not in session:
        return redirect(url_for("main.login"))

    qr_folder = os.path.join("webapp", "static", "qr")
    os.makedirs(qr_folder, exist_ok=True)

    qr_path = os.path.join(qr_folder, "quality_form.png")

    form_url = "https://docs.google.com/forms/d/e/1FAIpQLSdhZcExx6LSIXxk0ub55mSu-WIh23WYdGG9HY5EZhLDo7P8eA/viewform"

    if not os.path.exists(qr_path):
        img = qrcode.make(form_url)
        img.save(qr_path)

    return render_template(
        "quality.html",
        form_url=form_url,
        qr_file="qr/quality_form.png"
    )
@main_bp.route("/requests/<int:request_id>/delete", methods=["POST"])
def delete_request(request_id):
    if "user_id" not in session:
        return redirect(url_for("main.login"))

    if not role_required("Оператор", "Менеджер по качеству"):
        flash("У вас нет прав для удаления заявки.", "error")
        return redirect(url_for("main.requests_list"))

    item = Request.query.get_or_404(request_id)
    request_number = item.request_number

    db.session.delete(item)
    db.session.commit()

    flash(f"Заявка №{request_number} удалена.", "success")
    return redirect(url_for("main.requests_list"))


@main_bp.route("/comments/<int:comment_id>/delete", methods=["POST"])
def delete_comment(comment_id):
    if "user_id" not in session:
        return redirect(url_for("main.login"))

    if not role_required("Оператор", "Менеджер по качеству"):
        flash("У вас нет прав для удаления комментария.", "error")
        return redirect(url_for("main.comments_list"))

    comment = Comment.query.get_or_404(comment_id)
    request_id = comment.request_id

    db.session.delete(comment)
    db.session.commit()

    flash("Комментарий удалён.", "success")
    return redirect(url_for("main.request_detail", request_id=request_id))

@main_bp.route("/logout")
def logout():
    session.clear()
    return redirect(url_for("main.login"))