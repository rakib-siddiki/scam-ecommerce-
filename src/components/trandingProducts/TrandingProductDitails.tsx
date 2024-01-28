import React from "react";
import { Iproducts } from "../../Core/typs";
interface IProps extends Iproducts {}
const TrandingProductDitails: React.FC<IProps> = ({
  name,
  price,
  priceCut,
}) => {
  return (
    <div className="ease-linear group-hover:bg-primary-50 group-hover:transition-all group-hover:duration-0">
      <p className="pt-3 font-bold text-center text-primary-900">{name}</p>
      <div className="flex items-center justify-center gap-2 pb-5">
        <p className="text-sm font-semibold text-primary-800">{price}</p>
        <p className="text-xs text-secondary-300 price-cut">{priceCut}</p>
      </div>
    </div>
  );
};

export default TrandingProductDitails;
