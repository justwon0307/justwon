from drf_spectacular.utils import extend_schema
from rest_framework import status
from rest_framework.generics import GenericAPIView
from rest_framework.permissions import AllowAny
from rest_framework.response import Response

from ..models import CategoryGroup
from ..serializers import CategoryGroupSerializer


class LearningInitializerView(GenericAPIView):
    """
    Learning 앱 초기화 뷰
    """

    permission_classes = [AllowAny]
    serializer_class = CategoryGroupSerializer

    @extend_schema(
        summary="학습 탭 초기화",
        responses={status.HTTP_200_OK: CategoryGroupSerializer(many=True)},
        tags=["학습"],
    )
    def get(self, request, *args, **kwargs):
        category_groups = CategoryGroup.objects.all()
        serializer = self.get_serializer(category_groups, many=True)
        return Response(serializer.data, status=status.HTTP_200_OK)
