# Generated by Django 4.0.2 on 2022-02-26 00:08

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('base', '0001_initial'),
    ]

    operations = [
        migrations.AddField(
            model_name='employerprofile',
            name='is_intern',
            field=models.BooleanField(default=False),
        ),
        migrations.AddField(
            model_name='internprofile',
            name='is_intern',
            field=models.BooleanField(default=True),
        ),
    ]
