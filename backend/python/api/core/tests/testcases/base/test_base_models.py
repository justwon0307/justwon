import pytest
from django.core.exceptions import ValidationError
from django.db import models

from base.models import SluggedModel


def test_slugged_model_without_slug_base_field():
  class TestModel(SluggedModel):
    name = models.CharField(max_length=100)

    class Meta:
      app_label = "base"

  with pytest.raises(ValidationError):
    instance = TestModel(name="Test Name")
    instance.save()
