import factory
from factory.django import DjangoModelFactory

from apps.blog.categories.models import Category
from apps.blog.enums import BlogSection
from apps.blog.posts.models import Post
from apps.blog.posttypes.models import PostType
from apps.blog.series.models import Series
from apps.blog.tags.models import Tag


class CategoryFactory(DjangoModelFactory):
  class Meta:
    model = Category

  name = factory.Sequence(lambda n: f"Category {n}")
  icon = factory.Sequence(lambda n: f"icon-{n}")
  section = BlogSection.LOUNGE
  description = factory.Sequence(lambda n: f"This is the description for Category {n}.")


class PostTypeFactory(DjangoModelFactory):
  class Meta:
    model = PostType

  name = factory.Sequence(lambda n: f"PostType {n}")
  icon = factory.Sequence(lambda n: f"icon-{n}")
  section = BlogSection.DEVLOG
  description = factory.Sequence(lambda n: f"This is the description for PostType {n}.")


class SeriesFactory(DjangoModelFactory):
  class Meta:
    model = Series

  title = factory.Sequence(lambda n: f"Series Title {n}")
  description = factory.Sequence(lambda n: f"This is the description for Series {n}.")


class TagFactory(DjangoModelFactory):
  class Meta:
    model = Tag

  name = factory.Sequence(lambda n: f"Tag {n}")


class PostFactory(DjangoModelFactory):
  class Meta:
    model = Post

  title = factory.Sequence(lambda n: f"Sample Post {n}")
  catergory = factory.SubFactory(CategoryFactory)
  post_type = factory.SubFactory(PostTypeFactory)
  series = factory.SubFactory(SeriesFactory)

  @factory.post_generation
  def tags(self, create, extracted, **kwargs):
    if not create:
      return

    if extracted:
      for tag in extracted:
        self.tags.add(tag)
