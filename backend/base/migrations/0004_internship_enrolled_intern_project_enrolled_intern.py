# Generated by Django 4.0.2 on 2022-02-26 09:53

from django.conf import settings
from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        migrations.swappable_dependency(settings.AUTH_USER_MODEL),
        ('base', '0003_project_project_hard_skills'),
    ]

    operations = [
        migrations.AddField(
            model_name='internship',
            name='enrolled_intern',
            field=models.ManyToManyField(to=settings.AUTH_USER_MODEL),
        ),
        migrations.AddField(
            model_name='project',
            name='enrolled_intern',
            field=models.ManyToManyField(to=settings.AUTH_USER_MODEL),
        ),
    ]
