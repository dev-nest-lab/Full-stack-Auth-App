from fastapi.testclient import TestClient
from app.main import app   # adjust if your path is different


client = TestClient(app)


def test_register_endpoint_exists():
    response = client.post("/register", json={
        "name": "Test User",
        "email": "test@example.com",
        "password": "123456"
    })
    # We only check that endpoint works (not exact logic)
    assert response.status_code in [200, 400]