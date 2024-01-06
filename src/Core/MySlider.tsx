import React from "react";
import Slider, { Settings } from "react-slick";
// Import css files
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
const settings: Settings = {
  dots: true,
  infinite: true,
  speed: 500,
  slidesToShow: 1,
  slidesToScroll: 1,
  arrows:false
};
interface Iprops {
  children:React.ReactNode
}
const MySlider: React.FC<Iprops> = ({children}) => {
  return (
    <Slider {...settings} className=" w-full
    ">
     {children}
    </Slider>
  );
};

export default MySlider;
