from django.conf import settings
from django.db import models
from django.utils import timezone


class AutoDateTimeField(models.DateTimeField):
    def pre_save(self, model_instance, add):
        return timezone.now()
    

class Testimonial (models.Model):
    name = models.CharField( max_length = 50 )
    img1 = models.ImageField(upload_to='images/')
    message = models.TextField( max_length = 150 )
    created = models.DateField(default=timezone.now)
    published = AutoDateTimeField(default=timezone.now)

    def __str__(self):
        return self.name
    
    class Meta:
        verbose_name = 'Testimonial'
        verbose_name_plural = 'Testimonials'
        ordering = ["name"]   
