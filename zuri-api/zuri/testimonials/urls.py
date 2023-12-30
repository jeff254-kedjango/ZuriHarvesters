from django.urls import path
from .views import TestimonialListCreateView, TestimonialRetrieveUpdateDeleteView

urlpatterns = [
    path("gallery/", TestimonialListCreateView.as_view(), name="testimonial_list"),
    path("gallery/<int:pk>/", TestimonialRetrieveUpdateDeleteView.as_view(), name="testimonial_detail"),
]