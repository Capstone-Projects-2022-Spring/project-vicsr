from django.urls import path
from .views import DocumentView

urlpatterns = [
    path(r'^upload/$', DocumentView.as_view(), name='upload'),

]
