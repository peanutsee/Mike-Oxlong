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

@api_view(['POST'])
@permission_classes([IsAuthenticated])
def createInternship(request):
    data = request.data
    employer_profile = EmployerProfile.objects.filter(user=request.user)[0]
    internship = Internship.objects.create(
        internship_employer=employer_profile,
        internship_title=data['internship_title'],
        internship_description=data['internship_description'],
        internship_compensation=data['internship_compensation'],
        internship_location=data['internship_location'],
        internship_hard_skills=data['internship_hard_skills'],
        internship_soft_skills=data['internship_soft_skills'],
        internship_learning_outcome=data['internship_learning_outcome'],
        internship_industry=data['internship_industry'],
    )
    internship_serialized = InternshipSerializer(internship, many=False)
    internship_data = internship_serialized.data
    return Response(internship_data, status=status.HTTP_200_OK)