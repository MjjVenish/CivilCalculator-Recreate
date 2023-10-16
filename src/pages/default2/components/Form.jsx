import React, { useState } from "react";
import { useUserContext } from "../utils/hooks/userContext";
import "../style/form.css";

const initial = {
  id: "",
  roomtype: "",
  lengthFeet: "",
  lengthInches: "",
  widthFeet: "",
  widthInches: "",
  sum: 0,
};
const Form = () => {
  const [calculation, setCalculation] = useState(initial);
  const [error, setError] = useState(false);
  const { addHistory } = useUserContext();
  const handleSubmit = (e) => {
    e.preventDefault();
    if (calculation.roomtype.length > 0) {
      const lengthInFeet =
        parseFloat(calculation.lengthFeet) +
        parseFloat(calculation.lengthInches) / 12;
      const widthInFeet =
        parseFloat(calculation.widthFeet) +
        parseFloat(calculation.widthInches) / 12;
      const sum = lengthInFeet * widthInFeet;
      addHistory({ ...calculation, id: new Date(), sum });
      setCalculation(initial);
      setError(false);
    } else {
      setError(true);
    }
  };
  return (
    <div className="Form-parent">
      <form action="" onSubmit={handleSubmit}>
        <h3 className="form-title">CARPET AREA CALCULATOR</h3>
        <div className="form-select-div">
          <label htmlFor="" className="lab-name1">
            Room/Passage
          </label>
          <select
            className="form-select"
            name=""
            id=""
            onChange={(e) =>
              setCalculation({ ...calculation, roomtype: e.target.value })
            }
            value={calculation.roomtype}
          >
            <option value="">Select Type</option>
            <option value="Bedroom">Bedroom</option>
            <option value="Living">Living</option>
            <option value="Balcony">Balcony</option>
            <option value="Dining">Dining</option>
            <option value="Kitchen">Kitchen</option>
            <option value="Passage">Passage</option>
            <option value="Duct">Duct</option>
            <option value="Garden">Garden</option>
            <option value="Bathroom">Bathroom</option>
            <option value="Lobby">Lobby</option>
            <option value="Lift">Lift</option>
            <option value="Gym">Gym</option>
            <option value="Swiming">Swiming Pool</option>
            <option value="Terrace">Terrace</option>
            <option value="Staircase">Staircase</option>
          </select>
          {error ? <h6 className="form-error">select type</h6> : ""}
        </div>
        <div className="form-length-div">
          <label htmlFor="" className="form-name2">
            Length
          </label>
          <div className="form-input-parent">
            <div className="form-input-d1">
              <input
                className="form-input1"
                type="text"
                placeholder="Feet"
                value={calculation.lengthFeet}
                onChange={(e) =>
                  setCalculation({
                    ...calculation,
                    lengthFeet: Number(e.target.value),
                  })
                }
              />
              <span className="form-btn">Feet</span>
            </div>
            <div className="form-input-d1">
              <input
                type="text"
                className=" form-input1"
                placeholder="Inches"
                value={calculation.lengthInches}
                onChange={(e) =>
                  setCalculation({
                    ...calculation,
                    lengthInches: Number(e.target.value),
                  })
                }
              />
              <span className="form-btn">Inches</span>
            </div>
          </div>
        </div>
        <div className="form-length-div">
          <label htmlFor="" className="form-name2">
            Breadth
          </label>
          <div className="form-input-parent">
            <div className="form-input-d1">
              <input
                type="text"
                className="form-input1"
                placeholder="Feet"
                value={calculation.widthFeet}
                onChange={(e) =>
                  setCalculation({
                    ...calculation,
                    widthFeet: Number(e.target.value),
                  })
                }
              />
              <span className="form-btn">Feet</span>
            </div>
            <div className="form-input-d1">
              <input
                className="form-input1"
                type="text"
                placeholder="Inches"
                value={calculation.widthInches}
                onChange={(e) =>
                  setCalculation({
                    ...calculation,
                    widthInches: Number(e.target.value),
                  })
                }
              />
              <span className="form-btn">Inches</span>
            </div>
          </div>
        </div>
        <div className="form-bottom">
          <input className="form-sub" type="submit" value={"Add"} />
        </div>
      </form>
    </div>
  );
};

export default Form;
