import React, {useState} from "react";
import { FaFacebookF } from 'react-icons/fa';
import './style/cabecera.css';
import logo from  './img/Logo.png'


function Cabecera() {
    const [bgColour1, setBgColour1] = useState("#FFFFFF80")
    const [bgColour2, setBgColour2] = useState(["#FFFFFF80","none"])
    const [bgColour3, setBgColour3] = useState("#FFFFFF80")
    const [bgColour4, setBgColour4] = useState("#FFFFFF80")
    const [bgColour5, setBgColour5] = useState(["#FFFFFF80","0px solid #fafafa"])
    const [bgColour6, setBgColour6] = useState(["#FFFFFF80","0px solid #fafafa"])
    const [bgColour7, setBgColour7] = useState(["#FFFFFF80","0px solid #fafafa"])
    const [bgColour8, setBgColour8] = useState(["#FFFFFF80","0px solid #fafafa"])
    const style1={
        background:`${bgColour1}`
    }
    const style2={
        background:`${bgColour2[0]}`
    }
    const style3={
        background:`${bgColour3}`
    }
    const style4={
        background:`${bgColour4}`
    }
    const style5={
        background:`${bgColour5[0]}`
    }
    const style6={
        background:`${bgColour6[0]}`
    }
    const style7={
        background:`${bgColour7[0]}`
    }
    const style8={
        background:`${bgColour8[0]}`
    }
    const Styledisplay={
        display:`${bgColour2[1]}`
    }
    const sombra1={
        borderBottom: `${bgColour5[1]}`
    }
    const sombra2={
        borderBottom: `${bgColour6[1]}`
    }
    const sombra3={
        borderBottom: `${bgColour7[1]}`
    }
    const sombra4={
        borderBottom: `${bgColour8[1]}`
    }


   
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
            <div className="menu-logo">
                <img className="logo-marcarmenBohorquez" src={logo} alt="Logo" />
            </div>
            <div className="menu-options">
                <ul className="options">
                    <li className="options-inicio" onMouseEnter={()=> setBgColour1("#FDC2C2")}onMouseLeave={() => setBgColour1("#FFFFFF80")}>
                        <a href="www.facebook.com">Inicio</a>
                        <div className="bar" style={style1}></div>
                    </li>
                    <li className="options-galeria" onMouseEnter={()=> setBgColour2(["#FDC2C2","inline-block"])}onMouseLeave={() => setBgColour2(["#FFFFFF80","none"])}>

                        <div className="aux"><a href="www.facebook.com">Galeria</a><ion-icon name="chevron-down-outline">
                            </ion-icon>
                        </div>
                        <div className="bar" style={style2}></div>
                        <div className="galeria-desplegable" style={Styledisplay}>
                            <a className="galeria-option" style={sombra1} href="www.faceboock.com" onMouseEnter={()=> setBgColour5(["#FDC2C2","1px solid #b3a3a3"])}onMouseLeave={() => setBgColour5(["#FFFFFF80","0px solid #fafafa"])} >
                                <div className="selector" style={style5}></div >
                                <div className="categori"> <h4>Novias</h4></div>
                            </a>
                            <a className="galeria-option"  style={sombra2}  href="www.faceboock.com" onMouseEnter={()=> setBgColour6(["#FDC2C2","1px solid #b3a3a3"])}onMouseLeave={() => setBgColour6(["#FFFFFF80","0px solid #fafafa"])}>
                                <div className="selector" style={style6}></div>
                                <div className="categori"> <h4>Eventos</h4></div>
                            </a>
                            <a className="galeria-option" style={sombra3}  href="www.faceboock.com" onMouseEnter={()=> setBgColour7(["#FDC2C2","1px solid #b3a3a3"])}onMouseLeave={() => setBgColour7(["#FFFFFF80","0px solid #fafafa"])}>
                                <div className="selector" style={style7}></div>
                                <div className="categori"> <h4>Catalogo</h4></div>
                            </a>
                            <a className="galeria-option" style={sombra4}  href="www.faceboock.com" onMouseEnter={()=> setBgColour8(["#FDC2C2","1px solid #b3a3a3"])}onMouseLeave={() => setBgColour8(["#FFFFFF80","0px solid #fafafa"])}>
                                <div className="selector" style={style8}></div>
                                <div className="categori"> <h4>Formación</h4></div>
                            </a>
                        </div>
                    </li>
                    <li className="options-servicios" onMouseEnter={()=> setBgColour3("#FDC2C2")}onMouseLeave={() => setBgColour3("#FFFFFF80")}>
                        <a href="www.facebook.com">Servicios</a>
                        <div className="bar" style={style3}></div>
                    </li>
                    <li className="options-Contacto" onMouseEnter={()=> setBgColour4("#FDC2C2")}onMouseLeave={() => setBgColour4("#FFFFFF80")}>
                        <a href="www.facebook.com">Contacto</a>
                        <div className="bar" style={style4}></div>
                    </li>
                </ul>
            </div>
        </div>
    </header>
  );
}

export default Cabecera;
