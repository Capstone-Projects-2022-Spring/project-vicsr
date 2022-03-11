from django.db import models
from django.contrib.auth.models import User
from backend.storage_backends import MediaStorage


# Create your models here.

# Document management related models/functionality:
# Document list
# Document
# Deck List

def user_directory_path(instance, filename):
    # file will be uploaded (hpoefully) to ext_storage/user_<id>/<filename>
    return 'user_{0}/{1}'.format(instance.user.id, filename)

class Document(models.Model):
    MODE_CHOICES = [
        ('TRL', 'Translation'),
        ('DEF', 'Definition')
    ]
    owner_id = models.ForeignKey(User, on_delete=models.CASCADE)
    filename = models.CharField(max_length=30)
    # need to review file further, and need to check how to get file size
    file = models.FileField(storage=MediaStorage)
    # image = models.ImageField(upload_to='images/', null=True, blank=True)
    size = models.IntegerField()
    date_added = models.DateTimeField(auto_now_add=True)
    mode = models.CharField(max_length=3, choices=MODE_CHOICES)
    language = models.CharField(max_length=50)
    trans_language = models.CharField(max_length=50, blank=True)

    def __str__(self):
        return self.filename







