
# Create your models here.
# using django user model, don't need to create own

# Account related models/functionality


""" Example used to verify local database set up,"""
"""class User(models.Model):
    username = models.CharField(max_length=30)
    email = models.CharField(max_length=30)
    firstname = models.CharField(max_length=20)
    lastname = models.CharField(max_length=20)

"""

from django.contrib.auth.models import AbstractUser
from django.db import models


class User(AbstractUser):
    # Any extra fields would go here
    class Meta:
        db_table = 'auth_user'

    def __str__(self):
        return self.email