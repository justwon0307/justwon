from rest_framework import status
from rest_framework.permissions import AllowAny
from rest_framework.response import Response
from rest_framework.viewsets import ReadOnlyModelViewSet

from .models import PostType
from .serializers import PostTypeSerializer


class PostTypeViewSet(ReadOnlyModelViewSet):
  queryset = PostType.objects.all()
  serializer_class = PostTypeSerializer
  permission_classes = [AllowAny]
  lookup_field = "slug"

  def list(self, request, *args, **kwargs):
    queryset = self.get_queryset()
    serializer = self.get_serializer(queryset, many=True)
    return Response(serializer.data, status=status.HTTP_200_OK)

  def retrieve(self, request, *args, **kwargs):
    instance = self.get_object()
    serializer = self.get_serializer(instance)
    return Response(serializer.data, status=status.HTTP_200_OK)
