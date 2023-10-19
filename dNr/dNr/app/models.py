from django.db import models
from rest_framework.response import Response
from rest_framework.decorators import api_view
# Create your models here.

class React(models.Model):
    employee = models.CharField(max_length=30)
    department = models.CharField(max_length=200)
    time = models.TimeField(auto_now=True)
    manager = models.CharField(max_length=200, default="Vagamie")




class School(models.Model):
    name = models.CharField(max_length=20)
    school_name = models.CharField(max_length=400)
    todays_date = models.DateField(auto_now=True)
    

    

