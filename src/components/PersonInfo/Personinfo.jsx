import React from "react";
import "./style.css"
import BtnMain from "../BotonMain/Btn-main";
import imgPerson from "./img/Persona.jpg"

import { AiOutlineArrowRight } from "react-icons/ai";

const PersonInfo =(props)=>{

    return(
        <section className="infoPersona">
            
            <div className="contentInfoPerson">
                <div className="infoPerson">
                    <h2>
                        Maricarmen Bohórquez Davila
                    </h2>
                    <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore iste consequatur aliquam harum. Aliquid, recusandae? At minus nostrum tenetur molestias dignissimos, est fugiat earum tempora. Fuga veniam libero eligendi facilis.
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore iste consequatur aliquam harum. Aliquid, recusandae? At minus nostrum tenetur molestias dignissimos, est fugiat earum tempora. Fuga veniam libero eligendi facilis.
                    </p>
                    <div 
                    onClick={() => {
                    props.selectPage("Contacto");
                    }}>
                        <BtnMain type="submit" class="btn pink font-size-mediun" text={<span> Contactar <AiOutlineArrowRight /></span>}/>
                    </div>
                </div>
                <figure className="contentImgPerson">
                    <img src={imgPerson} alt="Person img" />
                </figure>
            </div>
        </section>
    )
}
export default PersonInfo