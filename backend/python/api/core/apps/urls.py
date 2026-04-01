from django.urls import path
from rest_framework.routers import DefaultRouter

from .auth.user.views import MeAPIView
from .auth.views import LoginView, LogoutView, TokenRefreshView
from .blog.categories.views import CategoryViewSet
from .blog.posttypes.views import PostTypeViewSet

router = DefaultRouter()

router.register(r"blog/categories", CategoryViewSet, basename="category")
router.register(r"blog/posttypes", PostTypeViewSet, basename="posttype")

urlpatterns = [
  path("me/", MeAPIView.as_view(), name="me"),
  path("login/", LoginView.as_view(), name="login"),
  path("logout/", LogoutView.as_view(), name="logout"),
  path("tokens/refresh/", TokenRefreshView.as_view(), name="token_refresh"),
]

urlpatterns += router.urls
