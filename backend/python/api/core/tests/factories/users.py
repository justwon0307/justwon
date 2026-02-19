import factory
from factory.django import DjangoModelFactory

from apps.auth.user.models import User


class UserFactory(DjangoModelFactory):
  class Meta:
    model = User
    skip_postgeneration_save = True

  username = factory.Sequence(lambda n: f"user{n}")
  is_superuser = False

  @factory.post_generation
  def password(self, create, extracted, **kwargs):
    self.set_password(extracted or "password")
    if create:
      self.save(update_fields=["password"])
