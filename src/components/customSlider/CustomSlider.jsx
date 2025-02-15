import React, { useEffect, useState, useCallback } from "react";
import "./customSlider.css";

const CustomSlider = ({ children }) => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [slideDone, setSlideDone] = useState(true);

  const slideNext = useCallback(() => {
    setActiveIndex((val) => (val >= children.length - 1 ? 0 : val + 1));
  }, [children.length]);

  const slidePrev = () => {
    setActiveIndex((val) => (val === 0 ? children.length - 1 : val - 1));
  };

  useEffect(() => {
    if (slideDone) {
      setSlideDone(false);
      const timer = setTimeout(() => {
        slideNext();
        setSlideDone(true);
      }, 7000);

      return () => clearTimeout(timer);
    }
  }, [slideDone, slideNext]);

  return (
    <div className="container__slider">
      {children.map((item, index) => (
        <div
          className={`slider__item slider__item-active-${activeIndex + 1}`}
          key={index}
        >
          {item}
        </div>
      ))}

      <div className="container__slider__links">
        {children.map((_, index) => (
          <button
            key={index}
            className={`container__slider__links-small ${
              activeIndex === index
                ? "container__slider__links-small-active"
                : ""
            }`}
            onClick={() => setActiveIndex(index)}
          ></button>
        ))}
      </div>

      <button className="slider__btn-next" onClick={slideNext}>
        {">"}
      </button>
      <button className="slider__btn-prev" onClick={slidePrev}>
        {"<"}
      </button>
    </div>
  );
};

export default CustomSlider;
