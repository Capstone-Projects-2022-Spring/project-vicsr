from django.db import models
from django.contrib.auth.models import User
from backend.DocumentManagement.models import Document

# Create your models here.

#Vocabulary Management related models/functionality:
#Document Preprocessing
    #List of words in Doc
#Highlight exraction
#Vocabulary
#Study Set


class StudySet(models.Model):
    owner_id = models.ForeignKey(User, on_delete=models.CASCADE)
    generated_by = models.ForeignKey(Document, on_delete=models.CASCADE, null=True)
    title = models.CharField(max_length=30)
    date_added = models.DateTimeField(auto_now_add=True)

