from datetime import timedelta

from config.env import env

AUTH_USER_MODEL = "user.User"

# Password validation
# https://docs.djangoproject.com/en/6.0/ref/settings/#auth-password-validators
AUTH_PASSWORD_VALIDATORS = [
  {
    "NAME": "django.contrib.auth.password_validation.UserAttributeSimilarityValidator",
  },
  {
    "NAME": "django.contrib.auth.password_validation.MinimumLengthValidator",
  },
  {
    "NAME": "django.contrib.auth.password_validation.CommonPasswordValidator",
  },
  {
    "NAME": "django.contrib.auth.password_validation.NumericPasswordValidator",
  },
]

## JWT settings
SIMPLE_JWT = {
  "ACCESS_TOKEN_LIFETIME": timedelta(minutes=60),
  "REFRESH_TOKEN_LIFETIME": timedelta(days=15),
  "ROTATE_REFRESH_TOKENS": True,
  "BLACKLIST_AFTER_ROTATION": True,
  "UPDATE_LAST_LOGIN": False,
  "USER_ID_FIELD": "uuid",
  "ALGORITHM": "HS256",
  "SIGNING_KEY": env("SECRET_KEY"),
}

JWT_AUTH_COOKIE = env("JWT_AUTH_COOKIE")
