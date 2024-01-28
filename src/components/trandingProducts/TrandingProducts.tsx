import React from "react";
import { ProductCard, SectionTitle } from "../../Core";
import { tandingProducts } from "../../Core/db";

const TrandingProducts: React.FC = () => {
  return (
    <div className="container">
      <SectionTitle title="Tranding Products" className="mb-10" />
      <div className="flex justify-between">
        {(tandingProducts ?? []).map((product) => (
          <div
            key={product.id}
            data-aos="zoom-in-left"
            className="p-3 shadow group hover:bg-primary-50 hover:transition-all grouphover:duration-300 hover:ease-linear"
          >
            <ProductCard
              {...product}
              cardName="tranding-Products"
              className="shadow-none"
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default TrandingProducts;
