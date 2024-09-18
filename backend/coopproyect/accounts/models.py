from django.db import models
from django.contrib.auth.models import AbstractUser
from decimal import Decimal

class CustomUser(AbstractUser):
    email = models.EmailField(unique=True)
    nombre = models.CharField(max_length=100)
    apellido = models.CharField(max_length=100)
    rol = models.CharField(max_length=20, choices=[('administrador', 'Administrador'), ('agente', 'Agente')])

    def __str__(self):
        return self.username

class Socio(models.Model):
    nombre = models.CharField(max_length=100)
    correo_electronico = models.EmailField(unique=True)
    telefono = models.CharField(max_length=15)
    direccion = models.CharField(max_length=255)
    fecha_registro = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return self.nombre

class Prestamo(models.Model):
    socio = models.ForeignKey(Socio, on_delete=models.CASCADE, related_name="prestamos")
    monto = models.DecimalField(max_digits=10, decimal_places=2)
    tasa_interes = models.DecimalField(max_digits=5, decimal_places=2)
    duracion = models.IntegerField(help_text="Duración en meses")
    fecha_creacion = models.DateTimeField(auto_now_add=True)

    @property
    def total_a_pagar(self):
        """Cálculo de total a pagar con intereses."""
        monto_decimal = self.monto
        tasa_interes_decimal = Decimal(self.tasa_interes)
        duracion_decimal = Decimal(self.duracion)
        meses_decimal = Decimal('12.00')  # Convertir 12.00 a Decimal

        # Cálculo
        interes = monto_decimal * (tasa_interes_decimal / Decimal('100.00'))
        total_intereses = interes * (duracion_decimal / meses_decimal)
        total = monto_decimal + total_intereses

        return total

    def __str__(self):
        return f'Préstamo {self.id} - {self.socio.nombre}'

class Seguimiento(models.Model):
    prestamo = models.ForeignKey(Prestamo, on_delete=models.CASCADE, related_name="seguimientos")
    fecha = models.DateTimeField(auto_now_add=True)
    estado = models.CharField(max_length=50)
    notas = models.TextField(blank=True, null=True)

    def __str__(self):
        return f'Seguimiento {self.id} - Préstamo {self.prestamo.id}'
