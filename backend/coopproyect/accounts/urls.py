from django.urls import path
from rest_framework_simplejwt.views import (
    TokenObtainPairView,
    TokenRefreshView,
    TokenVerifyView,
)
from .views import register_user, user_logout, socio_list_create, prestamo_list_create, seguimiento_list_create

urlpatterns = [
    path('register/', register_user, name='register'),
    path('login/', TokenObtainPairView.as_view(), name='token_obtain_pair'),  # Para obtener tokens
    path('token/refresh/', TokenRefreshView.as_view(), name='token_refresh'),  # Para refrescar tokens
    path('token/verify/', TokenVerifyView.as_view(), name='token_verify'),  # Para verificar tokens
    path('logout/', user_logout, name='logout'),
    path('socios/', socio_list_create, name='socio_list_create'),
    path('prestamos/', prestamo_list_create, name='prestamo_list_create'),
    path('seguimientos/', seguimiento_list_create, name='seguimiento_list_create'),
]
