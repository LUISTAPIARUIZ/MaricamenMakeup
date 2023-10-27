import React from "react";
import "./style.css"
import imgFB from "./img/facebook.png"
import imgInstram from "./img/instagram.png"
import imgMail from "./img/gmail.png"
import imgWhatsapp from "./img/whatsapp.png"

const Pagecontact = ()=>{ 
    return(
        <section className="containerContact">
            <div className="contact-List">
                <ul className="List-itemContact">
                    <li className="itemContact">
                        <figure>
                            <img src={imgMail} alt="icon gmail" />
                        </figure>
                    </li>
                    <li className="itemContact">
                        <figure>
                            <img src={imgWhatsapp} alt="icon whatsapp" />
                        </figure>
                    </li>
                    <li className="itemContact">
                        <figure>
                            <img src={imgInstram} alt="icon instagram" />
                        </figure>
                    </li>
                    <li className="itemContact">
                        <figure>
                            <img src={imgFB} alt="icon faceboock" />
                        </figure>
                    </li>
                </ul>
            </div>
            <div className="contacts">
                <div className="contacts-Gmail">
                        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Optio hic quam cupiditate aut praesentium vero animi esse mollitia deserunt, harum at velit aspernatur et ex inventore voluptas tempore eum fugiat. Lorem ipsum dolor, sit amet consectetur adipisicing elit. Itaque nobis magni velit modi veniam repellendus sapiente nisi error eveniet aut sequi sunt voluptatum aspernatur amet tempore, ex nihil ipsa odio.
                </div>
            </div>
        </section>
    )
}
export default Pagecontact;