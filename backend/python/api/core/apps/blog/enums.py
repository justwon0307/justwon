from django.db import models


class BlogSection(models.IntegerChoices):
  DEVLOG = 1, "Devlog"
  AFK = 2, "AFK"
