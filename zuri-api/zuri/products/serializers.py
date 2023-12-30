from rest_framework import serializers
from .models import Products,Category

class ProductsSerializer(serializers.ModelSerializer):
    class Meta:
        model = Products
        fields= [
            "id",'title',"quantity","price","description","category","img1",
            "img2","img3","img4","advert_video","offer",'created','published'
        ]


class CategorySerializer(serializers.ModelSerializer):
    class Meta:
        model = Category
        fields = [
            "id","name","created","published"
        ]