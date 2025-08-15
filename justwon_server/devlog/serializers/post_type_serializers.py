from rest_framework import serializers

from ..models import PostType


class PostTypeSerializer(serializers.ModelSerializer):
    class Meta:
        model = PostType
        fields = ["id", "name", "slug", "description"]
        read_only_fields = ["id"]

    def validate_slug(self, value):
        """
        Slug는 영문 소문자, 숫자, 하이픈(-)만 허용합니다.
        """
        if not value.isalnum() and "-" not in value:
            raise serializers.ValidationError(
                "Slug must contain only alphanumeric characters and hyphens."
            )
        return value
