from django.urls import path
from rest_framework.routers import DefaultRouter

from .auth.views import LoginView, LogoutView, TokenRefreshView

router = DefaultRouter()

urlpatterns = [
  path("login/", LoginView.as_view(), name="login"),
  path("logout/", LogoutView.as_view(), name="logout"),
  path("tokens/refresh/", TokenRefreshView.as_view(), name="token_refresh"),
]

urlpatterns += router.urls
