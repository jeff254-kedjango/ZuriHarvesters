from django.contrib import admin
from .models import Blog

class BlogAdmin(admin.ModelAdmin):
    list_display = ("name","created","published",)
    list_filter = ("created","published",)


admin.site.register( Blog, BlogAdmin)