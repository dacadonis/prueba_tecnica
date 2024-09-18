import React, { useState, useContext } from 'react';
import AuthContext from '../../AuthContext';
import { Link } from "react-router-dom";
import NavBar from '../NavBar';

const HomePage = () => {

    return (
        <>
            <NavBar />

            {/* <!-- Contenido principal --> */}
            <div className="container-fluid my-5 home-container">
                <div className="row">
                    {/* <!-- Primera columna con tarjetas --> */}
                    <div className="col-lg-7">
                        <div className="row g-3">
                            <div className="col-md-6">
                                <div className="card card-custom">
                                    <div className="card-header-custom">Historial de Préstamos - 1</div>
                                    <div className="card-body">
                                        <p>Detalles del préstamo, fecha de inicio, monto, etc.</p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-6">
                                <div className="card card-custom">
                                    <div className="card-header-custom">Historial de Préstamos - 2</div>
                                    <div className="card-body">
                                        <p>Detalles del préstamo, fecha de inicio, monto, etc.</p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-6">
                                <div className="card card-custom">
                                    <div className="card-header-custom">Historial de Préstamos - 3</div>
                                    <div className="card-body">
                                        <p>Detalles del préstamo, fecha de inicio, monto, etc.</p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-6">
                                <div className="card card-custom">
                                    <div className="card-header-custom">Historial de Préstamos - 4</div>
                                    <div className="card-body">
                                        <p>Detalles del préstamo, fecha de inicio, monto, etc.</p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-12">
                                <div className="card card-custom">
                                    <div className="card-header-custom">Registro de Actividad</div>
                                    <div className="card-body">
                                        <ul className="activity-list list-unstyled">
                                            <li>Entrada: 01/09/2024 - Depósito de $500</li>
                                            <li>Salida: 03/09/2024 - Pago de préstamo $200</li>
                                            <li>Entrada: 05/09/2024 - Depósito de $300</li>
                                            <li>Salida: 07/09/2024 - Pago de servicios $100</li>
                                            <li>Entrada: 09/09/2024 - Depósito de $400</li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* <!-- Segunda columna con cuadro grande --> */}
                    <div className="col-lg-3 mb-3">
                        <div className="card card-custom h-100">
                            <div className="card-header-custom">Pagos Realizados</div>
                            <div className="card-body">
                                <table className="table table-striped">
                                    <thead>
                                        <tr>
                                            <th>Fecha</th>
                                            <th>Monto</th>
                                            <th>Estado</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <td>01/08/2024</td>
                                            <td>$200</td>
                                            <td>Pagado</td>
                                        </tr>
                                        <tr>
                                            <td>15/08/2024</td>
                                            <td>$200</td>
                                            <td>Pagado</td>
                                        </tr>
                                        <tr>
                                            <td>01/09/2024</td>
                                            <td>$200</td>
                                            <td>Pagado</td>
                                        </tr>
                                        <tr>
                                            <td>15/09/2024</td>
                                            <td>$200</td>
                                            <td>Pagado</td>
                                        </tr>
                                        <tr>
                                            <td>01/10/2024</td>
                                            <td>$200</td>
                                            <td>Pagado</td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>

                    {/* <!-- Tercera columna con cuadro pequeño vertical -->// */}
                    <div className="col-lg-2 mb-3">
                        <div className="card card-custom h-100">
                            <div className="card-header-custom">Calendario</div>
                            <div className="card-body calendar">
                                <p id="fecha-hora"></p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default HomePage;
