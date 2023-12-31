import React from "react";
import banner1 from "../../assets/banner/banner1.png";
// import banner2 from "../../assets/banner/banner2.png";
const Banner: React.FC = () => {
  return (
    <section className="bg-shade-50">
      <div
        style={{ backgroundImage: `url(${banner1})` }}
        className=" w-full min-h-svh bg-top bg-contain bg-no-repeat"
      ></div>
    </section>
  );
};

export default Banner;
