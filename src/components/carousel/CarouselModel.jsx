import { Carousel } from "antd";
import React from "react";
const contentStyle = {
  height: "160px",
  color: "#000",
  lineHeight: "160px",
  textAlign: "center",
};

const CarouselModel = (props) => {
  const arrProduct = props;
  
  const renderImg = () => {
    return arrProduct.arrProduct.map((item, index) => {
      return (
        <div className="carousel-img" key={index}>
          <img src={item.image} alt="..." />
        </div>
      );
    });
  };
  return (
    <Carousel autoplay effect="fade">
      {renderImg()}
    </Carousel>
  );
};

export default CarouselModel;
