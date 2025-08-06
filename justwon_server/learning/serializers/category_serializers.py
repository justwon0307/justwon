from rest_framework import serializers

from ..models import CategoryGroup, Category


class CategorySerializer(serializers.ModelSerializer):
    num_posts = serializers.SerializerMethodField()
    category_group_id = serializers.IntegerField(source='group.id', read_only=True)

    class Meta:
        model = Category
        fields = ["id", "name", "slug", "num_posts", "category_group_id"]
        read_only_fields = ["id", "num_posts"]

    def get_num_posts(self, obj):
        ## admin_only가 아닌 게시글의 수를 반환
        return obj.posts.filter(admin_only=False).count()

class CategoryGroupSerializer(serializers.ModelSerializer):
    categories = CategorySerializer(many=True, read_only=True)

    class Meta:
        model = CategoryGroup
        fields = ["id", "name", "kor_name", "slug", "categories"]
        read_only_fields = ["id", "categories"]
