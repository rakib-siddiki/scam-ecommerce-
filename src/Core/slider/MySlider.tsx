import React, { HTMLAttributes } from "react";
import Slider, { Settings } from "react-slick";
// Import css files
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./customDots.css";
import PrevArrow from "./PrevArrow";
import NextArrow from "./NextArrow";
interface Iprops extends HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
  slidesToShow: number;
  centerPadding?: string;
  centerMode?: boolean;
  arrows?: boolean;
  dots?: boolean;
}

const settings: Settings = {
  dots: true,
  infinite: true,
  autoplay: true,
  autoplaySpeed: 2500,
  centerMode: false,
  centerPadding: "0px",
  speed: 500,
  slidesToShow: 1,
  slidesToScroll: 1,
  arrows: true,
  nextArrow: <NextArrow />,
  prevArrow: <PrevArrow />,
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        infinite: true,
        dots: true,
      },
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        centerMode: false,
      },
    },
  ],
};

const MySlider: React.FC<Iprops> = ({
  centerPadding,
  slidesToShow,
  centerMode,
  arrows,
  dots,
  children,
}) => {
  const customSettings = {
    ...settings,
    slidesToShow,
    centerPadding,
    centerMode,
    arrows,
    dots,
  };
  return <Slider {...customSettings}>{children}</Slider>;
};

export default MySlider;
