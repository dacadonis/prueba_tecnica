import { useContext, useEffect } from 'react';
import AuthContext from '../AuthContext';
import { useNavigate } from 'react-router-dom';

const Logout = () => {
  const { logoutUser } = useContext(AuthContext);
  const navigate = useNavigate();

  useEffect(() => {
    const performLogout = async () => {
      await logoutUser(); // Ejecuta la función de logout
      navigate('/login'); // Redirige al login después de cerrar sesión
    };

    performLogout(); // Llama a la función cuando el componente se monta
  }, [logoutUser, navigate]);

  return null; // No muestra nada, solo ejecuta el logout
};

export default Logout;
