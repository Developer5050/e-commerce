import React from "react";
import { useNavigate } from "react-router-dom";
import "./orderConfirmed.css";
import { FaCheckCircle } from "react-icons/fa";


const OrderConfirmation = () => {
  const navigate = useNavigate();

  return (
    <div className="confirmation-container">
      <div className="confirmation-card">
        <FaCheckCircle size={50} color="#28a745"/>
        <h2>Order Confirmed!</h2>
        <p>Your order has been successfully placed.</p>
        <p>Thank you for shopping with us!</p>
        <button onClick={() => navigate("/")} className="back-btn">
          Continue Shopping
        </button>
      </div>
    </div>
  );
};

export default OrderConfirmation;
