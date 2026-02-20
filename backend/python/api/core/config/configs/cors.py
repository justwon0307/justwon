from config.env import env

## CORS settings
CORS_ALLOWED_ORIGINS = env.list("CORS_ALLOWED_ORIGINS", default=[])
CORS_ALLOW_CREDENTIALS = True
CORS_ALLOW_HEADERS = [
  "accept",
  "authorization",
  "content-type",
  "user-agent",
  "x-csrftoken",
  "x-requested-with",
  "x-justwon-client",
]
