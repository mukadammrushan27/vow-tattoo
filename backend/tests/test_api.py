import os
import requests

BASE_URL = os.environ.get('REACT_APP_BACKEND_URL', 'https://ink-studio-preview-3.preview.emergentagent.com').rstrip('/')
API = f"{BASE_URL}/api"


# ---------- Health ----------
def test_root():
    r = requests.get(f"{API}/")
    assert r.status_code == 200
    assert "message" in r.json()


# ---------- Leads ----------
def test_create_lead_success_and_persist():
    payload = {"first_name": "TEST_John", "last_name": "Doe", "phone": "+15551234567", "source": "popup"}
    r = requests.post(f"{API}/leads", json=payload)
    assert r.status_code == 200, r.text
    data = r.json()
    assert data["first_name"] == "TEST_John"
    assert data["last_name"] == "Doe"
    assert data["phone"] == "+15551234567"
    assert data["source"] == "popup"
    assert "id" in data and isinstance(data["id"], str)
    assert "created_at" in data

    # verify persisted
    lr = requests.get(f"{API}/leads")
    assert lr.status_code == 200
    ids = [x["id"] for x in lr.json()]
    assert data["id"] in ids


def test_create_lead_missing_first_name_returns_422_or_400():
    payload = {"last_name": "Doe", "phone": "+15551234567"}
    r = requests.post(f"{API}/leads", json=payload)
    assert r.status_code in (400, 422), r.text


def test_create_lead_empty_phone_returns_400():
    payload = {"first_name": "TEST_A", "last_name": "B", "phone": "   "}
    r = requests.post(f"{API}/leads", json=payload)
    assert r.status_code == 400, r.text


def test_list_leads():
    r = requests.get(f"{API}/leads")
    assert r.status_code == 200
    assert isinstance(r.json(), list)


# ---------- Bookings ----------
def test_create_booking_success_and_persist():
    payload = {"first_name": "TEST_Jane", "last_name": "Smith", "phone": "+15557654321",
               "email": "jane@example.com", "service": "Custom Tattoo", "message": "Want a small piece"}
    r = requests.post(f"{API}/bookings", json=payload)
    assert r.status_code == 200, r.text
    data = r.json()
    assert data["first_name"] == "TEST_Jane"
    assert data["email"] == "jane@example.com"
    assert data["service"] == "Custom Tattoo"
    assert "id" in data

    lr = requests.get(f"{API}/bookings")
    assert lr.status_code == 200
    ids = [x["id"] for x in lr.json()]
    assert data["id"] in ids


def test_create_booking_missing_phone_returns_422():
    payload = {"first_name": "TEST_A", "last_name": "B"}
    r = requests.post(f"{API}/bookings", json=payload)
    assert r.status_code in (400, 422), r.text


def test_list_bookings():
    r = requests.get(f"{API}/bookings")
    assert r.status_code == 200
    assert isinstance(r.json(), list)
