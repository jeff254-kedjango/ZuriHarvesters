from django.conf import settings
from django.db import models
from django.utils import timezone


class AutoDateTimeField(models.DateTimeField):
    def pre_save(self, model_instance, add):
        return timezone.now()
    

class Gallery(models.Model):
    title = models.CharField(max_length=120)
    description = models.TextField()
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
        verbose_name = 'Gallery'
        verbose_name_plural = 'Gallery'