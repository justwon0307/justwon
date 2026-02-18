_BASE_APPS = [
  "django.contrib.admin",
  "django.contrib.auth",
  "django.contrib.contenttypes",
  "django.contrib.sessions",
  "django.contrib.messages",
  "django.contrib.staticfiles",
]

_THIRD_PARTY_APPS = [
  "rest_framework",
  "corsheaders",
  "rest_framework_simplejwt",
  "rest_framework_simplejwt.token_blacklist",
]

_LOCAL_APPS = [
  "base",
  "apps.auth.user",
  "apps.blog.categories",
  "apps.blog.posts",
  "apps.blog.posttypes",
  "apps.blog.series",
  "apps.blog.tags",
]

INSTALLED_APPS = _BASE_APPS + _THIRD_PARTY_APPS + _LOCAL_APPS
