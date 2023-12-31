import { FC } from "react";
import { Iproducts } from "./typs/Iproducts";
import cn from "../utils/cn";
import { Icons } from "./Icons";
interface IProps extends Iproducts {
  cardWidth: string;
}
const Card: FC<IProps> = ({ name, image, price, productCode, cardWidth }) => {
  return (
    <div className=" flex flex-col gap-4 ml-96 mt-16 ">
      <div
        className={cn(
          "bg-white rounded-lg shadow-custom relative group hover:bg-primary-700/80 duration-500",
          cardWidth
        )}
      >
        <div className="bg-gray-50 px-9 pt-10 pb-3 mb-3 group-hover:bg-gray-100 duration-300 ">
          <img className="mx-auto" src={image} alt={name} />
        </div>
        <div className="flex flex-col gap-1 items-center justify-center mb-12 ">
          <h4 className="text-accent-500 transition-all group-hover:text-gray-50">
            {name}
          </h4>
          <h5 className="text-primary-800/50 transition-all group-hover:text-gray-200">
            {productCode}
          </h5>
          <h5 className="text-primary-900 font-semibold font-secondary transition-all group-hover:text-accent-500">
            {price}
          </h5>
        </div>
      </div>
    </div>
  );
};

export default Card;
