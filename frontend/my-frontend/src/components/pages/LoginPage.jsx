import React, { useState, useContext } from 'react';
import AuthContext from '../../AuthContext';

const LoginPage = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const { loginUser } = useContext(AuthContext);

  const handleSubmit = (e) => {
    e.preventDefault();
    loginUser(username, password);
  };

  return (
    <div>
      <div className="row m-0 login-container">
        <div className="col-md-6 p-0 ">
          <img src="/images/imagen.jpg" className="mb-4 background-image" />
        </div>
        <div className="col-md-6 login-section">
          <div className="login-container__form text-center">
            <img src="/images/logo.png" alt="CoopCamp" className="mb-4" style={{ width: '150px' }} />
            <h1 className="mb-4">Bienvenidos</h1>
            <form className="login-form" onSubmit={handleSubmit}>
              <div className="form-floating mb-4 position-relative">
                <input
                  type="text"
                  name="username"
                  placeholder="Nombre de usuario"
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                  className="form-control ps-5"
                />
                <div className="position-absolute top-50 start-0 translate-middle-y icon-style">
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-person" viewBox="0 0 16 16">
                    <path d="M8 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6m2-3a2 2 0 1 1-4 0 2 2 0 0 1 4 0m4 8c0 1-1 1-1 1H3s-1 0-1-1 1-4 6-4 6 3 6 4m-1-.004c-.001-.246-.154-.986-.832-1.664C11.516 10.68 10.289 10 8 10s-3.516.68-4.168 1.332c-.678.678-.83 1.418-.832 1.664z" />
                  </svg>
                </div>
                <label>Usuario</label>
              </div>
              <div className="form-floating mb-4 position-relative">
                <input
                  type="password"
                  name="password"
                  placeholder="Contraseña"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className='form-control ps-5'
                />
                <div className="position-absolute top-50 start-0 translate-middle-y icon-style">
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-lock" viewBox="0 0 16 16">
                    <path d="M8 1a2 2 0 0 1 2 2v4H6V3a2 2 0 0 1 2-2m3 6V3a3 3 0 0 0-6 0v4a2 2 0 0 0-2 2v5a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2V9a2 2 0 0 0-2-2M5 8h6a1 1 0 0 1 1 1v5a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1V9a1 1 0 0 1 1-1"/>
                  </svg>
                </div>
                <label>Contraseña</label>
              </div>
              <button type="submit" className="btn btn-custom w-100 mb-3">Iniciar sesión</button>
              <a href="#" className="text-muted d-block mb-3">¿Olvidaste tu contraseña?</a>             
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
