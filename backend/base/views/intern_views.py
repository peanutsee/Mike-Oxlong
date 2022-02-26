from django.contrib.auth.hashers import make_password
from django.core.mail import EmailMultiAlternatives
from rest_framework import status
from rest_framework.decorators import api_view, permission_classes
from rest_framework.permissions import IsAuthenticated
from rest_framework.response import Response
from rest_framework_simplejwt.serializers import TokenObtainPairSerializer
from rest_framework_simplejwt.views import TokenObtainPairView
from ..serializers import *

# Retrieve Dashboard
@api_view(['GET'])
@permission_classes([IsAuthenticated])
def getDashboard(request):
    result = {'internships': [], 'projects': []}

    # Internships
    internships = Internship.objects.filter(enrolled_intern=request.user)
    internships_serialized = InternshipSerializer(internships, many=True)
    internships_data = internships_serialized.data
    for internship in internships_data:
        result['internships'].append(internship)

    # Projects
    projects = Project.objects.filter(enrolled_intern=request.user)
    projects_serialized = ProjectSerializer(projects, many=True)
    projects_data = projects_serialized.data
    for project in projects_data:
        result['projects'].append(project)

    return Response(result, status=status.HTTP_200_OK)

# Retrieve Internship
@api_view(["GET"])
@permission_classes([IsAuthenticated])
def retrieveInternships(request):
    internships = Internship.objects.all()
    internships_serialized = InternshipSerializer(internships, many=True)
    internships_data = internships_serialized.data

    return Response(internships_data, status=status.HTTP_200_OK)

# Retrieve Projects
@api_view(["GET"])
@permission_classes([IsAuthenticated])
def retrieveProjects(request):
    projects = Project.objects.all()
    projects_serialized = ProjectSerializer(projects, many=True)
    projects_data = projects_serialized.data

    return Response(projects_data, status=status.HTTP_200_OK)

# Retrieve Courses
@api_view(["GET"])
@permission_classes([IsAuthenticated])
def retrieveCourses(request):
    courses = Course.objects.all()
    courses_serialized = CourseSerializer(courses, many=True)
    courses_data = courses_serialized.data

    return Response(courses_data, status=status.HTTP_200_OK)


# Enroll To Internship
@api_view(['PUT'])
def enrollInternship(request, pk):
    internship = Internship.objects.filter(id=pk)[0]
    internship.enrolled_intern.add(request.user.id)
    return Response("Enrolled", status=status.HTTP_200_OK)

# Enroll To Project
@api_view(['PUT'])
def enrollProject(request, pk):
    project = Project.objects.filter(id=pk)[0]
    project.enrolled_intern.add(request.user.id)
    return Response("Enrolled", status=status.HTTP_200_OK)