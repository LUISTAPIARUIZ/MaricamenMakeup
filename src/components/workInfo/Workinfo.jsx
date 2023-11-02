import React from "react";
import "./style.css"
import BtnMain from "../BotonMain/Btn-main";
import imgBoda from "../workInfo/img/boda.png"
import imgFormacion from "../workInfo/img/gorra.png"
import imgCatalogo from "../workInfo/img/modelo.png"
import imgCalendar from "../workInfo/img/ano-nuevo.png"


const Worlinfo =(props)=>{
    // Objeto con datos
    const data = [
      {
        title: 'NOVIAS',
        imgLink:imgBoda ,
        text: "En tu gran día, quiero que te sientas radiante. Mi objetivo es realzar tu belleza natural con un maquillaje que te haga lucir espectacular y que dure toda la jornada de tu boda."
      },
      {
        title: 'CATALOGO',
        imgLink: imgCatalogo,
        text: "Potencia tus productos con mi maquillaje de alta calidad. Juntos, haremos que tus productos luzcan increíbles en tus catálogos y campañas publicitarias."
      },
      {
        title: 'EVENTOS',
        imgLink:imgCalendar,
        text: "Destaca en cualquier ocasión especial con mi maquillaje profesional. Estoy aquí para que te sientas segura y hermosa en cada evento."
      },
      {
        title: 'FORMACION',
        imgLink: imgFormacion,
        text: "Si deseas aprender los secretos del maquillaje de manera relajada y divertida, estás en el lugar adecuado. Mis cursos te brindarán las habilidades necesarias para destacar en la industria del maquillaje. ¡Descubre tu pasión por la belleza!"
      }
  ];
  
  // Componente para renderizar un elemento
  const ElementItem = ({ title, imgLink, text }) => (
    <li className="itemInfo">
        <figure>
        <img src={imgLink} alt={title} />
        </figure>
        <h2>{title}</h2>
        <p>{text}</p>
    </li>
  );

    return(
    <section className="contenWorkInfo">
        <div className="info-listWork">
            <ul className="listWork">
            {data.map((item, index) => (
            <ElementItem
            key={index}
            title={item.title}
            imgLink={item.imgLink}
            text={item.text}
            />
      ))}
            </ul>
        </div>
        <div className="infoButton">
            <div className="contentBtnMain" 
                  onClick={() => {
                  props.selectPage("Servicios");
                  }}>
            <BtnMain 
                  class="btn black font-size-mediun" text="ver más"/>
            </div>
        </div>
    </section>
    )
    }
export default Worlinfo