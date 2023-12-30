from django.urls import path
from .views import GalleryListCreateView, GalleryRetrieveUpdateDeleteView

urlpatterns = [
    path("gallery/", GalleryListCreateView.as_view(), name="gallery_list"),
    path("gallery/<int:pk>/", GalleryRetrieveUpdateDeleteView.as_view(), name="gallery_detail"),
]