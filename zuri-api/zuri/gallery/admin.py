from django.contrib import admin
from .models import Gallery

class GalleryAdmin(admin.ModelAdmin):
    list_display = ("title","created","published",)
    list_filter = ("created","published",)


admin.site.register( Gallery, GalleryAdmin)