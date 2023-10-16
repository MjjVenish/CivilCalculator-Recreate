import React from "react";
import BuiltUpAreaImg from "../asset/imgs/BuiltupArea.png";
import { BsInfoCircle } from "react-icons/bs";
import "../style/builtuparea.css";
const BuiltUpArea = () => {
  return (
    <div className="builtup-parent">
      <h3 className="builtup-heading">
        <BsInfoCircle />
        What is built up area?
      </h3>
      <p>
        Built up area is the area which is totally covered by internal and
        external walls and it also includes ducts & Interior part. It is also
        known as the total covered area of the apartment and is the sum of
        carpet area, area covered by the thickness of walls and includes the
        terrace, balcony and other liveable areas.
      </p>
      <div className="builtup-img">
        <img className="built-area-img" src={BuiltUpAreaImg} alt="" />
      </div>
      <h4 className="built-up-h">What built up area covers?</h4>
      <p className="built-up-p">1.External & Internal walls</p>
      <p className="built-up-p">2.Carpet Area </p>
      <p className="built-up-p">
        3.Utility Ducts & Interior part(sewage/water pipeline, Interior part of
        Door and window AC ducts and shafts etc.)
      </p>
      <p className="built-up-area-p">
        There also is a term which most of us are not aware of, that is
        Plinth/covered Area Basically, the covered area does not include balcony
        and any structure called cantilever. This does not have any kind of
        ground support or from the lower apartment. This, however, is covered in
        Built up area. So, the covered area/plinth area is the area under the
        Roof
      </p>
      <h4>How do we calculate built up area?</h4>
      <p className="built-up-area-p">
        Built up = Area Carpet Area + Area of walls + Area of Utility & Interior
        part Generally, the built up area is 20 % more than the Carpet area.
      </p>
      <div className="built-up-div">
        <h4>Built up Area:</h4>
        <h3>
          Carpet Area + Area of ducts and walls + 1/2 the Area of the terrace
        </h3>
      </div>
    </div>
  );
};

export default BuiltUpArea;
