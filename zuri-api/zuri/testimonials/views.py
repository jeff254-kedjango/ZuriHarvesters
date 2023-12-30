from django.shortcuts import get_object_or_404
from rest_framework import generics, mixins, status
from rest_framework.decorators import APIView, api_view, permission_classes
from rest_framework.permissions import (
    IsAuthenticated,
    IsAdminUser,
    AllowAny,
    IsAuthenticatedOrReadOnly,
)
from django.shortcuts import render
from rest_framework.request import Request
from rest_framework.response import Response
from .models import Testimonial
from .serializers import TestimonialSerializer
from .permissions import AuthorOrReadOnly, ReadOnly
from rest_framework.pagination import PageNumberPagination
from django_filters.rest_framework import DjangoFilterBackend
from rest_framework.filters import SearchFilter

class TestimonialListCreateView(generics.GenericAPIView, mixins.ListModelMixin, mixins.CreateModelMixin):
    serializer_class = TestimonialSerializer
    permission_classes = [IsAuthenticatedOrReadOnly]
    filter_backends = [SearchFilter,DjangoFilterBackend]
    filterset_fields = ["name"]
    search_fields = ["name"]
    queryset = Testimonial.objects.all()


    def perform_create(self, serializer):
        user = self.request.user
        serializer.save(author=user)
        return super().perform_create(serializer)
    
    def get(self,request: Request, *args,**kwargs):
        return self.list(request, *args,**kwargs)
    
    def post(self,request: Request, args, **kwargs):
        return self.create(request, *args,**kwargs)


class TestimonialRetrieveUpdateDeleteView(
    generics.GenericAPIView,
    mixins.RetrieveModelMixin,
    mixins.UpdateModelMixin,
    mixins.DestroyModelMixin,
):
    serializer_class = TestimonialSerializer
    queryset = Testimonial.objects.all()
    permission_classes = [AuthorOrReadOnly]

    def get(self, request: Request, *args, **kwargs):
        return self.retrieve(request, *args, **kwargs)

    def put(self, request: Request, *args, **kwargs):
        return self.update(request, *args, **kwargs)

    def delete(self, request: Request, *args, **kwargs):
        return self.destroy(request, *args, **kwargs)