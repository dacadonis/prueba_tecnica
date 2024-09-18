from rest_framework import serializers
from .models import CustomUser, Socio, Prestamo, Seguimiento

class UserSerializer(serializers.ModelSerializer):
    confirmar_password = serializers.CharField(write_only=True)

    class Meta:
        model = CustomUser
        fields = ['username', 'nombre', 'apellido', 'email', 'password', 'confirmar_password', 'rol']
        extra_kwargs = {'password': {'write_only': True}}

    def validate(self, data):
        if data['password'] != data['confirmar_password']:
            raise serializers.ValidationError("Las contraseñas no coinciden.")
        return data

    def create(self, validated_data):
        validated_data.pop('confirmar_password')
        user = CustomUser(
            username=validated_data['username'],
            email=validated_data['email'],
            nombre=validated_data['nombre'],
            apellido=validated_data['apellido'],
            rol=validated_data['rol'],
        )
        user.set_password(validated_data['password'])
        user.save()
        return user

class SocioSerializer(serializers.ModelSerializer):
    class Meta:
        model = Socio
        fields = ['id', 'nombre', 'correo_electronico', 'telefono', 'direccion', 'fecha_registro']

class PrestamoSerializer(serializers.ModelSerializer):
    total_a_pagar = serializers.DecimalField(max_digits=10, decimal_places=2, read_only=True)

    class Meta:
        model = Prestamo
        fields = ['id', 'socio', 'monto', 'tasa_interes', 'duracion', 'fecha_creacion', 'total_a_pagar']

class SeguimientoSerializer(serializers.ModelSerializer):
    class Meta:
        model = Seguimiento
        fields = ['id', 'prestamo', 'fecha', 'estado', 'notas']
