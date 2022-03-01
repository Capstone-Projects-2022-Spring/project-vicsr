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


class DocumentWords(models.Model):
    generated_by = models.ForeignKey(Document, on_delete=models.CASCADE)
    word = models.CharField(max_length=65)


#class StudySet(models.Model):
   # generated_by = models.ForeignKey(Document, on_delete=models.CASCADE, null=True)

# class DocumentList(models.Model):
