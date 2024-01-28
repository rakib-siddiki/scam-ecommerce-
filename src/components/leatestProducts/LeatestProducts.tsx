import React from "react";
import { leatestProducts } from "../../Core/db";
import { Link } from "react-router-dom";
import { ProductCard, MySlider, SectionTitle } from "../../Core";
const LeatestProducts: React.FC = () => {
  return (
    <main data-aos="fade-up">
      <div className="container">
        <SectionTitle title="Leatest Products" />
        <MySlider
          slidesToShow={3}
          arrows
          centerMode={true}
          centerPadding="-30px"
        >
          {(leatestProducts ?? []).map((product) => (
            <div key={product.id} className="my-12">
              <Link to={"#"}>
                <ProductCard
                  {...product}
                  className="w-[360px] h-auto"
                  cardName="leatest-Products"
                />
              </Link>
            </div>
          ))}
        </MySlider>
      </div>
    </main>
  );
};

export default LeatestProducts;
