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
      className="hover:-right-1 hover:bg-slate-500 -right-7 p-1 text-3xl hover:p-1  rounded-full transition-all cursor-pointer duration-300 text-black"
        style={{
          ...style,
          
          
          display: "flex",
          justifyContent: "right",
          alignItems: "center",
          position: "absolute",
          
          bottom:"55%"
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
      className="hover:-left-7 hover:bg-slate-500  text-3xl -left-14 p-1 hover:p-1  rounded-full transition-all cursor-pointer duration-300 text-black"
        style={{
          ...style,
        
         display: "flex",
         justifyContent: "right",
         alignItems: "center",
         position:"absolute",
         bottom:"55%",
         
         zIndex:"1",
         
         
        }}
        onClick={onClick}  >
        <IoIosArrowBack />
      </div>
    );
  }

const TopFooter = () => {
     
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
                slidesToShow: 1,
                slidesToScroll: 1,
                initialSlide: 1
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
            <div className="p-10">
            <h3 className="text-2xl text-center text-gray-700 font-semibold">Follow Us</h3>
            <h2 className="text-gray-700 font-semibold text-center text-6xl ">Re.vert</h2>

            <div className="sm:mx-[200px] max-sm:mx-[50px] mt-8 mb-28">
              <div>
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
            </div>
          
          </Container>
    );
}
 
export default TopFooter;