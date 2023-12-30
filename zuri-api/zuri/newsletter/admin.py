from django.contrib import admin
from .models import Newsletter


class NewsletterAdmin(admin.ModelAdmin):
    list_display = ("name","created","published",)
    list_filter = ("created","published",)


admin.site.register ( Newsletter, NewsletterAdmin )