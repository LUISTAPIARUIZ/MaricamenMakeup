import React,{useState} from "react";
import "./style.css"
import imgFB from "./img/facebook.png"
import imgInstram from "./img/instagram.png"
import imgMail from "./img/gmail.png"
import imgWhatsapp from "./img/whatsapp.png"
import BtnEnviar from "../../components/BotonMain/Btn-main.jsx"
import imgFormGmail from "./img/imgFrormGmail.jpg"
import imgPersona from "../../components/PersonInfo/img/Persona.jpg"
import nameInstagram from "./img/NameInstagram.png"
import nameFaceboock from "./img/NameFaceboock.png"

const Pagecontact = ()=>{ 
    const [selectedContact, setSelectedContact]=useState(0)
    const handleSelectectcontact=(position)=>{
        setSelectedContact(position)
    }
    return(
        <section className="containerContact">
            <div className="contact-List">
                <ul className="List-itemContact">
                    <li 
                    className="itemContact" 
                    onClick={() => handleSelectectcontact(0)} 
                    style={{ backgroundColor: selectedContact === 0 ? 'rgb(255, 255, 255,0.6)' : 'transparent',}}>
                        <figure>
                            <img src={imgMail} alt="icon gmail" />
                        </figure>
                    </li>
                    <li 
                    className="itemContact" 
                    onClick={() => handleSelectectcontact(1)}
                    style={{ backgroundColor: selectedContact === 1 ? 'rgb(255, 255, 255,0.6)' : 'transparent',}}>
                        <figure>
                            <img src={imgWhatsapp} alt="icon whatsapp" />
                        </figure>
                    </li>
                    <li 
                    className="itemContact"
                    onClick={() => handleSelectectcontact(2)}
                    style={{ backgroundColor: selectedContact === 2 ? 'rgb(255, 255, 255,0.6)' : 'transparent',}}>
                        <figure>
                            <img src={imgInstram} alt="icon instagram" />
                        </figure>
                    </li>
                    <li 
                    className="itemContact" 
                    onClick={() => handleSelectectcontact(3)}
                    style={{ backgroundColor: selectedContact === 3 ? 'rgb(255, 255, 255,0.6)' : 'transparent',}}>
                        <figure>
                            <img src={imgFB} alt="icon faceboock" />
                        </figure>
                    </li>
                </ul>
            </div>
            <div className="contacts">
                {selectedContact===0 &&
                (
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
                )}
                {selectedContact===1 &&
                (
                <div className="contacts-Whatsapp">
                    <div className="whatsapp-info">
                            <figure className="info-Photo">
                                <img src={imgPersona} alt="Foto Maricarmen" />
                            </figure>
                            <div className="whatsapp-info_Name">
                                <p>Maricarmen Bohórquez Davila</p>
                            </div>
                            <div class="whatsapp-info_radio-group">
                                <h5>Servicios</h5>
                                <label>
                                    Novias<input type="radio" name="opcion" value="Novias"/>
                                </label>
                                <label>
                                    Evento<input type="radio" name="opcion" value="Evento"/>
                                </label>
                                <label>
                                    Catalogo<input type="radio" name="opcion" value="Catalogo"/>
                                </label>
                                <label>
                                    Formacion<input type="radio" name="opcion" value="Formacion"/>
                                </label>
                            </div>
                    </div>
                    <div className="containerBtnWhatsapp">
                        <div className="btnMain">
                            <BtnEnviar class="btn pink font-size-mediun" text="Contactar" />
                        </div>
                    </div>
                </div>
                )}
                {selectedContact===2 &&
                (
                <div className="contacts-Instagram">
                    <figure className="Instagram-name">
                        <img src={nameInstagram} alt="icon nombre instagram" />
                    </figure>
                    <figure className="info-Photo infoPhotoInstagram">
                        <img src={imgPersona} alt="Foto Maricarmen" />
                    </figure>
                    <div className="whatsapp-info_Name InfoNameInstagram">
                        <p>Maricarmen Bohórquez Davila</p>
                    </div>
                    <div className="BtnContactInstagram" >
                        <div className="btnMain">
                            <BtnEnviar class="btn pink font-size-mediun" text="Contactar" />
                        </div>
                    </div>
                </div>
                )}
                {selectedContact===3 &&
                (
                <div className="contacts-Faceboock">
                    <figure className="Instagram-name">
                       <img src={nameFaceboock} alt="icon nombre instagram" />
                   </figure>
                   <figure className="info-Photo infoPhotoInstagram">
                       <img src={imgPersona} alt="Foto Maricarmen" />
                   </figure>
                   <div className="whatsapp-info_Name InfoNameInstagram">
                       <p>Maricarmen Bohórquez Davila</p>
                   </div>
                   <div className="BtnContactInstagram" >
                       <div className="btnMain">
                           <BtnEnviar class="btn pink font-size-mediun" text="Contactar" />
                       </div>
                   </div>
               </div>
                )}
            </div>
        </section>
    )
}
export default Pagecontact;