import React from "react";
import SingleContainer from "../container/SingleContainer";
import { dataCal } from "../data/data";
import { BsInfoCircle } from "react-icons/bs";
import CarpetAreaImg from "../asset/imgs/CarpetArea.png";
import "../style/carpetarea.css";

const CarpetArea = () => {
  return (
    <div className="CarpetArea-parent">
      <h3 className="carpetarea-heading">
        <BsInfoCircle /> is carpet area?
      </h3>
      <h4 className="carpetarea-line">
        Carpet area is the area that can be used to spread a carpet inside the
        house.
      </h4>
      <div className="CarpetArea-p2">
        <img className="carpet-area-div" src={CarpetAreaImg} alt="" />
        <div className="carpet-area-div">
          <ul className="carpetarea-box1">
            {dataCal
              .filter((datas) => datas.id === 1)
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
              .filter((datas) => datas.id === 2)
              .map((data) => (
                <SingleContainer
                  key={data.id}
                  title={data.title}
                  rooms={data.rooms}
                />
              ))}
          </ul>
        </div>
      </div>
      <div className="carpetarea-box2">
        <ul className="carpetarea-box1">
          {dataCal
            .filter((datas) => datas.id === 3)
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
            .filter((datas) => datas.id === 4)
            .map((data) => (
              <SingleContainer
                key={data.id}
                title={data.title}
                rooms={data.rooms}
              />
            ))}
        </ul>
      </div>
      <div className="carpetarea-bottom">
        <h4>How to calculate carpet area?</h4>
        <h3>
          Carpet area = Sum of all Area (Bedroom + Livingroom + Balconies +
          Toilets) — The thickness of the inner walls
        </h3>
      </div>
    </div>
  );
};

export default CarpetArea;
