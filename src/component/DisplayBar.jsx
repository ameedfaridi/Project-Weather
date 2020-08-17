import React from "react";

const DisplayBar = (props) => {
  return (
    <div>
      <h1 className="middle-section-h1">{props.temperature}</h1>
      <h2 className="middle-section-h2">{props.name}</h2>
      <h2 className="middle-section-h2C">{props.country}</h2>
      <h3 className="middle-section-h3">{props.condition}</h3>
    </div>
  );
};

export default DisplayBar;
