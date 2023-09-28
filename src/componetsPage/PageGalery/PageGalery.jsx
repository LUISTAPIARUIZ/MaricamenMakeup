import React from "react";

import "./style.css"

const PageGalery =({type})=>{
    return(
        <div>
           {
            type === "Novias" &&(
                <div>
                    {type}
                </div>
            )
           }
           {
            type === "Eventos" &&(
                <div>
                   {type}
                </div>
            )
           }
           {
            type === "Catalogo" &&(
                <div>
                    {type}
                </div>
            )
           }
           {
            type === "Formacion" &&(
                <div>
                    {type}
                </div>
            )
           }
        </div>
    )
}
export default PageGalery