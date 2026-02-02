from django.contrib import admin

from apps.blog.categories.models import Category
from apps.blog.posts.models import Post
from apps.blog.posttypes.models import PostType
from apps.blog.series.models import Series
from apps.blog.tags.models import Tag

admin.site.register(Category)
admin.site.register(PostType)
admin.site.register(Series)
admin.site.register(Tag)
admin.site.register(Post)
