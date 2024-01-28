import React from 'react'
import { Iproducts } from '../../Core/typs'
interface IProps extends Iproducts {}
const LeatestCardDetails: React.FC<IProps> = ({ name, price, priceCut }) => {
  return (
    <div className="relative z-20 flex items-center justify-between px-2 py-1 after:absolute after:w-full after:h-full after:-z-10 after:top-0 after:left-0 after:rounded-b-lg after:group-hover:bg-primary-700/80 after:transition after:duration-300 after:ease-linear">
      <h5 className="text-primary-900 group-hover:text-white/90">{name}</h5>
      <div className="flex items-center gap-2">
        <p className="price text-primary-900 group-hover:text-white/90">
          {price}
        </p>
        <p className="price-cut text-accent-500 ">{priceCut}</p>
      </div>
    </div>
  );
};

export default LeatestCardDetails
