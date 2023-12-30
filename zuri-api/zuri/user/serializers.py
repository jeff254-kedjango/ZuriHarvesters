from rest_framework import serializers
from .models import User
from rest_framework.validators import ValidationError
from rest_framework.authtoken.models import Token

class SignUpSerializer(serializers.ModelSerializer):
    email = serializers.EmailField(max_length=80)
    firstname = serializers.CharField(max_length=45)
    lastname = serializers.CharField(max_length=45)
    password = serializers.CharField(min_length=8, write_only=True)

    class Meta:
        model = User
        fields = ["email", "firstname", "lastname","password"]

    
    def validate(self, attrs):

        email_exists=User.objects.filter(email=attrs['email']).exists()

        if email_exists:
            raise ValidationError("Email is already taken")
        
        return super().validate(attrs)


    def create(self, validated_data):
        password = validated_data.pop("password")

        user=super().create(validated_data)

        user.set_password(password)

        user.save()

        Token.objects.create(user=user)

        return user
    

class CurrentUserPostsSerializer(serializers.ModelSerializer):

    class Meta:
        model = User
        fields = ["id","firstname","lastname","email"]

