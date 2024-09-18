import React from 'react';
import { Link } from "react-router-dom";

const NavBar = () => {
    return (
        <>
        <nav className="navbar navbar-expand-lg fixed-top">
                <div className="container-fluid">
                    <Link className="navbar-brand d-flex align-items-center text-white" to="/">
                    {/* <a className="navbar-brand d-flex align-items-center text-white" href="/" style={{ gap: '10px' }}> */}
                        <img src="/images/logo.png" alt="CoopCamp Logo" height="40" />
                        <span>CoopCamp</span>
                    {/* </a> */}
                    </Link>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNavDropdown">
                        <ul className="navbar-nav ms-auto">
                            {/* <!-- Socios Dropdown --> */}
                            <li className="nav-item dropdown">
                                <a className="nav-link dropdown-toggle text-white" href="#" id="sociosDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                    Socios
                                </a>
                                <ul className="dropdown-menu" aria-labelledby="sociosDropdown">
                                    <li><Link className="dropdown-item" to="/socios">Lista Socios</Link></li>
                                </ul>
                            </li>
                            {/* <!-- Préstamos Dropdown --> */}
                            <li className="nav-item dropdown">
                                <a className="nav-link dropdown-toggle text-white" href="#" id="prestamosDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                    Préstamos
                                </a>
                                <ul className="dropdown-menu" aria-labelledby="prestamosDropdown">
                                    <li><Link className="dropdown-item" to="/prestamos">Lista Préstamos</Link></li>
                                    <li><Link className="dropdown-item" to="/prestamos">Nuevo Préstamo</Link></li>
                                </ul>
                            </li>
                            {/* <!-- Seguimientos Dropdown --> */}
                            <li className="nav-item dropdown">
                                <a className="nav-link dropdown-toggle text-white" href="#" id="seguimientosDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                    Seguimientos
                                </a>
                                <ul className="dropdown-menu" aria-labelledby="seguimientosDropdown">
                                    <li><Link className="dropdown-item" to="/seguimientos">Ver Seguimientos</Link></li>
                                    <li><Link className="dropdown-item" to="/seguimientos">Nuevo Seguimiento</Link></li>
                                </ul>
                            </li>
                            {/* <!-- Más opciones Dropdown --> */}
                            <li className="nav-item dropdown">
                                <a className="nav-link dropdown-toggle text-white" href="#" id="masOpcionesDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                    Más opciones
                                </a>
                                <ul className="dropdown-menu" aria-labelledby="masOpcionesDropdown">
                                    <li><Link className="dropdown-item" to="/register">Registrar</Link></li>
                                    <li><a className="dropdown-item" href="#">Perfil</a></li>
                                    <li><Link className="dropdown-item" to="/logout">Cerrar sesión</Link ></li>
                                </ul>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </>
    );
};
    
export default NavBar;