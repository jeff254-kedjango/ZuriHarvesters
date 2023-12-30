from django.contrib import admin
from .models import Staff


class StaffAdmin(admin.ModelAdmin):
    list_display = ("name","position","created","published",)
    list_filter = ("position","created","published",)


admin.site.register ( Staff, StaffAdmin )