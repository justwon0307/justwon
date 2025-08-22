from django.contrib import admin

from .models import Category, CategoryGroup

admin.site.register(CategoryGroup)
admin.site.register(Category)
