import React from "react";

const UnitSelect = ({ unitValue }) => {
  const handleChange = (e) => {
    unitValue(e.target.value);
  };
  return (
    <div className="cem-unit lg-des">
      <label htmlFor="Unit">Unit</label> <br />
      <select name="unit" id="Unit" onChange={handleChange}>
        <option value="Meter/CM">Meter/CM</option>
        <option value="Feet/Inch">Feet/Inch</option>
      </select>
    </div>
  );
};

export default UnitSelect;
