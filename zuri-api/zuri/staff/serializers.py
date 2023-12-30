from rest_framework import serializers
from .models import Staff

class StaffSerializer(serializers.ModelSerializer):
    class Meta:
        model = Staff
        fields = [
            "id",'author','name',"img1","position","bio","twitter","linkedIn",
            "facebook","instagram","created","published", 
        ]       