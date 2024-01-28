import React from "react";
import { Image, MySlider } from "../../Core";
import { Link } from "react-router-dom";
interface IShowCaseProducts {
  img: string;
}
const data: IShowCaseProducts[] = [
    {
      img: "/src/assets/banner/banner2.png",
    },
  {
    img: "/src/assets/banner/banner1.png",
  },
  {
    img: "/src/assets/banner/banner2.png",
  },
];
const ShowCaseProducts: React.FC = () => {
  return (
    <section className="bg-shade-50" data-aos="zoom-in">
      <MySlider slidesToShow={1} centerMode={false} arrows={false} dots={false}>
        {data.map((item) => (
          <div className="w-full" key={item.img}>
            <Link to={"#"} className="outline-none">
              <Image className="w-auto h-[600px] object-fit" src={item.img} alt="banner" />
            </Link>
          </div>
        ))}
      </MySlider>
    </section>
  );
};

export default ShowCaseProducts;
