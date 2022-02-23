from django.db import models

# Create your models here.

#Account related models/functionality


""" Example used to verify local database set up,"""
class User(models.Model):
    username = models.CharField(max_length=30)
    firstname = models.CharField(max_length=20)
    lastname = models.CharField(max_length=20)

