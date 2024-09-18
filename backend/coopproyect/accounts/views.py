from rest_framework import status
from rest_framework.response import Response
from rest_framework.decorators import api_view, permission_classes
from rest_framework.permissions import IsAuthenticated
from .serializers import UserSerializer, SocioSerializer, PrestamoSerializer, SeguimientoSerializer
from .models import CustomUser, Socio, Prestamo, Seguimiento
from rest_framework_simplejwt.tokens import RefreshToken

@api_view(['POST'])
def register_user(request):
    serializer = UserSerializer(data=request.data)
    if serializer.is_valid():
        if CustomUser.objects.filter(email=serializer.validated_data['email']).exists():
            return Response({'error': 'El correo electrónico ya está en uso.'}, status=status.HTTP_400_BAD_REQUEST)
        serializer.save()
        return Response(serializer.data, status=status.HTTP_201_CREATED)
    return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

@api_view(['POST'])
@permission_classes([IsAuthenticated])
def user_logout(request):
    try:
        refresh_token = request.data["refresh"]
        token = RefreshToken(refresh_token)
        token.blacklist()
        return Response({"message": "Sesión cerrada con éxito."}, status=status.HTTP_200_OK)
    except Exception as e:
        return Response({"error": str(e)}, status=status.HTTP_400_BAD_REQUEST)

@api_view(['GET', 'POST'])
@permission_classes([IsAuthenticated])
def socio_list_create(request):
    if request.method == 'GET':
        socios = Socio.objects.all()
        serializer = SocioSerializer(socios, many=True)
        return Response(serializer.data)
    elif request.method == 'POST':
        serializer = SocioSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

@api_view(['GET', 'POST'])
@permission_classes([IsAuthenticated])
def prestamo_list_create(request):
    if request.method == 'GET':
        prestamos = Prestamo.objects.all()
        serializer = PrestamoSerializer(prestamos, many=True)
        return Response(serializer.data)
    elif request.method == 'POST':
        serializer = PrestamoSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

@api_view(['GET', 'POST'])
@permission_classes([IsAuthenticated])
def seguimiento_list_create(request):
    if request.method == 'GET':
        seguimientos = Seguimiento.objects.all()
        serializer = SeguimientoSerializer(seguimientos, many=True)
        return Response(serializer.data)
    elif request.method == 'POST':
        serializer = SeguimientoSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
