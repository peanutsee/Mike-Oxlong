from django.db import models
from django.contrib.auth.models import User

# ----- USER MODELS -----
class InternProfile(models.Model):
    user = models.OneToOneField(User, on_delete=models.CASCADE, null=True)
    interests = models.TextField()
    skills = models.TextField()
    resume = models.FileField(upload_to='resumes/')
    is_intern = models.BooleanField(default=True
                                    )
    objects = models.manager

    def __str__(self):
        return f"{self.user.username} Profile"

class EmployerProfile(models.Model):
    user = models.OneToOneField(User, on_delete=models.CASCADE, null=True)
    #TODO: Add Fields for Employer
    company_details = models.TextField()
    is_intern = models.BooleanField(default=False)
    objects = models.manager

    def __str__(self):
        return f"{self.user.username} Profile"

class Internship(models.Model):
    internship_employer = models.ForeignKey(EmployerProfile, on_delete=models.CASCADE)
    internship_title = models.CharField(max_length=255, null=True, blank=True)
    internship_description = models.TextField(null=True, blank=True)
    internship_compensation = models.IntegerField(null=True, blank=True)
    internship_location = models.CharField(max_length=255, null=True, blank=True)
    internship_hard_skills = models.CharField(max_length=255, null=True, blank=True)
    internship_soft_skills = models.CharField(max_length=255, null=True, blank=True)
    internship_learning_outcome = models.CharField(max_length=255, null=True, blank=True)
    internship_industry = models.TextField(null=True, blank=True)

    objects = models.Manager()

    def __str__(self):
        return self.internship_title

class Project(models.Model):
    project_employer = models.ForeignKey(EmployerProfile, on_delete=models.CASCADE)
    project_title = models.CharField(max_length=255, null=True, blank=True)
    project_description = models.TextField(null=True, blank=True)
    project_is_mentored = models.BooleanField(default=False)
    project_hard_skills = models.TextField(null=True, blank=False)
    objects = models.Manager()

    def __str__(self):
        return self.project_title