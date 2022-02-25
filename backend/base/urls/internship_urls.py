from django.urls import path
from base.views import internship_views as views

"""
Handles all URL paths related to internships.
"""

urlpatterns = [
    path("retrieve-internships/", views.retrieveAllInternships),
    path("retrieve-intern/<int:id>/", views.retrieveInternships)
]
