from django.contrib import admin
from .models import Testimonial

class TestimonialAdmin(admin.ModelAdmin):
    list_display = ("name","created","published",)
    list_filter = ("created","published",)


admin.site.register( Testimonial, TestimonialAdmin )