import React, { useState } from 'react';
import axiosInstance from '../../../axiosConfig';
import { useNavigate } from 'react-router-dom';
import NavBar from '../NavBar';

const RegisterPage = () => {
  const [formData, setFormData] = useState({
    username: '',
    email: '',
    nombre: '',
    apellido: '',
    rol: 'agente',  // Valor por defecto
    password: '',
    confirmarPassword: '',
  });

  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (formData.password !== formData.confirmarPassword) {
      setError('Las contraseñas no coinciden');
      return;
    }

    const { username, email, nombre, apellido, rol, password } = formData;

    try {
      await axiosInstance.post('/register/', {
        username,
        email,
        nombre,
        apellido,
        rol: 'administrador',
        password,
        confirmar_password: formData.confirmarPassword,
      });

      // Redirigir al usuario al inicio de sesión después del registro exitoso
      navigate('/login');
    } catch (error) {
      setError('Error al registrar usuario. Inténtalo de nuevo.');
      console.error('Error al registrar usuario:', error);
    }
  };

  return (

    <div>
      <NavBar />
      <div className="registro-container mt-5">
        <div className="registro-card">

          <div className="right-section">
            <h2 className="titulo">Registro de Usuario</h2>
            <form onSubmit={handleSubmit}>
              <div className="row mb-3">
                <div className="col-md-6">
                  <label for="nombre" className="form-label"><i className="bi bi-person-fill"></i> Nombres</label>
                  <input
                    type="text"
                    className="form-control"
                    id="nombre"
                    placeholder="Ej: Juan"
                    name="nombre"
                    value={formData.nombre}
                    onChange={handleInputChange}
                    required />
                </div>
                <div className="col-md-6">
                  <label for="apellido" className="form-label"><i className="bi bi-person-fill"></i> Apellidos</label>
                  <input
                    type="text"
                    className="form-control"
                    id="apellido"
                    placeholder="Ej: Pérez"
                    name="apellido"
                    value={formData.apellido}
                    onChange={handleInputChange}
                    required />
                </div>
              </div>

              <div className="mb-3">
                <label for="cedula" className="form-label"><i className="bi bi-id-card-fill"></i> Nombre Usuario</label>
                <input 
                  type="text" 
                  className="form-control" 
                  id="cedula" 
                  placeholder="Ej:Perez01"
                  name="username"
                  value={formData.username}
                  onChange={handleInputChange}
                  required />
              </div>

              <div className="mb-3">
                <label for="email" className="form-label"><i className="bi bi-envelope-fill"></i> Correo Electrónico</label>
                <input
                  type="email"
                  className="form-control"
                  id="email"
                  placeholder="Ej: correo@ejemplo.com"
                  value={formData.email}
                  onChange={handleInputChange}
                  required />
              </div>

              <div className="row mb-3">
                <div className="col-md-6">
                  <label for="password" className="form-label"><i className="bi bi-lock-fill"></i> Contraseña</label>
                  <input
                    type="password"
                    className="form-control"
                    id="password"
                    placeholder="Cree una contraseña"
                    name="password"
                    value={formData.password}
                    onChange={handleInputChange}
                    required />
                </div>
                <div className="col-md-6">
                  <label for="confirmPassword" className="form-label"><i className="bi bi-lock-fill"></i> Confirmar Contraseña</label>
                  <input
                    type="password"
                    className="form-control"
                    id="confirmPassword"
                    placeholder="Repita la contraseña"
                    name="confirmarPassword"
                    value={formData.confirmarPassword}
                    onChange={handleInputChange}
                    required />
                </div>
              </div>

              <div className="text-center">
                <button type="submit" className="btn btn-registrar">Registrar</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RegisterPage;
