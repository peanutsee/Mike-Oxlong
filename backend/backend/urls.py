from django.contrib import admin
from django.urls import path, include
from django.conf import settings
from django.conf.urls.static import static

urlpatterns = [
    path('admin/', admin.site.urls),
    path('api/users/', include('base.urls.users_urls')),
    path('api/internships/', include('base.urls.internship_urls')),
    path('api/employers/', include('base.urls.employer_urls')),
    path('api/interns/', include('base.urls.intern_urls')),
    path('api/projects/', include('base.urls.project_urls')),
]


urlpatterns += static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)
urlpatterns += static(settings.STATIC_URL, document_root=settings.STATIC_ROOT)