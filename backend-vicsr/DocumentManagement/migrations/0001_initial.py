# Generated by Django 4.0.2 on 2022-03-13 23:12

import backend.storage_backends
from django.conf import settings
from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    initial = True

    dependencies = [
        migrations.swappable_dependency(settings.AUTH_USER_MODEL),
    ]

    operations = [
        migrations.CreateModel(
            name='Document',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('filename', models.CharField(max_length=30)),
                ('file', models.FileField(storage=backend.storage_backends.MediaStorage(), upload_to='')),
                ('date_added', models.DateTimeField(auto_now_add=True)),
                ('mode', models.CharField(choices=[('TRL', 'Translation'), ('DEF', 'Definition')], max_length=3)),
                ('language', models.CharField(max_length=50)),
                ('trans_language', models.CharField(blank=True, max_length=50)),
                ('owner_id', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to=settings.AUTH_USER_MODEL)),
            ],
        ),
    ]
