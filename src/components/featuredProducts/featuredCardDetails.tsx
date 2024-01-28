import { Iproducts } from "../../Core/typs";

interface IProps extends Iproducts {}
const featuredCardDetails: React.FC<IProps> = ({ name,productCode,price,}) => {
  return (
    <div className="flex flex-col gap-1 items-center justify-center pb-8 relative z-20 after:absolute after:w-full after:h-[120px] after:-z-10 after:-top-3 after:left-0  after:rounded-b-lg after:group-hover:bg-primary-700/80 after:transition after:duration-300 after:ease-linear ">
      <h4 className="transition-all text-accent-500 group-hover:text-gray-50">
        {name}
      </h4>
      <h5 className="transition-all text-primary-800/50 group-hover:text-gray-200">
        {productCode}
      </h5>
      <p className="transition-all price text-primary-900 group-hover:text-accent-500">
        {price}
      </p>
    </div>
  );
};

export default featuredCardDetails;
