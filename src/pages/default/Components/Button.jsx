import  React from 'react';
import PropTypes from 'prop-types';
import './Button.css';

export const Button = (props) =>{
    return(
        <button className="buttonstyle" onClick={props.onClick}>{props.label} </button>
    );
}
Button.propTypes = {
    label: PropTypes.string.isRequired,
    onClick: PropTypes.func,
};