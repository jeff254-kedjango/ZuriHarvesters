from django.urls import path
from .views import StaffListCreateView, StaffRetrieveUpdateDeleteView

urlpatterns = [
    path("newsletter/", StaffListCreateView.as_view(), name="staff_list"),
    path("newsletter/<int:pk>/", StaffRetrieveUpdateDeleteView.as_view(), name="staff_detail"),
]