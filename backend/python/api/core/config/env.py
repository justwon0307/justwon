import os

import environ

env = environ.Env()
BASE_DIR = environ.Path(__file__) - 2
env.read_env(os.path.join(BASE_DIR, ".env"))
