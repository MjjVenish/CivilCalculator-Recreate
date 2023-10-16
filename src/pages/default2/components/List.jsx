import React from "react";
import { useUserContext } from "../utils/hooks/userContext";
import { AiOutlineMinusCircle } from "react-icons/ai";
import "../style/list.css";

const List = () => {
  const { history, handledelete } = useUserContext();
  return (
    <>
      {history.length > 0 ? (
        <div className="list-parent">
          <h2 className="list-heading">Area of Room/Passsage</h2>
          <ul className="list-ul">
            {history.map((his) => (
              <li className="list-li" key={his.id}>
                <div>
                  <h3 className="list-div3">{his.roomtype}</h3>
                  <h4 className="list-div3">
                    (
                    <span>
                      {(
                        parseFloat(his.lengthFeet) +
                        parseFloat(his.lengthInches) / 12
                      ).toFixed(2)}
                      ft<sup>2</sup>
                    </span>
                    <span>X</span>
                    <span>
                      {(
                        parseFloat(his.widthFeet) +
                        parseFloat(his.widthInches) / 12
                      ).toFixed(2)}
                      ft<sup>2</sup>
                    </span>
                    )
                  </h4>
                </div>

                <div className="list-div1">
                  <h4 className="list-sumofnum">
                    {his.sum.toFixed(3)}ft<sup>2</sup>
                  </h4>
                  <div className="list-div2">
                    <AiOutlineMinusCircle
                      className="list-btn"
                      onClick={() => handledelete(his.id)}
                    />
                  </div>
                </div>
              </li>
            ))}
          </ul>
        </div>
      ) : (
        <></>
      )}
    </>
  );
};

export default List;
