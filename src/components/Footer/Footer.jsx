import React from "react";
import "./style.css"
import BtnMain from "../BotonMain/Btn-main";
import logo from "../header/img/logo-main.png"
import faceboock from "../header/img/facebook-black.png"
import instagram from "../header/img/instagram-black.png"
import whatsaap from "../header/img/whatsapp-black.png"
import { AiOutlineRight,AiOutlineMail,AiTwotonePhone } from 'react-icons/ai';

const Footer = (props)=>{
    return(
        <footer className="footer">
            <section className="footer-main">
                <div className="main-content description">
                    <figure className="contenLogo">
                        <img src={logo}  alt="logo de la empresa"/>
                    </figure>
                    <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quae, aperiam excepturi! Corporis pariatur voluptates magnam perferendis molestias numquam animi omnis porro accusamus. Doloremque quas saepe harum atque assumenda perspiciatis! Recusandae?</p>
                </div>
                <div className="dividingLine lineOne"></div>
                <div className="main-content servicesContact" >
                    <div className="services">
                        <h3>Servicios</h3>
                        <ul>
                            <li><AiOutlineRight className="arrow"/>Novia</li>
                            <li><AiOutlineRight className="arrow"/>Foramcion</li>
                            <li><AiOutlineRight className="arrow"/>Catalogo</li>
                            <li><AiOutlineRight className="arrow"/>Eventos</li>
                        </ul>
                    </div>
                    <div className="contact">
                        <h3>Contacto</h3>
                        <ul>
                            <li>
                                <AiTwotonePhone className="iconPhone"/>
                                <p>999-999-999</p>
                                
                            </li>
                            <li>
                                <AiOutlineMail/>
                                <p>example@example.com</p>
                            </li>
                        </ul>
                    </div>
                </div>
                <div className="dividingLine lineTwo"></div>
                <div className="main-content mail">
                    <h3 >RECIVIR OFERTAS DE SERVICIOS</h3>
                    <form action="">
                        <label className="form-mail" htmlFor="">
                            <span>Correo:</span>
                            <input type="email" name="" id="" placeholder="example@gmail.com"/>
                            <div className="contentComponentButonMain"><BtnMain type="submit" class="btn pink" text="Enviar"/></div>
                        </label>
                       
                    </form>
                </div> 
            </section>
            <section className="footer-redes">
                <figure><img src={faceboock} alt="logo faceboock" /></figure>
                <figure><img src={instagram} alt="logo intagram" /></figure>
                <figure><img src={whatsaap} alt="logo whatsapp" /></figure>
            </section>
        </footer>
    )
}
export default Footer;