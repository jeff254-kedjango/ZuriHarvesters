from django.urls import path
from .views import BlogListCreateView,BlogRetrieveUpdateDeleteView

urlpatterns = [
    path("blog/", BlogListCreateView.as_view(), name="blog_list"),
    path("blog/<int:pk>/", BlogRetrieveUpdateDeleteView.as_view(), name="blog_detail"),
]