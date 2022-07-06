from django.db import models


class Apoiar(models.Model):
    valor = models.DecimalField(
        null=False, blank=False, max_digits=5, decimal_places=2, default=""
    )
    email = models.EmailField(null=False, blank=False, max_length=255, default="")
    idea = models.ForeignKey(to="idea.Idea", null=False, on_delete=models.CASCADE)
