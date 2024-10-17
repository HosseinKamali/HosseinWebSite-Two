import React, { useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { products } from "../../../data/data";
import Card from "../card/Card";
import Container from "../container/Container";
import { IoIosArrowBack } from "react-icons/io";
import { IoIosArrowForward } from "react-icons/io";

function SampleNextArrow(props) {
  const { style, onClick } = props;
  return (
    <div
    className="hover:-right-1 hover:bg-slate-500 -right-7 p-3 text-4xl hover:p-3  rounded-full transition-all cursor-pointer duration-300 text-black"
      style={{
        ...style,
        
        
        display: "flex",
        justifyContent: "right",
        alignItems: "center",
        position: "absolute",
        
        bottom:"50%",
      }}
      onClick={onClick} >
      <IoIosArrowForward />
    </div>
  );
}

function SamplePrevArrow(props) {
  const { style, onClick } = props;
  return (
    <div
    className="hover:-left-7 hover:bg-slate-500  text-4xl -left-14 p-3 hover:p-3  rounded-full transition-all cursor-pointer duration-300 text-black"
      style={{
        ...style,
      
       display: "flex",
       justifyContent: "right",
       alignItems: "center",
       position:"absolute",
       bottom:"50%",
       
       zIndex:"1",
       
       
      }}
      onClick={onClick}  >
      <IoIosArrowBack />
    </div>
  );
}

function SliderProducts() {
  const [product] = useState(products);
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 2,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  };

  return (
    <Container>
      <h2 className="text-4xl text-center mt-12 text-amber-300 font-semibold">New In</h2>
      <div className="mx-[50px] mt-8 mb-28">
        <div className=" h-[400px] ">
          <Slider {...settings}>
            {product.map((item, index) => (
              <div key={index} >
                <Card
                  image={item.imageUrl}
                  title={item.title}
                  price={item.price}
                />
              </div>
            ))}
          </Slider>
        </div>
      </div>
    </Container>
  );
}

export default SliderProducts;
