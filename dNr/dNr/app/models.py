from django.db import models

# Create your models here.

class React(models.Model):
    employee = models.CharField(max_length=30)
    department = models.CharField(max_length=200)
    time = models.TimeField(auto_now=True)
    manager = models.CharField(max_length=200, default="Vagamie")



