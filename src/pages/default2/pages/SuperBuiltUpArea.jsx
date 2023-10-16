import React from "react";
import Superbuiltupareaimg from "../asset/imgs/SuperBuiltupArea.png";
import SingleContainer from "../container/SingleContainer";
import { dataCal } from "../data/data";
import { BsInfoCircle } from "react-icons/bs";

import "../style/carpetarea.css";
import "../style/superbuiltuparea.css";
import "../style/builtuparea.css";
const SuperBuiltUpArea = () => {
  return (
    <div className="super-b-area-parent">
      <h3 className="builtup-heading">
        <BsInfoCircle />
        what is Super built up area?
      </h3>
      <p>
        Super Built-up Area is the area calculated by adding the built-up area
        and common area that includes the corridor, lift lobby, lift, etc. In
        some cases, builders even include amenities such as a pool, garden and
        clubhouse in the common area. A Developer/Builder charges you on the
        basis of the super built-up area which is why it is also known as
        ‘saleable’ area.
      </p>
      <div className="builtup-img">
        <img className="built-up-img1" src={Superbuiltupareaimg} alt="" />
      </div>
      <div className="carpetarea-box2">
        <ul className="carpetarea-box1">
          {dataCal
            .filter((datas) => datas.id === 5)
            .map((data) => (
              <SingleContainer
                key={data.id}
                title={data.title}
                rooms={data.rooms}
              />
            ))}
        </ul>

        <ul className="carpetarea-box1">
          {dataCal
            .filter((datas) => datas.id === 6)
            .map((data) => (
              <SingleContainer
                key={data.id}
                title={data.title}
                rooms={data.rooms}
              />
            ))}
        </ul>
      </div>
      <div className="built-up-div">
        <h4>How do we calculate super built up area?</h4>
        <h3>Super built up Area = Built up Area + Proportionate Common area</h3>
      </div>
      <p>
        Here, Proportionate Common area is ducts, Lift, Lobby, Swimming pool,
        Gymnasium (proportioned to the housing unit),elevator, the veranda,
        garden, clubhouse, Staircase, lifts stairs (proportioned to the housing
        unit).
      </p>
      <p>
        In case of Proportionate Common area are not Present then Super Built up
        area and Carpet Area are same.
      </p>
      <p>
        However, if Proportionate Common area are Present then it is added to
        Built up Area.
      </p>
    </div>
  );
};

export default SuperBuiltUpArea;
