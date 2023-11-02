
import React from "react";
import Descriptionservices from "../../components/DescriptionsServices/Descriptionsevices";
import "./style.css"
import Persona from "./img/Persona.jpg"

const Pageservices =()=>{
    return(
        <div>
            <div className="HeaderServices">
                <p className="TitleServices">servicios</p>
            </div>
            
            <div className="contentServices">
                <div className="servicesMain">
                    <figure height="100%">
                        <img src={Persona} alt=""  height="100%" />
                    </figure>
                    <Descriptionservices
                    title={'NOVIAS'} 
                    description={
                        ['hola asdasdasdasdasdasdasdasd',
                        'como asdasdasdasdasdasdasd asd sadas dsad asd ',
                        'estaasdasd asd asd asda sdasdasdsads'
                        ]}
                    />
                </div>
            </div>
            <div className="contentServices colorSecundary">
                <div className="servicesMain">
                    <Descriptionservices 
                    title={'EVENTOS'} 
                    description={
                        ['hola asdasdasdasdasdasdasdasd',
                        'como asdasdasdasdasdasdasd asd sadas dsad asd ',
                        'estaasdasd asd asd asda sdasdasdsads'
                        ]}
                        />
                    <figure height="100%">
                        <img src={Persona} alt=""  height="100%" />
                    </figure>
                </div>
            </div>
            <div className="contentServices">
                <div className="servicesMain">
                    <figure height="100%">
                        <img src={Persona} alt=""  height="100%" />
                    </figure>
                    <Descriptionservices 
                    title={'CATALOGO'} 
                    description={
                        ['hola asdasdasdasdasdasdasdasd',
                        'como asdasdasdasdasdasdasd asd sadas dsad asd ',
                        'estaasdasd asd asd asda sdasdasdsads'
                        ]}
                    />
                </div>
            </div>
            <div className="contentServices colorSecundary">
                <div className="servicesMain">
                    <Descriptionservices 
                    title={'FORMACION'} 
                    description={
                        ['hola asdasdasdasdasdasdasdasd',
                        'comoa sdasdasdasdasdasdasd asd sadas dsad asd ',
                        'estaasdasd asd asd asda sdasdasdsads'
                        ]}
                    />
                    <figure height="100%">
                        <img src={Persona} alt=""  height="100%" />
                    </figure>
                </div>
            </div>
        </div>
    )
}
export default Pageservices