import React, { useEffect } from "react";
import "./home.css";
import CustomSlider from "../../components/customSlider/CustomSlider";
import Image from "../../data/Image";
import { useNavigate } from "react-router-dom";
import { fetchProducts } from "../../features/cart/productSlice";
import { useDispatch, useSelector } from "react-redux";
import { STATUSES } from "../../features/cart/productSlice";

const Home = ({ id }) => {
  const dispatch = useDispatch();
  const { data: products, status } = useSelector((state) => state.product);
  const navigate = useNavigate();

  useEffect(() => {
    dispatch(fetchProducts());
  }, [dispatch]); // ✅ Added `dispatch` to the dependency array

  const handleProduct = (id) => {
    navigate(`/product/${id}`);
  };

  if (status === STATUSES.LOADING) {
    return <h1>Loading....</h1>;
  }

  return (
    <div>
      <CustomSlider>
        {Image.map((image, index) => (
          <img key={index} src={image.imgURL} alt={image.imgAlt} />
        ))}
      </CustomSlider>

      <div className="productWrapper">
        <div className="section-title">
          <h2>
            <span className="orange-text">All</span> Products
          </h2>
        </div>

        <div className="productGrid">
          {products.map((product, index) => (
            <div className="card" key={index}>
              <img src={product.image} alt="" className="productImage" />
              <h4>{product.title}</h4>
              <h5>{product.price}</h5>
              <button className="btn" onClick={() => handleProduct(product.id)}>
                View Product
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Home;

