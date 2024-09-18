import React, { useEffect, useState } from 'react';
import axiosInstance from '../../../axiosConfig';
import NavBar from '../NavBar';

const SociosPage = () => {
  const [socios, setSocios] = useState([]);
  const [formData, setFormData] = useState({
    nombre: '',
    correo_electronico: '',
    telefono: '',
    direccion: '',
  });

  useEffect(() => {
    fetchSocios();
  }, []);

  const fetchSocios = async () => {
    try {
      const response = await axiosInstance.get('/socios/');
      setSocios(response.data);
    } catch (error) {
      console.error('Error al cargar socios', error);
    }
  };

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axiosInstance.post('/socios/', formData);
      fetchSocios();
    } catch (error) {
      console.error('Error al crear socio', error);
    }
  };

  return (
    <div>
      <NavBar/>
      <div className="container mt-5">
        <h1 className="titulo">Gestión de Socios</h1>

        <div className="row justify-content-center">

          <div className="col-lg-5 col-md-6">
            <div className="tarjeta">
              <h5>Lista de Socios</h5>
              <ul className="list-group">
                {socios.map((socio, index) => (
                  <li className="list-group-item" key={socio.id}>
                    {index + 1}. {socio.nombre} - {socio.correo_electronico}
                  </li>
                ))}
              </ul>
            </div>
          </div>


          <div className="col-lg-5 col-md-6">
            <div className="tarjeta">
              <h5>Agregar Nuevo Socio</h5>
              <form onSubmit={handleSubmit}>
                <div className="mb-3">
                  <label for="nombre" className="form-label">Nombre Completo</label>
                  <input
                    type="text"
                    className="form-control"
                    id="nombre"
                    placeholder="Ingrese nombre completo"
                    name="nombre"
                    value={formData.nombre}
                    onChange={handleInputChange} />
                </div>
                <div className="mb-3">
                  <label for="email" className="form-label">Correo Electrónico</label>
                  <input
                    type="email"
                    className="form-control"
                    id="email"
                    placeholder="Ingrese correo electrónico"
                    name="correo_electronico"
                    value={formData.correo_electronico}
                    onChange={handleInputChange} />
                </div>
                <div className="mb-3">
                  <label for="telefono" className="form-label">Teléfono</label>
                  <input
                    type="tel"
                    className="form-control"
                    id="telefono"
                    placeholder="Ingrese número de teléfono"
                    name="telefono"
                    value={formData.telefono}
                    onChange={handleInputChange} />
                </div>
                <div className="mb-3">
                  <label for="direccion" className="form-label">Dirección</label>
                  <input
                    type="text"
                    className="form-control"
                    id="direccion"
                    placeholder="Ingrese dirección"
                    name="direccion"
                    value={formData.direccion}
                    onChange={handleInputChange} />
                </div>
                <button type="submit" className="btn-registrar">Crear Socio</button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SociosPage;
