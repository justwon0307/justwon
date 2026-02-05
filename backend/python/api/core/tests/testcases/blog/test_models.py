import pytest

from apps.blog.categories.models import Category
from apps.blog.enums import BlogSection
from apps.blog.posts.models import Post
from apps.blog.posttypes.models import PostType
from apps.blog.series.models import Series
from apps.blog.tags.models import Tag

pytestmark = pytest.mark.django_db


@pytest.fixture(autouse=True)
def setup():
  Tag.objects.create(name="Python Programming", slug="custom-slug", color="#306998")
  Tag.objects.create(name="Web Development")
  Series.objects.create(
    title="Django Basics",
    slug="django-basics",
    description="Learn the basics of Django.",
    is_active=False,
  )
  Series.objects.create(title="REST API Development")
  Category.objects.create(
    name="Technology", slug="technology", section=BlogSection.DEVLOG
  )
  Category.objects.create(name="Health & Wellness", section=BlogSection.DEVLOG)
  PostType.objects.create(name="Tutorial", slug="tutorial", section=BlogSection.DEVLOG)
  PostType.objects.create(name="Opinion Piece", section=BlogSection.LOUNGE)


def test_tag_model():
  ## 1. 모든 필드 수동 지정
  tag1 = Tag.objects.get(name="Python Programming")
  assert tag1.name == "Python Programming"
  assert tag1.slug == "custom-slug"
  assert tag1.color == "#306998"
  assert str(tag1) == "Python Programming"

  ## 2. slug 자동 생성
  tag2 = Tag.objects.get(name="Web Development")
  assert tag2.slug == "web-development"
  assert tag2.color == "#FFFFFF"  # 색상도 기본값 확인


def test_series_model():
  ## 1. 모든 필드 수동 지정
  series1 = Series.objects.get(title="Django Basics")
  assert series1.title == "Django Basics"
  assert series1.slug == "django-basics"
  assert series1.description == "Learn the basics of Django."
  assert str(series1) == "Django Basics"
  assert series1.is_active is False

  ## 2. slug 자동 생성
  series2 = Series.objects.get(title="REST API Development")
  assert series2.slug == "rest-api-development"
  assert series2.is_active is True  # 기본값 확인


def test_categories_model():
  ## 1. 모든 필드 수동 지정
  category = Category.objects.get(name="Technology")
  assert category.name == "Technology"
  assert category.slug == "technology"
  assert str(category) == "Technology"

  ## 2. slug 자동 생성
  category2 = Category.objects.get(name="Health & Wellness")
  assert category2.slug == "health-wellness"


def test_posttype_model():
  ## 1. 모든 필드 수동 지정
  post_type = PostType.objects.get(name="Tutorial")
  assert post_type.name == "Tutorial"
  assert post_type.slug == "tutorial"
  assert str(post_type) == "Tutorial"

  ## 2. slug 자동 생성
  post_type2 = PostType.objects.get(name="Opinion Piece")
  assert post_type2.slug == "opinion-piece"


def test_post_model():
  category = Category.objects.get(name="Technology")
  post_type = PostType.objects.get(name="Tutorial")
  series = Series.objects.get(title="Django Basics")
  tag1 = Tag.objects.get(name="Python Programming")

  post = Post.objects.create(
    title="Latest Tech Trends",
    slug="latest-tech-trends",
    content="Content about the latest tech trends.",
    thumbnail_url="http://example.com/thumbnail.jpg",
    category=category,
    post_type=post_type,
    series=series,
  )
  post.tags.add(tag1)

  assert post.title == "Latest Tech Trends"
  assert post.slug == "latest-tech-trends"
  assert post.content == "Content about the latest tech trends."
  assert post.category == category
  assert post.post_type == post_type
  assert post.series == series
  assert list(post.tags.all()) == [tag1]
  assert str(post) == "Latest Tech Trends"


def test_post_model_validation():
  ## 카테고리와 포스트타입의 섹션이 일치하지 않는 경우 ValidationError 발생
  category = Category.objects.get(name="Technology")
  post_type = PostType.objects.get(name="Opinion Piece")

  with pytest.raises(Exception) as excinfo:
    Post.objects.create(
      title="Invalid Post",
      slug="invalid-post",
      content="This post has mismatched category and post type sections.",
      thumbnail_url="http://example.com/thumbnail.jpg",
      category=category,
      post_type=post_type,
    )
  assert "PostType의 section과 Category의 section이 일치하지 않습니다." in str(
    excinfo.value
  )
