import React from "react";
import "./style.css"


const BtnMain =(props)=>(
    <button type={props.type} className={props.class}>
        {props.text}
    </button>
)
export default BtnMain;