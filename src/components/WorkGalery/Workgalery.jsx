import React, { useState }  from "react";
import "./style.css"
import img1 from "../PersonInfo/img/Persona.jpg"

const Workgalery =(props)=>{
    const [hoveredIndex, setHoveredIndex] = useState(null);
     const handleMouseEnter=(index)=>{
        setHoveredIndex(index);
    }
    const handleMouseLeave=()=>{
        setHoveredIndex(null);
    }
    const ElementWork=()=>(
        data.map((item,index)=>(
            <article className="works" key={index} 
            onMouseEnter={()=>handleMouseEnter(index)}
            onMouseLeave={()=>handleMouseLeave()}
            >
            <figure><img   src={item.img1} alt={item.descrip1} /></figure>
            <figure><img   src={item.img2} alt={item.descrip2} /></figure>
            
            {hoveredIndex === index &&(
               <div className="contentInfo">
               <h3>{item.title}</h3>
                </div>         
            )}
            
        </article>
        ))
        
    )
    const data = [
        {
            title:"INFORMACION",
            img1:img1,
            img2:img1,
            descrip1:"imagen de modelo 1",
            descrip2:"imagen de modelo 2",
        },{
            title:"EVENTOS",
            img1:img1,
            img2:img1,
            descrip1:"imagen de modelo 1",
            descrip2:"imagen de modelo 2",
            
        },        {
            title:"NOVIA",
            img1:img1,
            img2:img1,
            descrip1:"imagen de modelo 1",
            descrip2:"imagen de modelo 2",
            
        },        
        {
            title:"CATALOGO",
            img1:img1,
            img2:img1,
            descrip1:"imagen de modelo 1",
            descrip2:"imagen de modelo 2",
        }  
        
      ];
     
      
    return(
        <section className="contentWorkGalery">
            <div className="workGalery">
                <div className="title">
                    <h3 className="title-pink">Galeria </h3>
                    <h3 className="title-gray">DE TRABAJOS</h3>
                </div>
                <section className="contentWorks">
                        <ElementWork/>
                </section>
            </div>
        </section>
    )
}

export default Workgalery