from rest_framework import serializers
from .models import Blog

class BlogSerializer(serializers.ModelSerializer):
    class Meta:
        model = Blog
        fields = [
            "id",'author','name',"img1","paragraph1","paragraph2","paragraph3","paragraph4",
            "paragraph5","created","published", 
        ]       