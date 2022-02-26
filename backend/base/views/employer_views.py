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
@permission_classes([IsAuthenticated])
def getDashboard(request):
    result = {'internships': [], 'projects': []}
    employer_profile = EmployerProfile.objects.filter(user=request.user)[0]

    # Internships
    internships = Internship.objects.filter(internship_employer=employer_profile)
    internships_serialized = InternshipSerializer(internships, many=True)
    internships_data = internships_serialized.data
    for internship in internships_data:
        result['internships'].append(internship)
        intern_list = internship['enrolled_intern']
        internship['enrolled_intern'] = []
        for intern in intern_list:
            user = User.objects.get(id=intern)
            try:
                intern_profile = InternProfile.objects.get(user=user)
                intern_profile_serialized = InternProfileSerializer(intern_profile, many=False)
                intern_profile_data = intern_profile_serialized.data
                user_serialized = UserSerializer(user)
                user_data = user_serialized.data
                user_data.update(intern_profile_data)
                internship['enrolled_intern'].append(user_data)
            except:
                pass

    # Projects
    projects = Project.objects.filter(project_employer=employer_profile)
    projects_serialized = ProjectSerializer(projects, many=True)
    projects_data = projects_serialized.data
    for project in projects_data:
        result['projects'].append(project)
        intern_list = project['enrolled_intern']
        project['enrolled_intern'] = []
        for intern in intern_list:
            try:
                user = User.objects.get(id=intern)
                intern_profile = InternProfile.objects.get(user=user)
                intern_profile_serialized = InternProfileSerializer(intern_profile, many=False)
                intern_profile_data = intern_profile_serialized.data
                user_serialized = UserSerializer(user)
                user_data = user_serialized.data
                user_data.update(intern_profile_data)
                project['enrolled_intern'].append(user_data)
            except:
                pass

    return Response(result, status=status.HTTP_200_OK)