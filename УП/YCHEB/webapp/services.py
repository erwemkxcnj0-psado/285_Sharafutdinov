import os
import pandas as pd


def detect_import_type(filename: str) -> str:
    name = filename.lower()

    if "users" in name:
        return "users"
    if "requests" in name:
        return "requests"
    if "comments" in name:
        return "comments"

    return "unknown"


def load_rows_from_file(file_storage):
    filename = file_storage.filename.lower()
    ext = os.path.splitext(filename)[1]

    if ext == ".csv":
        df = pd.read_csv(file_storage, sep=";")
        return df.to_dict(orient="records")

    if ext == ".txt":
        df = pd.read_csv(file_storage, sep=";")
        return df.to_dict(orient="records")

    if ext == ".xlsx":
        df = pd.read_excel(file_storage)
        return df.to_dict(orient="records")

    raise ValueError("Неподдерживаемый формат файла")

def normalize_status(raw_status: str) -> str:
    value = str(raw_status or "").strip().lower()

    mapping = {
        "новая": "Новая заявка",
        "новая заявка": "Новая заявка",
        "открыта заявка": "Новая заявка",

        "в работе": "В процессе ремонта",
        "в процессе ремонта": "В процессе ремонта",

        "ожидание комплектующих": "Ожидание комплектующих",

        "готова к выдаче": "Завершена",
        "завершена": "Завершена",
    }

    return mapping.get(value, "Новая заявка")