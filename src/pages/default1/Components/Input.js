import React from "react";
import "./Input.css";

export const Input = (props) =>{
    return(
        <input className="inputstyle" type={props.type} value={props.value} onChange={props.onChange}/>
    );
}