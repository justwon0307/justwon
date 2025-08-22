from rest_framework.routers import DefaultRouter

from devlog.categories.views import CategoryGroupViewSet, CategoryViewSet

router = DefaultRouter()

router.register("v1/blog/groups", CategoryGroupViewSet, basename="category-groups")
router.register("v1/blog/categories", CategoryViewSet, basename="categories")

urlpatterns = []
urlpatterns += router.urls
