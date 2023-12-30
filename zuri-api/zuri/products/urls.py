from django.urls import path
from .views import CategoryListCreateView, ProductsListCreateView, ProductsRetrieveUpdateDeleteView

urlpatterns = [
    path("products/", ProductsListCreateView.as_view(),name="product_list"),
    path("products/<int:pk>/", ProductsRetrieveUpdateDeleteView.as_view(), name="product_details"),
    path("category/", CategoryListCreateView.as_view(), name="category_list"),
]