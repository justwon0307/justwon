from rest_framework import status
from rest_framework.viewsets import ModelViewSet

from ..models import Post
from ..serializers import PostSerializer


class PostsViewSet(ModelViewSet):
    """
    게시글 API 뷰셋.
    """

    queryset = Post.objects.all()
    serializer_class = PostSerializer

    def get_queryset(self):
        """
        관리자 전용 게시글을 제외한 게시글 목록을 반환합니다.
        """
        return self.queryset.filter(admin_only=False)
