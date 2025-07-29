from clerk_backend_api import authenticate_request, AuthenticateRequestOptions
from django.conf import settings
from django.contrib.auth import get_user_model
from django.contrib.auth.backends import BaseBackend
from rest_framework.authentication import BaseAuthentication

AUTHORIZED_PARTIES = settings.CORS_ALLOWED_ORIGINS

UserModel = get_user_model()


class JWTAuthBackend(BaseBackend):
    """
    Clerk 인증을 위한 커스텀 인증 백엔드.
    이 백엔드는 JWT 토큰을 사용하여 사용자를 인증합니다.
    """

    def authenticate(self, request, **kwargs):
        if "Authorization" not in request.headers:
            return None

        try:
            request_state = authenticate_request(
                request,
                AuthenticateRequestOptions(
                    secret_key=settings.CLERK_SECRET_KEY,
                    authorized_parties=AUTHORIZED_PARTIES,
                ),
            )

            if not request_state.is_signed_in:
                request.error_message = request_state.message
                return None

            (user, _) = UserModel.objects.get_or_create(
                username=request_state.payload["sub"],
                defaults={
                    "email": request_state.payload.get("email", ""),
                    "first_name": request_state.payload.get("firstName", ""),
                    "last_name": request_state.payload.get("lastName", ""),
                },
            )

            return user
        except Exception as e:  ## pylint: disable=W0718
            request.error_message = str(e)
            return None

    def get_user(self, user_id):
        try:
            return UserModel.objects.get(username=user_id)
        except UserModel.DoesNotExist:
            return None


class JWTAuthentication(BaseAuthentication):
    """
    JWT 인증을 위한 커스텀 인증 미들웨어.
    이 미들웨어는 요청 헤더에서 JWT 토큰을 추출하고, 이를 사용하여 사용자를 인증합니다.
    """

    def authenticate(self, request):
        """
        요청에서 JWT 토큰을 추출하고, 이를 사용하여 사용자를 인증합니다.
        인증된 사용자가 없으면 None을 반환합니다.
        """
        backend = JWTAuthBackend()
        user = backend.authenticate(request)

        if user is not None:
            request.user = user
            return (user, None)

        return None
