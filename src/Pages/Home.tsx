import React from "react";
import {
  Banner,
  FeaturedProducts,
  LatestProducts,
  Navbar,
  ShowCaseProducts,
  TrandingProducts,
  WhatShopexOffer,
} from "../components";

const Home: React.FC = () => {
  return (
    <div>
      <Navbar />
      <div className="flex flex-col gap-y-16 lg:gap-y-20">
        <Banner />
        <FeaturedProducts />
        <LatestProducts />
        <WhatShopexOffer />
        <ShowCaseProducts />
        <TrandingProducts />
      </div>
    </div>
  );
};

export default Home;
