import React from "react";
import "./style.css"
import BtnMain from "../BotonMain/Btn-main";
import imgBoda from "../workInfo/img/boda.png"
import imgFormacion from "../workInfo/img/gorra.png"
import imgCatalogo from "../workInfo/img/modelo.png"
import imgCalendar from "../workInfo/img/ano-nuevo.png"


const Worlinfo =()=>{
    // Objeto con datos
    const data = [
    {
      title: 'Elemento 1',
      imgLink:imgBoda ,
      text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab esse, quia sequi nemo molestias omnis quaerat cumque atque nam distinctio debitis possimus cum nostrum. Inventore voluptas modi in quisquam obcaecati."
    },
    {
        title: 'Elemento 1',
        imgLink: imgFormacion,
        text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab esse, quia sequi nemo molestias omnis quaerat cumque atque nam distinctio debitis possimus cum nostrum. Inventore voluptas modi in quisquam obcaecati."
      },
      {
        title: 'Elemento 1',
        imgLink: imgCatalogo,
        text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab esse, quia sequi nemo molestias omnis quaerat cumque atque nam distinctio debitis possimus cum nostrum. Inventore voluptas modi in quisquam obcaecati."
      },
      {
        title: 'Elemento 1',
        imgLink:imgCalendar,
        text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab esse, quia sequi nemo molestias omnis quaerat cumque atque nam distinctio debitis possimus cum nostrum. Inventore voluptas modi in quisquam obcaecati."
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
            <div className="contentBtnMain">
            <BtnMain type="submit" class="btn black font-size-mediun" text="ver más"/>
            </div>
        </div>
    </section>
    )
    }
export default Worlinfo