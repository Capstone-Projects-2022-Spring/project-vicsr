from django.shortcuts import render
from rest_framework import viewsets
from .models import Document
from .serializers import DocumentSerializer
from django.core.files.storage import FileSystemStorage


# Create your views here.
class DocumentViewSet(viewsets.ModelViewSet):

    # need serializer and related functionality still (add, delete, rename, etc.)
    # need to also figure out how to just return specific users documents

    serializer_class = DocumentSerializer

    # basically returns the document list
    queryset = Document.objects.all()


def upload(request):
    if request.method == 'POST':
        # the document name from the front end will go in the brackets
        uploaded_file = request.FILES['']
        print("File name: " + uploaded_file.name + ", Size: " + uploaded_file.size)
        fs = FileSystemStorage()
        fs.save(uploaded_file.name, uploaded_file)
    # return render(request, 'App.js')


def document_list(request):
    documents = Document.objects.all()

    # this can pass document lists to the front end I believe
    # return render(request, "App.js", {'documents: ', documents})
