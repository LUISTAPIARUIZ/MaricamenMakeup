import Carousel from "nuka-carousel"
import fondoBrochas from "./img/fondo-brochas.jpg";
import {AiOutlineRight, AiOutlineLeft  } from "react-icons/ai";
import "./style.css"
const Slidermain  = () => {
  return (
    <Carousel className="carouselEdit"
    wrapAround={true}    // Esta propiedad permite que el carrusel sea infinito
    autoplay={true}    // Esta propiedad permite que el carrucel avance solo
    renderCenterLeftControls={({ previousSlide }) => (
        <button className="butonControlSlider" onClick={previousSlide}><AiOutlineLeft/></button>
      )}
      renderCenterRightControls={({ nextSlide }) => (
        <button className="butonControlSlider" onClick={nextSlide}><AiOutlineRight/></button>
      )}
    >
      <img src={fondoBrochas} alt="Primer Anuncio"/>
      <img src={fondoBrochas} alt="Primer Anuncio"/>
      <img src={fondoBrochas} alt="Primer Anuncio"/>
      <img src={fondoBrochas} alt="Primer Anuncio"/>
      <img src={fondoBrochas} alt="Primer Anuncio"/>
    </Carousel>
  )
}
export default Slidermain;