from drf_spectacular.utils import extend_schema
from rest_framework import status
from rest_framework.permissions import AllowAny
from rest_framework.response import Response
from rest_framework.viewsets import ModelViewSet

from ..models import Category
from ..serializers import CategoryDetailSerializer


class CategoryViewSet(ModelViewSet):
    queryset = None  # `get_queryset` 메소드에서 정의
    serializer_class = CategoryDetailSerializer
    lookup_field = "slug"

    def get_queryset(self):
        """
        TODO:
        로그인한 유저가 관리자일 경우, 전부 반환,
        그렇지 않을 경우, is_active가 True인 것만 반환
        """
        return Category.objects.all()

    def get_permissions(self):
        """
        TODO:
        로그인한 유저가 관리자일 경우, 모든 권한 부여,
        그렇지 않을 경우, 읽기 전용 권한 부여
        """
        return [AllowAny()]

    @extend_schema(exclude=True)
    def list(self, request, *args, **kwargs):
        """
        카테고리 목록 조회는 CategoryGroupViewSet에서 처리하므로 이 메소드는 제외합니다.
        """
        return Response(status=status.HTTP_405_METHOD_NOT_ALLOWED)

    @extend_schema(
        summary="카테고리 상세 조회",
        responses={status.HTTP_200_OK: CategoryDetailSerializer},
        tags=["카테고리"],
    )
    def retrieve(self, request, *args, **kwargs):
        return super().retrieve(request, *args, **kwargs)
