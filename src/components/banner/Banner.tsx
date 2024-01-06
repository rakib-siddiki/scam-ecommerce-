import React from "react";
import MySlider from "../../Core/MySlider";
// import banner2 from "../../assets/banner/banner2.png";
const Banner: React.FC = () => {
  const data = [
    {
      img: "/src/assets/banner/banner1.png",
    },
    {
      img: "/src/assets/banner/banner2.png",
    },
    {
      img: "/src/assets/banner/banner1.png",
    },
  ];
  return (
    <section className="bg-shade-50">
      <MySlider>
        {data.map((item) => (
          <div className="w-full">
            <img src={item.img} alt="banner" />
          </div>
        ))}
      </MySlider>
    </section>
  );
};

export default Banner;
