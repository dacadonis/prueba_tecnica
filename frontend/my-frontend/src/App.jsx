import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { AuthProvider } from './AuthContext';
import LoginPage from './components/pages/LoginPage';
import HomePage from './components/pages/HomePage';
import SociosPage from './components/pages/SociosPage';
import PrestamosPage from './components/pages/PrestamosPage';
import SeguimientosPage from './components/pages/SeguimientosPage';
import RegisterPage from './components/pages/RegisterPage';
import Logout from './components/Logout';
import PrivateRoute from './PrivateRoute';

function App() {
  return (
    <Router>
      <AuthProvider>
        <Routes>
          <Route path="/register" element={<RegisterPage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route element={<PrivateRoute />}>
            <Route path="/" element={<HomePage />} />
            <Route path="/socios" element={<SociosPage />} />
            <Route path="/prestamos" element={<PrestamosPage />} />
            <Route path="/seguimientos" element={<SeguimientosPage />} />
            <Route path="/logout" element={<Logout />} />
          </Route>

        </Routes>
      </AuthProvider>
    </Router>
  );
}

export default App;
