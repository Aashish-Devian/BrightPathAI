from django.contrib.auth.models import AbstractUser
from django.db import models
from djongo import models

class CustomUser(AbstractUser):
    email = models.EmailField(unique=True)

class User(models.Model):
    username = models.CharField(max_length=100, unique=True)
    email = models.EmailField(unique=True)
    password = models.CharField(max_length=128)
    created_at = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return self.username

class Step(models.Model):
    title = models.CharField(max_length=200)
    description = models.TextField()
    deadline = models.DateField()

    class Meta:
        abstract = True

class Roadmap(models.Model):
    user = models.ForeignKey(User, on_delete=models.CASCADE)
    title = models.CharField(max_length=200)
    steps = models.ArrayField(
        model_container=Step
    )
    created_at = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return self.title
