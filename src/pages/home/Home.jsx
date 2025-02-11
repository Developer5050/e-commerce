import React, { useEffect, useState } from "react";
import "./home.css";
import CustomSlider from "../../components/customSlider/CustomSlider";
import Image from "../../data/Image";
import { useNavigate } from "react-router-dom";
import { fetchProducts } from "../../features/cart/productSlice";
import {useDispatch, useSelector} from "react-redux";
import { STATUSES } from "../../features/cart/productSlice";

const Home = ({id}) => {
  // const [products, setProducts] = useState([]);

  const dispatch = useDispatch();

  const {data: products , status} = useSelector(state => state.product);

  const navigate = useNavigate();

  useEffect(() => {
    dispatch(fetchProducts());
    // const fetchProducts = async () => {
    //   const response = await fetch("https://fakestoreapi.com/products");
    //   const data = await response.json();
    //   console.log(data);
    //   setProducts(data);
    // };

    // fetchProducts();
  }, []);

  const hanldeProduct = (id) => {
    navigate(`/product/${id}`);
  };

  if(status === STATUSES.LOADING){
    return <h1>Loading....</h1>
  }

  return (
    <div>
      <CustomSlider>
        {Image.map((image, index) => {
          return <img key={index} src={image.imgURL} alt={image.imgAlt} />;
        })}
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
              <button className="btn" onClick={() => hanldeProduct(product.id)}>
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
