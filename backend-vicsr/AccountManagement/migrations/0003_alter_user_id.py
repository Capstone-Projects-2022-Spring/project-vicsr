# Generated by Django 4.0.2 on 2022-03-13 23:12

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('AccountManagement', '0002_auto_20220311_2312'),
    ]

    operations = [
        migrations.AlterField(
            model_name='user',
            name='id',
            field=models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID'),
        ),
    ]
