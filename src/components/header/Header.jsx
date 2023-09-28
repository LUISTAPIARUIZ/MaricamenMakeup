import "./style.css";
import facebook from "./img/facebook-black.png";
import instagram from "./img/instagram-black.png";
import whatsaap from "./img/whatsapp-black.png";
import logo from "./img/logo-main.png";
import React, { useState } from "react";

const Header = (props) => {
  const [hoveredIndex, setHoveredIndex] = useState(null);
  const [hoveredIndexGalery, setHoveredIndexGalery] = useState(null);
  const [hoveredStyle, setHoveredStyle] = useState("none");

  const handleMouseEnter = (index) => {
    if (index === 1) {
      setHoveredStyle("block");
    }
    setHoveredIndex(index);
  };

  const handleMouseLeave = (index) => {
    if (index === 1) {
      setHoveredStyle("none");
    }
    setHoveredIndex(null);
  };
  const handleMouseEnterGalery = (index) => {
    setHoveredStyle("block");
    setHoveredIndexGalery(index);
  };

  const handleMouseLeaveGalery = () => {
    setHoveredStyle("none");
    setHoveredIndexGalery(null);
  };
  const styleListGalery = {
    display: hoveredStyle,
  };
  const listItemsMenu = ["Inicio", "Galeria", "Servicios", "Contacto"];
  const listItemsGalery = ["Novias", "Eventos", "Catalogo", "Formacion"];
  return (
    <header className="header">
      <div className="header-contact">
        <div className="numCall">
          <p>Contacto : {props.number}</p>
        </div>
        <div className="socialNetworks">
          <figure>
            <a href="faceboock.com">
              <img src={facebook} alt="faceboock" />
            </a>
          </figure>
          <figure>
            <a href="faceboock.com">
              <img src={instagram} alt="instagram" />
            </a>
          </figure>
          <figure>
            <a href="faceboock.com">
              <img src={whatsaap} alt="whatsaap" />
            </a>
          </figure>
        </div>
      </div>
      <nav className="header-nav">
        <figure className="contentLogo">
          <img className="contentLogo-logo" src={logo} alt="" />
        </figure>
        <ul className="contentOption">
          {listItemsMenu.map((item, index) => (
            <li
              onClick={() => {
                props.selectPage(item);
              }}
              key={index}
              onMouseEnter={() => handleMouseEnter(index)}
              onMouseLeave={() => handleMouseLeave(index)}
            >
              {item}

              {hoveredIndex === index && <div className="highlight-bar"></div>}
            </li>
          ))}
          <div className="listGalery" style={styleListGalery}>
            <ul className="list">
              {listItemsGalery.map((item, index) => (
                <li
                    onClick={() => {
                    props.selectPage(item);
                  }}
                  key={index}
                  onMouseEnter={() => {
                    handleMouseEnterGalery(index);
                  }}
                  onMouseLeave={() => {
                    handleMouseLeaveGalery();
                  }}
                >
                  <div className="barLeft">
                    {hoveredIndexGalery === index && (
                      <div className="barLeft-hover"></div>
                    )}
                  </div>
                  <p> {item}</p>
                </li>
              ))}
            </ul>
          </div>
        </ul>
      </nav>
    </header>
  );
};
export default Header;
