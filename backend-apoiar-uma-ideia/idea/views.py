from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework.status import (
    HTTP_200_OK,
    HTTP_201_CREATED,
    HTTP_400_BAD_REQUEST,
    HTTP_204_NO_CONTENT,
)

from .models import Idea
from .serializers import IdeaSerializer


class IdeaList(APIView):
    def get(self, request, format=None):
        ideias = Idea.objects.all()
        serializer = IdeaSerializer(ideias, many=True)
        return Response(serializer.data, status=HTTP_200_OK)

    def post(self, request, format=None):
        serializer = IdeaSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=HTTP_201_CREATED)

        return Response(
            {
                "message": "Houveram erros de validação",
                "errors": serializer.errors,
            },
            status=HTTP_400_BAD_REQUEST,
        )

    def delete(self, request, format=None):
        serializerDelete = IdeaSerializer(data=request.data)
        if serializerDelete.is_valid():
            serializerDelete.delete()

        return Response({"message": f"Você deletou uma ideia"})
