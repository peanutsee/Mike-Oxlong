# Generated by Django 4.0.2 on 2022-02-26 10:23

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('base', '0003_project_project_hard_skills'),
    ]

    operations = [
        migrations.AddField(
            model_name='internprofile',
            name='education',
            field=models.TextField(default='Kindergarten'),
        ),
    ]
