import React, { useEffect, useState } from 'react';
import axiosInstance from '../../../axiosConfig';
import NavBar from '../NavBar';

const PrestamosPage = () => {
  const [prestamos, setPrestamos] = useState([]);
  const [formData, setFormData] = useState({
    socio: '',
    monto: '',
    tasa_interes: '',
    duracion: '',
  });

  useEffect(() => {
    fetchPrestamos();
  }, []);

  const fetchPrestamos = async () => {
    try {
      const response = await axiosInstance.get('/prestamos/');
      setPrestamos(response.data);
    } catch (error) {
      console.error('Error al cargar préstamos', error);
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
      await axiosInstance.post('/prestamos/', formData);
      fetchPrestamos();
    } catch (error) {
      console.error('Error al crear préstamo', error);
    }
  };

  return (
    <div>
      <NavBar />
      <div className="container my-5 pt-5">
        <div className="row">

          <div className="col-lg-6 mb-3">
            <div className="card card-custom">
              <div className="card-header-custom">Lista de Préstamos</div>
              <div className="card-body">
                <ul className="list-group">
                  {prestamos.map((prestamo) => (
                    <li className="list-group-item" key={prestamo.id}>
                       {prestamo.socio} - <strong>Monto:</strong> ${prestamo.monto} - <strong>Total a Pagar:</strong> ${prestamo.total_a_pagar}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>


          <div className="col-lg-6 mb-3">
            <div className="card card-custom">
              <div className="card-header-custom">Crear Nuevo Préstamo</div>
              <div className="card-body">
                <form onSubmit={handleSubmit}>
                  <div className="mb-3">
                    <label for="socioId" className="form-label">ID del Socio</label>
                    <input
                      type="text"
                      className="form-control"
                      id="socioId"
                      name="socio"
                      placeholder="ID del Socio"
                      value={formData.socio}
                      onChange={handleInputChange} />
                  </div>
                  <div className="mb-3">
                    <label for="montoPrestamo" className="form-label">Monto del Préstamo</label>
                    <input
                      type="number"
                      className="form-control"
                      id="montoPrestamo"
                      placeholder="Monto"
                      name='monto'
                      value={formData.monto}
                      onChange={handleInputChange}
                    />
                  </div>
                  <div className="mb-3">
                    <label for="tasaInteres" className="form-label">Tasa de Interés (%)</label>
                    <input
                      type="number"
                      className="form-control"
                      id="tasaInteres"
                      name="tasa_interes"
                      placeholder="Tasa de Interés"
                      value={formData.tasa_interes}
                      onChange={handleInputChange}
                    />
                  </div>
                  <div className="mb-3">
                    <label for="duracionMeses" className="form-label">Duración (meses)</label>
                    <input
                      type="number"
                      className="form-control"
                      id="duracionMeses"
                      name="duracion"
                      placeholder="Duración en meses"
                      value={formData.duracion}
                      onChange={handleInputChange}
                    />
                  </div>
                  <button type="submit" className="btn btn-custom">Crear Préstamo</button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
     

     
    </div>
  );
};

export default PrestamosPage;
