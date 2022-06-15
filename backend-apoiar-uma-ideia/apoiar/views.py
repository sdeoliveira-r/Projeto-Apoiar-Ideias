from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework.status import HTTP_200_OK, HTTP_201_CREATED, HTTP_400_BAD_REQUEST

from .models import Apoiar
from .serializers import ApoiarSerializer
from .email_service import enviar_email_confirmacao


class ApoiarList(APIView):
    def get(self, request, format=None):
        apoios = Apoiar.objects.all()
        serializer = ApoiarSerializer(apoios, many=True)
        return Response(serializer.data, status=HTTP_200_OK)

    def post(self, request, format=None):
        serializer = ApoiarSerializer(data=request.data)
        if serializer.is_valid():
            apoios = serializer.save()
            enviar_email_confirmacao(apoios)

            return Response(serializer.data, status=HTTP_201_CREATED)
        return Response(
            {
                "message": "Houveram erros de validação",
                "errors": serializer.errors,
            },
            status=HTTP_400_BAD_REQUEST,
        )
