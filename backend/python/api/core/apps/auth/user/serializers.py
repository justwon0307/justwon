from rest_framework import serializers

from .models import User


class MeSerializer(serializers.ModelSerializer):
  class Meta:
    model = User
    fields = ["uuid", "username", "avatar_url"]

  def to_representation(self, instance):
    ret = super().to_representation(instance)

    ## avatar_url이 빈 문자열이면 None으로 반환
    ## 기본 프로필 이미지를 렌더링하는건 프론트엔드에서 처리한다
    if ret["avatar_url"] == "":
      ret["avatar_url"] = None

    return ret
