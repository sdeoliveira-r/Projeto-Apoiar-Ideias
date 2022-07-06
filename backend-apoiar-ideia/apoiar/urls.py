from django.urls import path

from .views import ApoiarList

urlpatterns = [
    path("", ApoiarList.as_view()),
]
