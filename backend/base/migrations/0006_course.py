# Generated by Django 4.0.2 on 2022-02-26 16:01

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('base', '0005_merge_20220226_1935'),
    ]

    operations = [
        migrations.CreateModel(
            name='Course',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('course_name', models.TextField()),
                ('course_description', models.TextField()),
            ],
        ),
    ]
