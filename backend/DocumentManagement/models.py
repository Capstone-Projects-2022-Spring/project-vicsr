from django.db import models
from django.contrib.auth.models import User


# Create your models here.

# Document management related models/functionality:
# Document list
# Document
# Deck List

class Document(models.Model):
    owner_id = models.ForeignKey(User, on_delete=models.CASCADE)
    filename = models.CharField(max_length=30)
    date_added = models.DateTimeField(auto_now_add=True)
    #need to review file further, and need to check how to get file size
    file = models.FileField()
    size = models.IntegerField()
    language = models.CharField(max_length=50)


""" commenting out -- not relevant for milestone 1 and may need reworking 
leaving as starting point when returning

# may need to move this to vocab management
class DocumentWords(models.Model):
    generated_by = models.ForeignKey(Document, on_delete=models.CASCADE)
    word = models.CharField(max_length=65)
    ##coordinates from tesseract - may want to change
    left = models.IntegerField()
    top = models.IntegerField()
    width = models.IntegerField()
    height = models.IntegerField()
    """


# class DocumentList(models.Model):
