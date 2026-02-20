from django.contrib import admin
from django.contrib.auth.models import Group
from rest_framework_simplejwt.token_blacklist.models import (
  BlacklistedToken,
  OutstandingToken,
)

from apps.auth.user.models import User
from apps.blog.categories.models import Category
from apps.blog.posts.models import Post
from apps.blog.posttypes.models import PostType
from apps.blog.series.models import Series
from apps.blog.tags.models import Tag

admin.site.register(User)
admin.site.register(Category)
admin.site.register(PostType)
admin.site.register(Series)
admin.site.register(Tag)
admin.site.register(Post)

## Django admin에서 사용하지 않는 모델들 제거
admin.site.unregister(Group)
admin.site.unregister(OutstandingToken)
admin.site.unregister(BlacklistedToken)
