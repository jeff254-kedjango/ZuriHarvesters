from django.conf import settings
from django.db import models
from django.utils import timezone


class AutoDateTimeField(models.DateTimeField):
    def pre_save(self, model_instance, add):
        return timezone.now()

class Category(models.Model):
    name = models.CharField(max_length = 50)
    created = models.DateField(default=timezone.now)
    published = AutoDateTimeField(default=timezone.now)

    def __str__(self):
        return self.name
    
    class Meta:
        verbose_name = 'Category'
        verbose_name_plural = 'Categories'
        ordering = ["name"]

class Products(models.Model):
    title = models.CharField(max_length=50)
    price = models.FloatField()
    quantity = models.IntegerField()
    description = models.TextField()
    offer = models.BooleanField(default=False)
    category = models.ForeignKey(Category, on_delete=models.PROTECT, default="N/A")
    img1 = models.ImageField(upload_to='images/')
    img2 = models.ImageField(upload_to='images/',blank=True,null=True)
    img3 = models.ImageField(upload_to='images/',blank=True,null=True)
    img4 = models.ImageField(upload_to='images/',blank=True,null=True)
    advert_video = models.FileField(upload_to='images/',blank=True,null=True)
    created = models.DateField(default=timezone.now)
    published = AutoDateTimeField(default=timezone.now)


    def __str__(self):
        return self.title
    
    class Meta:
        verbose_name = 'Product'
        verbose_name_plural = 'Products'

