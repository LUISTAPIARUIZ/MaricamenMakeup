import React from "react";
import Btn from "../BotonMain/Btn-main"
import "./style.css"

const Descriptionservices = ({title , description})=>{
    const listDescription =description.map((descrip)=>
        <p>{"-"+descrip}</p>    
    )
    return(
        <div className="contentDescriptio">
            <h3 className="titleDescription">{title}</h3>
            <div className="textDescription">
                {listDescription}
            </div>
            <div className="contentBtnCotizar">
            <Btn  class="btn pink" text="Cotizar"/>
            </div>
        </div>
    )
}
export default Descriptionservices