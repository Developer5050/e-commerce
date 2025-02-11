import React, { useState } from "react";
import "./cart.css";
import { useSelector, useDispatch } from "react-redux";
import { remove } from "../../features/cart/cartSlice";

const Cart = () => {
  const [count, setCount] = useState(1);

  const products = useSelector((state) => state.cart.items);
  console.log("Product on cart page", products)
  const dispatch = useDispatch();

  const handleRemove = (productId) => {
    dispatch(remove(productId));
  };

  const handleIncrease = () => {
    setCount(count + 1);
  };

  const handleDecrease = () => {
    if (count > 0) {
      setCount(count - 1);
    }
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
            {products.map((product) => (
              <tr key={product.id}>
                <td>{product.id}</td>
                <td>{product.title}</td>
                <td>
                  <img
                    src={product.image}
                    alt={product.title}
                    className="productImage"
                  />
                </td>
                <td>${product.price}</td>
                <td>
                  <div className="quantityControl">
                    <button className="quantityBtn" onClick={handleDecrease}>
                      -
                    </button>
                    <span className="quantity">{count}</span>
                    <button className="quantityBtn" onClick={handleIncrease}>
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
      </div>
    </div>
  );
};

export default Cart;
