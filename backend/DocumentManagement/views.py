from django.shortcuts import render
from rest_framework import viewsets
from .models import Document

# Create your views here.
class DocumentViewSet(viewsets.ModelViewSet):

    ##need serializer and related functionality still (add, delete, rename, etc.)
    ##need to also figure out how to just return specific users documents


    ##this basically returns the document list
    queryset = Document.objects.all()
