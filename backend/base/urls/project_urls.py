from django.urls import path
from base.views import project_views as views

"""
Handles all URL paths related to projects.
"""

urlpatterns = [
    path("retrieve-projects/", views.retrieveAllProjects),
    path("retrieve-project/<int:id>/", views.retrieveProject)
]
