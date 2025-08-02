from django.urls import path
from rest_framework.routers import DefaultRouter

from learning.views import LearningInitializerView

router = DefaultRouter()


urlpatterns = [
    path("v1/learning/", LearningInitializerView.as_view(), name="learning-initialize"),
]

urlpatterns += router.urls
