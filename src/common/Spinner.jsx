import "./Spinner.css";
import React from "react";

export default function Spinner() {
  return (
    <div className="lds-parent">
      <div className="lds-roller">
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
      </div>
    </div>
  );
}
