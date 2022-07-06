from django.db import models


class Idea(models.Model):
    nome = models.CharField(blank=False, null=False, max_length=255, default="")
    historia = models.TextField(blank=False, null=False, default="")
    foto = models.URLField(blank=False, null=False)
