import React from "react";
import "../style/carpetarea.css";

const SingleContainer = ({ title, rooms }) => {
  return (
    <div className="con-parent">
      <h3 className="con-heading">{title}</h3>
      <ul>
        {rooms.map((room) => (
          <li style={{ listStyleType: "disc" }}>{room}</li>
        ))}
      </ul>
    </div>
  );
};

export default SingleContainer;
