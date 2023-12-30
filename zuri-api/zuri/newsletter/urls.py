from django.urls import path
from .views import NewsletterListCreateView, NewsletterRetrieveUpdateDeleteView

urlpatterns = [
    path("newsletter/", NewsletterListCreateView.as_view(), name="newsletter_list"),
    path("newsletter/<int:pk>/", NewsletterRetrieveUpdateDeleteView.as_view(), name="newsletter_detail"),
]