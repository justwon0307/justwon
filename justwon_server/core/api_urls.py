from django.urls import path
from rest_framework.routers import DefaultRouter

from devlog.views import (
    CategoryGroupViewSet,
    CategoryViewSet,
    BlogInitializerView,
    BlogAdminInitializerView,
)

router = DefaultRouter()

router.register("v1/blog/groups", CategoryGroupViewSet, basename="category-groups")
router.register("v1/blog/categories", CategoryViewSet, basename="categories")

urlpatterns = [
    path("v1/blog/initialize/", BlogInitializerView.as_view(), name="blog-initialize"),
    path(
        "admin/blog/initialize/",
        BlogAdminInitializerView.as_view(),
        name="blog-admin-initialize",
    ),
]

urlpatterns += router.urls
