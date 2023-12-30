from django.contrib import admin
from .models import Category,Products

class CategoryAdmin(admin.ModelAdmin):
    list_display = ('name',)
    list_filter = ('name',)


class ProductsAdmin(admin.ModelAdmin):
    list_display = ('title','price','category','published',)
    list_filter = ('offer','category',)

admin.site.register( Category,CategoryAdmin )
admin.site.register( Products, ProductsAdmin )
