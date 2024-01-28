import React from "react";
import { IWhatShopexOffer } from "../../Core/typs";
interface IProps extends IWhatShopexOffer {}
const whatShopexOfferDitails: React.FC<IProps> = ({ title, discription }) => {
  return (
    <>
      <h4 className="mb-3 text-2xl text-center text-primary-900">
        {title}
      </h4>
      <p className="text-center text-secondary-500 font-secondary">
        {discription}
      </p>
    </>
  );
};

export default whatShopexOfferDitails;
