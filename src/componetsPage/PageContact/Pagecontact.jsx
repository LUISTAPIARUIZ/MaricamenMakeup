import React from "react";
import "./style.css"
import imgFB from "./img/facebook.png"
import imgInstram from "./img/instagram.png"
import imgMail from "./img/gmail.png"
import imgWhatsapp from "./img/whatsapp.png"
import BtnEnviar from "../../components/BotonMain/Btn-main.jsx"
import imgFormGmail from "./img/imgFrormGmail.jpg"
import imgPersona from "../../components/PersonInfo/img/Persona.jpg"

const Pagecontact = ()=>{ 
    return(
        <section className="containerContact">
            <div className="contact-List">
                <ul className="List-itemContact">
                    <li className="itemContact">
                        <figure>
                            <img src={imgMail} alt="icon gmail" />
                        </figure>
                    </li>
                    <li className="itemContact">
                        <figure>
                            <img src={imgWhatsapp} alt="icon whatsapp" />
                        </figure>
                    </li>
                    <li className="itemContact">
                        <figure>
                            <img src={imgInstram} alt="icon instagram" />
                        </figure>
                    </li>
                    <li className="itemContact">
                        <figure>
                            <img src={imgFB} alt="icon faceboock" />
                        </figure>
                    </li>
                </ul>
            </div>
            <div className="contacts">
                <div className="contacts-Gmail">
                        <div className="containerImgContact">
                            <figure>
                                <img src={imgFormGmail} alt="" />
                            </figure>
                        </div>
                        <div className="containetFormContacGmail">
                            <form className="contact-form">
                                <div className="form-group FormNameGmail">
                                    <label htmlFor="nombre">Nombre:</label>
                                    <input
                                    type="text"
                                    id="nombre"
                                    required
                                    />
                                </div>

                                <div className="form-group FormEmailGmail">
                                    <label htmlFor="email">Email:</label>
                                    <input
                                    type="email"
                                    id="email"
                                    required
                                    />
                                </div>
                                <div className="AuxiliaryPhoneServices">
                                    <div className=" form-group FormServicesGmail">
                                        <label htmlFor="servicio">Servicio:</label>
                                        <select
                                        id="servicio"
                                        name="servicio"
                                        >
                                        <option value="seleccionar">Novias</option>
                                        <option value="servicio1">Evento</option>
                                        <option value="servicio2">Catalogo</option>
                                        <option value="servicio3">Fomracion</option>
                                        </select>
                                    </div>

                                    <div className="form-group FormPhoneGmail">
                                        <label htmlFor="telefono">Teléfono:</label>
                                        <input
                                        type="number"
                                        id="telefono"
                                        required
                                        />
                                    </div>       
                                </div>
                                <div className="form-group FormMasajeGmail">
                                    <label htmlFor="mensaje">Mensaje:</label>
                                    <textarea
                                    id="mensaje"
                                    required
                                    />
                                </div>
                                <div className="form-group FormBtnEnviarGmail">
                                    <BtnEnviar type="submit" class="btn pink" text="Enviar" />
                                </div>
                            </form>
                        </div>
                </div>
                <div className="contacts-Whatsapp">
                    <div className="whatsapp-info">
                            <figure>
                                <img src={imgPersona} alt="" />
                            </figure>
                            <div>
                                <p>Maricarmen Make Up</p>
                            </div>
                            <div class="whatsapp-info_radio-group">
                                <h5>Servicios</h5>
                                <label>
                                    Opción 1<input type="radio" name="opcion" value="opcion1"/>
                                </label>
                                <label>
                                    Opción 2<input type="radio" name="opcion" value="opcion2"/>
                                </label>
                                <label>
                                    Opción 3<input type="radio" name="opcion" value="opcion3"/>
                                </label>
                                <label>
                                    Opción 3<input type="radio" name="opcion" value="opcion4"/>
                                </label>
                            </div>
                    </div>
                    <div className="containerBtnWhatsapp">
                        <div className="whatsapp-btn">
                            <BtnEnviar class="btn pink font-size-mediun" text="Contactar" />
                        </div>
                    </div>
                </div>
                <div className="contacts-Instagram">

                </div>
                <div className="contacts-Faceboock">

                </div>
            </div>
        </section>
    )
}
export default Pagecontact;