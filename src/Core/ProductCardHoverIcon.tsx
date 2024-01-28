import React from 'react'
import { Icons } from '.'
import cn from '../utils/cn'
interface IProps {
  cardName: string
}
const ProductCardHoverIcon: React.FC<IProps> = ({ cardName }) => {
  return (
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
  );
};

export default ProductCardHoverIcon;
