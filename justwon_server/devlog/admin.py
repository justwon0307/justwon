from django.contrib import admin

from .models import Category, CategoryGroup, PostType, Post, Series, Tag

admin.site.register(Category)
admin.site.register(CategoryGroup)
admin.site.register(PostType)
admin.site.register(Post)
admin.site.register(Series)
admin.site.register(Tag)
