from rest_framework import serializers

from .models import Apoiar
from idea.models import Idea
from idea.serializers import IdeaSerializer


class ApoiarSerializer(serializers.ModelSerializer):
    idea = IdeaSerializer(many=False, read_only=True)
    idea_id = serializers.PrimaryKeyRelatedField(
        queryset=Idea.objects.all(),
        many=False,
        write_only=True,
    )

    class Meta:
        model = Apoiar
        fields = ("id", "email", "valor", "idea", "idea_id")

    def create(self, validated_data):
        validated_data["idea"] = validated_data.pop("idea_id")
        return super().create(validated_data)

    def validate_valor(self, value):
        if value < 3:
            raise serializers.Validation.Error("Requer um valor maior que 0")
        if value > 100:
            raise serializers.Validation.Error("Requer um valor menor que 350")
        return value
