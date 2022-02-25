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
def retrieveAllInternships(request):
    internships = Internship.objects.all()
    internships_serialized = InternshipSerializer(internships, many=True)
    internships_data = internships_serialized.data
    return Response(internships_data)

@api_view(['GET'])
def retrieveInternships(request, pk):
    internship = Internship.objects.filter(id=pk)
    internship_serialized = InternshipSerializer(internship, many=False)
    internship_data = internship_serialized.data
    return Response(internship_data)