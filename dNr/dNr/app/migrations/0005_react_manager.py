# Generated by Django 4.2.6 on 2023-10-14 20:42

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('app', '0004_react_time'),
    ]

    operations = [
        migrations.AddField(
            model_name='react',
            name='manager',
            field=models.CharField(default='Vagamie', max_length=200),
        ),
    ]
