from config.env import BASE_DIR, env

# SECURITY WARNING: keep the secret key used in production secret!
SECRET_KEY = env("SECRET_KEY")

DEBUG = env.bool("DEBUG", default=False)
ALLOWED_HOSTS = env.list("ALLOWED_HOSTS", default=[])

# Database
# https://docs.djangoproject.com/en/6.0/ref/settings/#databases
DATABASES = {
  "default": env.db("DATABASE_URL", default=f"sqlite:///{str(BASE_DIR)}/db.sqlite3"),
}

MIDDLEWARE = [
  "django.middleware.security.SecurityMiddleware",
  "django.contrib.sessions.middleware.SessionMiddleware",
  "corsheaders.middleware.CorsMiddleware",
  "django.middleware.common.CommonMiddleware",
  "django.middleware.csrf.CsrfViewMiddleware",
  "django.contrib.auth.middleware.AuthenticationMiddleware",
  "django.contrib.messages.middleware.MessageMiddleware",
  "django.middleware.clickjacking.XFrameOptionsMiddleware",
]

ROOT_URLCONF = "config.urls"

TEMPLATES = [
  {
    "BACKEND": "django.template.backends.django.DjangoTemplates",
    "DIRS": [],
    "APP_DIRS": True,
    "OPTIONS": {
      "context_processors": [
        "django.template.context_processors.request",
        "django.contrib.auth.context_processors.auth",
        "django.contrib.messages.context_processors.messages",
      ],
    },
  },
]

WSGI_APPLICATION = "config.wsgi.application"

# Internationalization
# https://docs.djangoproject.com/en/6.0/topics/i18n/
LANGUAGE_CODE = "en-us"
TIME_ZONE = "UTC"
USE_I18N = True
USE_TZ = True

# Static files (CSS, JavaScript, Images)
# https://docs.djangoproject.com/en/6.0/howto/static-files/
STATIC_URL = "static/"

## Rest Framework settings
REST_FRAMEWORK = {
  "DEFAULT_AUTHENTICATION_CLASSES": (
    "rest_framework_simplejwt.authentication.JWTAuthentication",
  ),
  "EXCEPTION_HANDLER": "base.exceptions.justwon_exception_handler",
  "DEFAULT_THROTTLE_CLASSES": [
    "rest_framework.throttling.ScopedRateThrottle",
  ],
  "DEFAULT_THROTTLE_RATES": {
    "login": "5/minute",
    "refresh": "10/minute",
    "blacklist": "20/minute",
  },
}
