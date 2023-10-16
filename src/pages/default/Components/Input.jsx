import React from "react";
import PropTypes from 'prop-types';
import "./Input.css";

export const Input = (props) =>{
    return(
        <input className="inputstyle" type={props.type} value={props.value} onChange={props.onChange}/>
    );
}
Input.propTypes = {
    type : PropTypes.number.isRequired,
    onChange: PropTypes.func,
};