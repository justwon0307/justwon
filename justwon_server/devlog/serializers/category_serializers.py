from rest_framework import serializers

from ..models import CategoryGroup, Category


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
            "num_posts",
            "group",
        ]
        read_only_fields = ["id", "num_posts", "group"]

    def get_num_posts(self, obj):
        ## admin_only가 아닌 게시글의 수를 반환
        return obj.posts.filter(admin_only=False).count()


class CategoryGroupSimpleSerializer(serializers.ModelSerializer):
    categories = CategorySimpleSerializer(many=True, read_only=True)

    class Meta:
        model = CategoryGroup
        fields = ["id", "name", "kor_name", "slug", "categories"]
        read_only_fields = ["id", "categories"]
