import React from "react";
import PhotoAlbum from "react-photo-album";
import Persona from "./img/Persona.jpg"
import "./style.css"

const PageGalery =({type})=>{

    const photos = [
        {
            src:  Persona,
            width: 800,
            height: 600
        },
        {
            src:  Persona ,
            width: 1600,
            height: 900
        },
        {
            src:  Persona ,
            width: 1600,
            height: 900
        },
        {
            src:  Persona ,
            width: 1600,
            height: 900
        },
        {
            src:  Persona ,
            width: 1600,
            height: 900
        },
        {
            src:  Persona ,
            width: 1600,
            height: 900
        },
        {
            src:  Persona ,
            width: 1600,
            height: 900
        },
        {
            src:  Persona ,
            width: 1600,
            height: 900
        },
        {
            src:  Persona ,
            width: 1600,
            height: 900
        }
        
    ];
    return(
        <div className="containerGalery">

            <div className="headerGalery">
                <p className="TitleGalery">Galeria :</p>
                <p className="TitleComplement">{type}</p>
            </div>
           {
            type === "Novias" &&(
                <div className="ContentAlbun">
                    <PhotoAlbum layout="rows" photos={photos} />
                </div>
            )
           }
           {
            type === "Eventos" &&(
                <div className="ContentAlbun">
                    <PhotoAlbum layout="rows" photos={photos} />
                </div>
            )
           }
           {
            type === "Catalogo" &&(
                <div className="ContentAlbun">
                    <PhotoAlbum layout="rows" photos={photos} />
                </div>
            )
           }
           {
            type === "Formacion" &&(
                <div className="ContentAlbun">
                    <PhotoAlbum layout="rows" photos={photos} />
                </div>
            )
           }
        </div>
    )
}
export default PageGalery