# books/models.py
from django.db import models

class Book(models.Model):
    title = models.CharField(max_length=200)
    price = models.DecimalField(max_digits=6, decimal_places=2)
    image_url = models.URLField()
    stock = models.BooleanField(default=True)

    def __str__(self):
        return self.title

