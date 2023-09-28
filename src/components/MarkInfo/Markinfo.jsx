import React from "react";
import "./style.css"
import LogoCline from "./img/Clinique.png"
import LogoCreation from "./img/creation.png"
import LogoEsteeLauder from "./img/estee lauder.png"
import LogoLoreal from "./img/Loreal.png"
import LogoMac from "./img/MAC.png"
import LogoMaxFactor from "./img/max-factor.png"
import LogoMorphe from "./img/Morphe.png"
import LogoNYX from "./img/NYX.png"
import LogoTheBalm from "./img/TheBalm.png"
import { AiOutlineArrowDown } from "react-icons/ai";

const Markinfo = () => {
  return (
    <section className="containerMarks">
      <div className="containerPreviousText">
        <p>NOS PREOCUPAMOS POR OFRECER LA MAYOR CALIDAD EN CADA UNO DE NUESTROS TRABAJOS POR ELLOR TRABAJAMOS CON MARCAS QUE CUMPLEN CON LOS MAS ALTOS ESTANDARES </p>
        <p><AiOutlineArrowDown className="iconArrowButton"/> MARCAS CON LAS QUE TRABAJAMOS <AiOutlineArrowDown className="iconArrowButton"/></p>
      </div>
      <div className="containerLogoMarks">
        <div className="Logos">
          <figure>
            <img src={LogoCline} alt="" />
          </figure>
          <figure>
            <img src={LogoCreation} alt="" />
          </figure>
          <figure>
            <img src={LogoEsteeLauder} alt="" />
          </figure>
          <figure>
            <img src={LogoLoreal} alt="" />
          </figure>
          <figure>
            <img src={LogoMac} alt="" />
          </figure>
          <figure>
            <img src={LogoMaxFactor} alt="" />
          </figure>
          <figure>
            <img src={LogoMorphe} alt="" />
          </figure>
          <figure>
            <img src={LogoNYX} alt="" />
          </figure>
          <figure>
            <img src={LogoTheBalm} alt="" />
          </figure>         
        </div>
      </div>
    </section>
  );
};
export default Markinfo;