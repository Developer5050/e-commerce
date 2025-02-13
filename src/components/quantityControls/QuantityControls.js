import React from "react";

const QuantityControl = ({ amount, setDecrease, setIncrease }) => {
  return (
    <div className="quantityControl">
      <button className="quantityBtn" onClick={setDecrease}>
        -
      </button>
      <span className="quantity">{amount}</span>
      <button className="quantityBtn" onClick={setIncrease}>
        +
      </button>
    </div>
  );
};

export default QuantityControl;
