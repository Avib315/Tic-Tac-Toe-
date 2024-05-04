import React from "react";
import "./xoComponent.scss";
const XOComponent = ({ value = "X", className = "", style = {} }) => {
  return (
    <p className={"XOComponent " + className} style={style}>
      <span className={"spanText"}>{value} </span>{" "}
      <span className="shadow"> {value}</span>
    </p>
  );
};

export default XOComponent;
