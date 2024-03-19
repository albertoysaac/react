import React, { useState, useEffect } from "react";
import { Clock } from "react-bootstrap-icons";

const Counter = ({ seconds }) => {
  const digits = String(seconds).padStart(6, "0").split("");

  return (
    <div className="counter container-fluid row bg-dark p-3">
      <div className="col count d-flex justify-content-center align-items-center ms-3">
        <Clock />
      </div>
      {digits.map((digit, index) => (
        <div
          key={index}
          className="col count d-flex justify-content-center align-items-center mx-2"
        >
          {digit}
        </div>
      ))}
    </div>
  );
};

export default Counter;
