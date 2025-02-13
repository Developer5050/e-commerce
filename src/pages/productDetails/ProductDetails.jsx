import React, { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import "./productDetails.css";
import { add } from "../../features/cart/cartSlice";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux"; // add

const ProductDetails = () => {
  const { id } = useParams();
  // console.log(id, "deeedededde");

  const cart = useSelector((state) => state.cart || { items: [] }); // ✅ Ensure state.cart exists // add
  // console.log(cart); // add

  const dispatch = useDispatch();
  const [product, setProduct] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        setLoading(true);
        setError("");

        const res = await fetch(`https://fakestoreapi.com/products/${id}`);

        if (!res.ok) {
          throw new Error(`HTTP error! Status: ${res.status}`);
        }

        // Check if response body is empty before parsing JSON
        const text = await res.text();
        if (!text) {
          throw new Error("Empty response from server");
        }

        const data = JSON.parse(text);
        setProduct(data);
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };

    fetchProduct();
  }, [id]);

  // new line
  const handleAddCart = () => {
    dispatch(
      add({
        productId: product.id,
        quantity: 1,
        product,
      })
    );
  };

  if (loading) {
    return <h2>Loading product details...</h2>;
  }

  if (error) {
    return <h2>Error: {error}</h2>;
  }

  if (!product) {
    return <h2>Product not found.</h2>;
  }

  return (
    <div className="main-content">
      <h1 className="heading">Product</h1>
      <div className="product-details">
        <img src={product.image} alt={product.title} width={250} />
        <div className="product-content">
          <h2>{product.title}</h2>
          <p>{product.description}</p>
          <h3>Price: ${product.price}</h3>
          <div>
            {/* new line */}
            <button onClick={handleAddCart}>Add to Cart</button>
          </div>
          <br />
          <Link to="/">← Back to Products</Link>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
