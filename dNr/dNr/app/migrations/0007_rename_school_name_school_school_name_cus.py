# Generated by Django 4.2.6 on 2023-10-17 20:03

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('app', '0006_school'),
    ]

    operations = [
        migrations.RenameField(
            model_name='school',
            old_name='school_name',
            new_name='school_name_cus',
        ),
    ]
