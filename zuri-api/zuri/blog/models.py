from django.conf import settings
from django.db import models
from django.utils import timezone


class AutoDateTimeField(models.DateTimeField):
    def pre_save(self, model_instance, add):
        return timezone.now()
    

class Blog(models.Model):
    author = models.ForeignKey(settings.AUTH_USER_MODEL, on_delete=models.CASCADE)
    name = models.CharField(max_length = 150 )
    img1 = models.ImageField(upload_to='images/')
    paragraph1 = models.TextField( max_length = 700 )
    paragraph2 = models.TextField( max_length = 700 )
    paragraph3 = models.TextField( max_length = 700 )
    paragraph4 = models.TextField( max_length = 700 )
    paragraph5 = models.TextField( max_length = 700 )
    created = models.DateField(default=timezone.now)
    published = AutoDateTimeField(default=timezone.now)

    def __str__(self):
        return self.name
    
    class Meta:
        verbose_name = 'Blog'
        verbose_name_plural = 'Blog'
        ordering = ["name"]   