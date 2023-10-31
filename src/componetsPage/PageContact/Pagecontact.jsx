import React from "react";
import "./style.css"
import imgFB from "./img/facebook.png"
import imgInstram from "./img/instagram.png"
import imgMail from "./img/gmail.png"
import imgWhatsapp from "./img/whatsapp.png"
import BtnEnviar from "../../components/BotonMain/Btn-main.jsx"
import imgFormGmail from "./img/imgFrormGmail.jpg"

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

                                <div className="form-group FormPhoneGmail">
                                    <label htmlFor="telefono">Teléfono:</label>
                                    <input
                                    type="number"
                                    id="telefono"
                                    required
                                    />
                                </div>

                                <div className="form-group FormServicesGmail">
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
            </div>
        </section>
    )
}
export default Pagecontact;