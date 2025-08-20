from drf_spectacular.utils import extend_schema
from rest_framework import status
from rest_framework.permissions import AllowAny
from rest_framework.viewsets import ReadOnlyModelViewSet

from ..models import CategoryGroup
from ..serializers import CategoryGroupSimpleSerializer, CategoryGroupDetailSerializer


class CategoryGroupViewSet(ReadOnlyModelViewSet):
    """
    카테고리 그룹 뷰셋
    유저들을 위한 ReadOnly API
    """

    queryset = CategoryGroup.objects.filter(is_active=True)
    serializer_class = CategoryGroupSimpleSerializer
    permission_classes = [AllowAny]
    lookup_field = "slug"

    @extend_schema(
        summary="카테고리 그룹 목록 조회",
        responses={status.HTTP_200_OK: CategoryGroupSimpleSerializer(many=True)},
        tags=["카테고리 그룹"],
    )
    def list(self, request, *args, **kwargs):
        """
        카테고리 그룹 목록 조회는 Initializer에서 처리하므로 이 메소드는 제외.
        """
        return super().list(request, *args, **kwargs)

    @extend_schema(
        summary="카테고리 그룹 상세 조회",
        responses={status.HTTP_200_OK: CategoryGroupDetailSerializer},
        tags=["카테고리 그룹"],
    )
    def retrieve(self, request, *args, **kwargs):
        self.serializer_class = CategoryGroupDetailSerializer
        return super().retrieve(request, *args, **kwargs)
