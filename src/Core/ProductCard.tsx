import { FC } from "react";
import { Iproducts } from "./typs";
import cn from "../utils/cn";
import { FeaturedCardDetails } from "../components/featuredProducts";
import { LeatestCardDetails } from "../components/leatestProducts";
import { ProductCardHoverIcon, Image } from ".";
import TrandingProductDitails from "../components/trandingProducts/TrandingProductDitails";
interface IProps extends Iproducts {
  className?: string;
  cardName?: string;
}
const ProductCard: FC<IProps> = ({ ...props }) => {
  const { name, image, saleImg, className, cardName } = props;
  return (
    <div
      className={cn(
        "bg-white shadow-custom relative group duration-300 ease-in",
        className
      )}
    >
      <div
        className={cn(
          "bg-gray-50 px-9 pt-10 pb-3 group-hover:bg-gray-100 transition-all duration-300 ease-in relative",
          cardName === "featured-Products" ? "mb-3" : "mb-0",
        )}
      >
        {/* card image  */}
        <Image className="size-32" src={image} alt={name} />
        {/* card image  */}

        {/* if leatest Products */}
        {cardName === "leatest-Products" && (
          <div className="absolute w-full transition-all duration-300 ease-linear opacity-0 top-3 left-10 group-hover:opacity-100">
            {saleImg && (
              <Image className="mx-0 size-20" src={saleImg} alt={name} />
            )}
          </div>
        )}
        {/* if  leatest Products */}
        {cardName && <ProductCardHoverIcon cardName={cardName} />}
      </div>
      {cardName === "featured-Products" ? <FeaturedCardDetails {...props} /> : null}
      {cardName === "leatest-Products" ? <LeatestCardDetails {...props} /> : null}
      {cardName === "tranding-Products" ? <TrandingProductDitails {...props} /> : null}
      
    </div>
  );
};

export default ProductCard;
