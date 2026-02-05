from django.db import models


class BlogSection(models.IntegerChoices):
  DEVLOG = 1, "Devlog"
  LOUNGE = 2, "Lounge"
