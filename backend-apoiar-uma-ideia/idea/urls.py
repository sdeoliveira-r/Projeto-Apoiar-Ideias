from django.urls import path

from .views import IdeaList

urlpatterns = [
    path("", IdeaList.as_view()),
]
