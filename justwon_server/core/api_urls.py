from django.urls import path
from rest_framework.routers import DefaultRouter

from devlog.views import CategoryGroupViewSet

router = DefaultRouter()
router.register("v1/groups", CategoryGroupViewSet, basename="category-groups")

urlpatterns = []
urlpatterns += router.urls
