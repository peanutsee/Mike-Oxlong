from django.urls import path
from base.views import intern_views as views

"""
Handles all URL paths related to interns.
"""

urlpatterns = [
    path('intern-dashboard/', views.getDashboard),
    path('retrieve-internships/', views.retrieveInternships),
    path('retrieve-projects/', views.retrieveProjects),
    path('retrieve-courses/', views.retrieveCourses),
    path('enroll-internship/<int:pk>/', views.enrollInternship),
    path('enroll-project/<int:pk>/', views.enrollProject),
]
