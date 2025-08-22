from rest_framework import serializers

from ..models import Category, CategoryGroup


class CategoryGroupRelatedSerializer(serializers.ModelSerializer):
    class Meta:
        model = CategoryGroup
        fields = ["id", "name", "slug"]
        read_only_fields = ["id"]


class CategorySimpleSerializer(serializers.ModelSerializer):
    num_posts = serializers.SerializerMethodField()
    group = CategoryGroupRelatedSerializer(read_only=True)

    class Meta:
        model = Category
        fields = [
            "id",
            "name",
            "slug",
            "icon",
            "cover_image_url",
            "num_posts",
            "group",
        ]
        read_only_fields = [
            "id",
            "name",
            "slug",
            "icon",
            "cover_image_url",
            "num_posts",
            "group",
        ]

    def get_num_posts(self, obj):
        ## TODO: is_published가 True인 게시글의 수를 반환
        return 0


class CategoryDetailSerializer(serializers.ModelSerializer):
    ### TODO: Posts 필드 추가
    group = CategoryGroupRelatedSerializer(read_only=True)

    class Meta:
        model = Category
        fields = [
            "id",
            "name",
            "kor_name",
            "icon",
            "description",
            "group",
        ]
        read_only_fields = ["id"]


class CategoryGroupSimpleSerializer(serializers.ModelSerializer):
    categories = CategorySimpleSerializer(many=True, read_only=True)

    class Meta:
        model = CategoryGroup
        fields = ["id", "name", "slug", "icon", "categories"]
        read_only_fields = ["id", "categories"]


class CategoryGroupDetailSerializer(serializers.ModelSerializer):
    categories = CategorySimpleSerializer(many=True, read_only=True)

    class Meta:
        model = CategoryGroup
        fields = [
            "id",
            "name",
            "kor_name",
            "icon",
            "description",
            "categories",
        ]
        read_only_fields = ["id", "categories"]
