from django.contrib.auth.hashers import make_password
from django.core.mail import EmailMultiAlternatives
from rest_framework import status
from rest_framework.decorators import api_view, permission_classes
from rest_framework.permissions import IsAuthenticated
from rest_framework.response import Response
from rest_framework_simplejwt.serializers import TokenObtainPairSerializer
from rest_framework_simplejwt.views import TokenObtainPairView
from ..serializers import *

@api_view(['GET'])
def retrieveAllProjects(request):
    projects = Project.objects.all()
    projects_serialized = ProjectSerializer(projects, many=True)
    projects_data = projects_serialized.data
    return Response(projects_data)

@api_view(['GET'])
def retrieveProject(request, pk):
    project = Project.objects.filter(id=pk)
    project_serialized = ProjectSerializer(project, many=False)
    project_data = project_serialized.data
    return Response(project_data)