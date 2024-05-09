from django.db import models

# Create your models here.
class Student(models.Model):
    name = models.CharField(max_length = 100)
    sap_id = models.IntegerField()
    email = models.CharField(max_length = 100)
    mobile = models.IntegerField()
    address = models.CharField(max_length = 1000)