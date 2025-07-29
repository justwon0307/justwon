from rest_framework.permissions import BasePermission


class AdminOnly(BasePermission):
    """
    관리자 전용 권한.
    이 권한은 사용자가 관리자일 때만 허용됩니다.
    """

    def has_permission(self, request, view):
        return request.user and request.user.is_staff
