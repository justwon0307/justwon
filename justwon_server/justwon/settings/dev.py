from .base import *  # pylint: disable=W0401,W0614

# SECURITY WARNING: don't run with debug turned on in production!
DEBUG = True

ALLOWED_HOSTS = ["localhost", config("TAILSCALE_IP")]

# Database
# https://docs.djangoproject.com/en/5.2/ref/settings/#databases

DATABASES = {
    "default": {
        "ENGINE": "django.db.backends.sqlite3",
        "NAME": BASE_DIR / "db.sqlite3",
    }
}

## CORS settings
CORS_ALLOWED_ORIGINS = [
    "http://localhost:3000",
    f"http://{config('TAILSCALE_IP')}:3000",
]
