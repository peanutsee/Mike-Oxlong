from django.contrib import admin
from .models import *

# Register your models here.
@admin.register(InternProfile)
class InternProfileAdmin(admin.ModelAdmin):
    pass

@admin.register(EmployerProfile)
class EmployerProfileAdmin(admin.ModelAdmin):
    pass

@admin.register(Internship)
class InternshipAdmin(admin.ModelAdmin):
    pass

@admin.register(Project)
class ProjectAdmin(admin.ModelAdmin):
    pass

@admin.register(Course)
class CourseAdmin(admin.ModelAdmin):
    pass
