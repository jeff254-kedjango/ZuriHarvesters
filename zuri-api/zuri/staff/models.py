from django.conf import settings
from django.db import models
from django.utils import timezone


class AutoDateTimeField(models.DateTimeField):
    def pre_save(self, model_instance, add):
        return timezone.now()
    

class Staff (models.Model):
    author = models.ForeignKey(settings.AUTH_USER_MODEL, on_delete=models.CASCADE)
    name = models.CharField( max_length = 50 )
    img1 = models.ImageField(upload_to='images/')
    position = models.CharField( blank=True,null=True, max_length = 100)
    bio = models.TextField( max_length = 150 )
    twitter = models.CharField(blank=True,null=True, max_length = 1000)
    facebook = models.CharField(blank=True,null=True, max_length = 1000)
    linkedIn = models.CharField(blank=True,null=True, max_length = 1000)
    instagram = models.CharField(blank=True,null=True, max_length = 1000)
    created = models.DateField(default=timezone.now)
    published = AutoDateTimeField(default=timezone.now)

    def __str__(self):
        return self.name
    
    class Meta:
        verbose_name = 'Staff'
        verbose_name_plural = 'Staff'
        ordering = ["name"]   