from rest_framework.exceptions import ValidationError
from rest_framework_simplejwt.serializers import TokenObtainPairSerializer


class LoginSerializer(TokenObtainPairSerializer):
  def __init__(self, *args, **kwargs):
    super().__init__(*args, **kwargs)
    self.fields[self.username_field].allow_blank = True
    self.fields["password"].allow_blank = True

  def validate(self, attrs):
    if not attrs.get(self.username_field):
      raise ValidationError("아이디는 필수입니다.")
    if not attrs.get("password"):
      raise ValidationError("비밀번호는 필수입니다.")
    return super().validate(attrs)
