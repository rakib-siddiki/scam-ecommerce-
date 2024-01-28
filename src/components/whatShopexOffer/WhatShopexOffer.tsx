import React from "react";
import { SectionTitle } from "../../Core";
import { whatShopexOffer } from "../../Core/db";
import OfferCard from "./OfferCard";

const WhatShopexOffer: React.FC = () => {
  return (
    <div className="container">
      <SectionTitle title="What Shopex Offer" className="mb-10"/>
      <div className="flex items-center gap-6">
        {(whatShopexOffer ?? []).map((item) => (
            <OfferCard key={item.id} {...item} />
        ))}
      </div>
    </div>
  );
};

export default WhatShopexOffer;
