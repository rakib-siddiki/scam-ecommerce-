import { FC } from "react";
import { Iproducts } from "./typs";
import cn from "../utils/cn";
import { Icons } from "./Icons";
interface IProps extends Iproducts {
  cardWidth: string;
  cardName: string;
}
const Card: FC<IProps> = ({
  name,
  image,
  price,
  saleImg,
  productCode,
  cardWidth,
  cardName,
}) => {
  return (
    <div className=" flex flex-col gap-4 ml-96 mt-16 ">
      <div
        className={cn(
          "bg-white  shadow-custom relative group  duration-300 ease-in",
          cardWidth,
          cardName === "featured-Products"
            ? "rounded-lg hover:bg-primary-700/80"
            : "rounded-sm hover:bg-primary-800"
        )}
      >
        <div
          className={cn(
            "bg-gray-50 px-9 pt-10 pb-3 group-hover:bg-gray-100 transition-all duration-300 ease-in relative",
            cardName === "featured-Products" ? "mb-3" : "mb-0"
          )}
        >
          <img className="mx-auto" src={image} alt={name} />
          {cardName === "leatest-Products"&& <div className=" absolute top-3 left-2 opacity-0 group-hover:opacity-100 transition-all duration-300 ease-linear">
            <img src={saleImg} alt={name} />
            </div>}
          <div
            className={cn(
              "flex items-center gap-2 absolute  left-2 opacity-0 group-hover:opacity-100 transition-all duration-500",
              cardName === "featured-Products" ? "top-2.5" : "flex-col bottom-6"
            )}
          >
            <div className="icon-container">
              <Icons.ShoppingCart className="w-4 h-4" />
            </div>
            <div className="icon-container">
              <Icons.Heart className="w-4 h-4" />
            </div>
            <div className="icon-container">
              <Icons.ZoomIn className="w-4 h-4" />
            </div>
          </div>
        </div>

        {cardName === "featured-Products" ? (
          <div className="flex flex-col gap-1 items-center justify-center mb-8">
            <h4 className="text-accent-500 transition-all group-hover:text-gray-50">
              {name}
            </h4>
            <h5 className="text-primary-800/50 transition-all group-hover:text-gray-200">
              {productCode}
            </h5>
            <p className="price text-primary-900 transition-all group-hover:text-accent-500">
              {price}
            </p>
          </div>
        ) : (
          <div className="flex justify-between items-center px-2 py-1">
            <h5 className="text-primary-900 group-hover:text-white/90">
              Comfort Handy Craft
            </h5>
            <div className="flex items-center gap-2">
              <p className="price text-primary-900  group-hover:text-white/90">
                {price}
              </p>
              <p className="price-cut text-accent-500 ">$65.00</p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Card;
