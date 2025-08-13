from drf_spectacular.utils import extend_schema
from rest_framework import status
from rest_framework.generics import GenericAPIView
from rest_framework.permissions import AllowAny
from rest_framework.response import Response

from ..models import CategoryGroup, PostType, Series, Tag
from ..serializers import (
    CategoryGroupSimpleSerializer,
    PostTypeSerializer,
    SeriesSerializer,
    TagSerializer,
)
from auth.permissions import AdminOnly


class BlogInitializerView(GenericAPIView):
    """
    블로그 초기 데이터 API
    """

    permission_classes = [AllowAny]

    @extend_schema(
        summary="블로그 초기 데이터 조회",
        tags=["블로그"],
    )
    def get(self, request, *args, **kwargs):
        category_groups = CategoryGroup.objects.filter(is_active=True)
        category_groups_data = CategoryGroupSimpleSerializer(
            category_groups, many=True
        ).data

        post_types = PostType.objects.all()
        post_types_data = PostTypeSerializer(post_types, many=True).data

        series = Series.objects.filter(is_active=True)
        series_data = SeriesSerializer(series, many=True).data

        tags = Tag.objects.all()
        tags_data = TagSerializer(tags, many=True).data

        data = {
            "category_groups": category_groups_data,
            "post_types": post_types_data,
            "series": series_data,
            "tags": tags_data,
        }

        return Response(data, status=status.HTTP_200_OK)


class BlogAdminInitializerView(GenericAPIView):
    """
    블로그 관리자 초기 데이터 API
    """

    permission_classes = [AdminOnly]

    @extend_schema(
        summary="블로그 관리자 초기 데이터 조회",
        tags=["블로그"],
    )
    def get(self, request, *args, **kwargs):
        category_groups = CategoryGroup.objects.all()
        category_groups_data = CategoryGroupSimpleSerializer(
            category_groups, many=True
        ).data

        post_types = PostType.objects.all()
        post_types_data = PostTypeSerializer(post_types, many=True).data

        series = Series.objects.all()
        series_data = SeriesSerializer(series, many=True).data

        tags = Tag.objects.all()
        tags_data = TagSerializer(tags, many=True).data

        data = {
            "category_groups": category_groups_data,
            "post_types": post_types_data,
            "series": series_data,
            "tags": tags_data,
        }

        return Response(data, status=status.HTTP_200_OK)
