from rest_framework import serializers
from .models import Gallery

class GallerySerializer(serializers.ModelSerializer):
    class Meta:
        model = Gallery
        fields = [
            "id",'title','description',"img1","img2","img3",
            "img4","advert_video","created","published", 
        ]       