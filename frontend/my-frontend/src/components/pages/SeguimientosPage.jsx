import React, { useEffect, useState } from 'react';
import axiosInstance from '../../../axiosConfig';
import NavBar from '../NavBar';

const SeguimientosPage = () => {
  const [seguimientos, setSeguimientos] = useState([]);
  const [formData, setFormData] = useState({
    prestamo: '',
    estado: '',
    notas: '',
  });

  useEffect(() => {
    fetchSeguimientos();
  }, []);

  const fetchSeguimientos = async () => {
    try {
      const response = await axiosInstance.get('/seguimientos/');
      setSeguimientos(response.data);
    } catch (error) {
      console.error('Error al cargar seguimientos', error);
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
      await axiosInstance.post('/seguimientos/', formData);
      fetchSeguimientos();
    } catch (error) {
      console.error('Error al crear seguimiento', error);
    }
  };

  return (
    <div>
      <NavBar />
      <div className="container my-5 py-5">
        <h1 className="mb-4">Lista de Seguimientos</h1>
        <ul id="seguimientos-lista" className="list-group mb-4">
          {seguimientos.map((seguimiento) => (
            <li className="list-group-item" key={seguimiento.id}>
              <strong>Préstamo ID:</strong> {seguimiento.prestamo} - <strong>Estado:</strong> Estado: {seguimiento.estado}
            </li>
          ))}
        </ul>

        <h2 className="mb-3">Crear Nuevo Seguimiento</h2>
        <form id="form-seguimiento" className="mb-3" onSubmit={handleSubmit}>
          <div className="mb-3">
            <label for="prestamoId" className="form-label">Préstamo ID</label>
            <input
              type="text"
              className="form-control"
              id="prestamoId"
              name="prestamo"
              placeholder="ID del Préstamo"
              value={formData.prestamo}
              onChange={handleInputChange} />
          </div>
          <div className="mb-3">
            <label for="estadoSeguimiento" className="form-label">Estado</label>
            <input
              type="text"
              className="form-control"
              id="estadoSeguimiento"
              placeholder="Estado"
              name="estado"
              value={formData.estado}
              onChange={handleInputChange} />
          </div>
          <div className="mb-3">
            <label for="notasSeguimiento" className="form-label">Notas (Opcional)</label>
            <textarea
              className="form-control"
              id="notasSeguimiento"
              rows="3"
              placeholder="Añadir notas..."
              name="notas"
              value={formData.notas}
              onChange={handleInputChange}></textarea>
          </div>
          <button type="submit" className="btn btn-success">Crear Seguimiento</button>
        </form>
      </div>
    </div>
  );
};

export default SeguimientosPage;
