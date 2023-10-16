import React from 'react';

function Dropdown(props){
     return(
        <select value={props.value} onChange={props.onChange}>
        <option>{props.option}</option></select>
     )
}
export default Dropdown;