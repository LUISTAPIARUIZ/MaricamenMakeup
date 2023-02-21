import React from "react";
import { FaFacebookF } from 'react-icons/fa';
import './style/cabecera.css';

function Cabecera() {
  return (
    <header className="head">
        <div className='head-info'>
            <div className="info-contacto">
                <h4>Constacto:999-999-999</h4>
            </div>
            <div className="info-redes">
                <ul className="redes">
                    <li><FaFacebookF size="1.2rem"/></li>
                    <li><ion-icon name="logo-instagram"></ion-icon></li>
                    <li><ion-icon name="logo-whatsapp"></ion-icon></li>

                </ul>
            </div>
        </div>
        <div className='head-menu'>
            <div className="menu-logo"></div>
            <div className="menu-options">
                <ul className="options">
                    <li>Inicio</li>
                    <li>Galeria</li>
                    <li>Servicios</li>
                    <li>Contacto</li>
                </ul>
            </div>
        </div>
    </header>
  );
}

export default Cabecera;
