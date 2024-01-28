import React from "react";
import { IWhatShopexOffer } from "../../Core/typs";
import WhatShopexOfferDetails from "./WhatShopexOfferDitails";
import { Image } from "../../Core";
interface IProps extends IWhatShopexOffer {
  className?: string;
}
const OfferCard: React.FC<IProps> = ({ ...props }) => {
  return (
    <div data-aos="zoom-in-right" className="p-6 pt-10 shadow-custom hover:bg-primary-50 hover:transition-all hover:duration-300 ">
      <Image src={props.image} alt={props.title} className="mb-5 size-16"  />
      <WhatShopexOfferDetails {...props} />
    </div>
  );
};

export default OfferCard;
