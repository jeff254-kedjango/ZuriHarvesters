from rest_framework import serializers
from .models import Newsletter

class NewsletterSerializer(serializers.ModelSerializer):
    class Meta:
        model = Newsletter
        fields = [
            "id",'author','name',"img1","paragraph1","paragraph2","paragraph3","paragraph4",
            "paragraph5","created","published", 
        ]       