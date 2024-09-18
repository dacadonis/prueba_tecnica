import React, { createContext, useState, useEffect } from 'react';
import axiosInstance from '../axiosConfig';
import { jwtDecode } from 'jwt-decode'; // No destructurar, importar como default
import { useNavigate } from 'react-router-dom';

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(() => {
    const token = localStorage.getItem('access_token');
    return token ? jwtDecode(JSON.parse(token).access) : null;
  });
  const [authTokens, setAuthTokens] = useState(() => {
    const token = localStorage.getItem('access_token');
    return token ? JSON.parse(token) : null;
  });
  
  const navigate = useNavigate();

  useEffect(() => {
    if (authTokens) {
      try {
        const decoded = jwtDecode(authTokens.access);
        setUser(decoded);
      } catch (e) {
        console.error("Error decoding token", e);
        setAuthTokens(null);
        setUser(null);
        localStorage.removeItem('access_token');
        navigate('/login');
      }
    }
  }, [authTokens, navigate]);

  const loginUser = async (username, password) => {
    try {
      const response = await axiosInstance.post('/login/', { username, password });
      setAuthTokens(response.data);
      localStorage.setItem('access_token', JSON.stringify(response.data));
      setUser(jwtDecode(response.data.access));
      navigate('/');
    } catch (error) {
      console.error('Error al iniciar sesión', error);
    }
  };

  // const logoutUser = () => {
  //   setAuthTokens(null);
  //   setUser(null);
  //   localStorage.removeItem('access_token');
  //   navigate('/login');
  // };

  // Función para cerrar sesión (logout)
 
  const logoutUser = async () => {
    try {
      // Si hay tokens, hacemos la petición para invalidar el refresh token en el backend
      if (authTokens) {
        await axiosInstance.post('/logout/', { refresh: authTokens?.refresh });
      }
  
      // Limpiamos los tokens y el estado de usuario
      setAuthTokens(null);
      setUser(null);
      localStorage.removeItem('access_token');
  
      // Redirigimos al login después de haber limpiado todo
      navigate('/login');
    } catch (error) {
      console.error('Error al cerrar sesión:', error);
    }
  };
  
  

  return (
    <AuthContext.Provider value={{ user, authTokens, loginUser, logoutUser }}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthContext;
