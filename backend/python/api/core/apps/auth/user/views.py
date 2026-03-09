from rest_framework import status
from rest_framework.response import Response
from rest_framework.views import APIView

from ..permissions import IsAdmin
from .serializers import MeSerializer


class MeAPIView(APIView):
  ## TODO: 추후 기본 APIView로 변경 후, IsAuthenticated와 IsAdmin을 함께 사용하도록 변경
  permission_classes = [IsAdmin]

  def get(self, request):
    serializer = MeSerializer(request.user)
    return Response(serializer.data, status=status.HTTP_200_OK)
