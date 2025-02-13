import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { remove, updateQuantity } from "../../features/cart/cartSlice";
import { useNavigate } from "react-router-dom";
import "./cart.css";

const Cart = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const products = useSelector((state) => state.cart.items);

  const handleRemove = (productId) => {
    dispatch(remove(productId));
  };

  const handleIncrease = (productId, quantity) => {
    dispatch(updateQuantity({ productId, quantity: quantity + 1 }));
  };

  const handleDecrease = (productId, quantity) => {
    if (quantity > 1) {
      dispatch(updateQuantity({ productId, quantity: quantity - 1 }));
    }
  };

  const handleBilling = () => {
    navigate("/billing");
  };

  return (
    <div className="cartContainer">
      <h3>Cart</h3>
      <div className="tableWrapper">
        <table className="cartTable">
          <thead>
            <tr>
              <th>ProductID</th>
              <th>Title</th>
              <th>Image</th>
              <th>Price</th>
              <th>Quantity</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {products.map((product, index) => (
              <tr key={product.id || index}>
                <td>{product.id}</td>
                <td>{product.title}</td>
                <td>
                  <img
                    src={product.image}
                    alt={product.title}
                    className="productImage"
                  />
                </td>
                <td>${product.price.toFixed(2)}</td>
                <td>
                  <div className="quantityControl">
                    <button className="quantityBtn" onClick={() => handleDecrease(product.id, product.quantity)}>
                      -
                    </button>
                    <span className="quantity">{product.quantity}</span>
                    <button className="quantityBtn" onClick={() => handleIncrease(product.id, product.quantity)}>
                      +
                    </button>
                  </div>
                </td>
                <td>
                  <button
                    className="removeBtn"
                    onClick={() => handleRemove(product.id)}
                  >
                    Remove
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        <button onClick={handleBilling} className="btn billingBtn">
          Add Billing
        </button>
      </div>
    </div>
  );
};

export default Cart;
