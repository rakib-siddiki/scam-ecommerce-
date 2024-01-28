import React, { HTMLAttributes } from 'react'
import { Icons } from '..'
interface IProps extends HTMLAttributes<HTMLDivElement> {
  onClick?: () => void
}
const NextArrow: React.FC<IProps> = ({ onClick }) => {
  return (
    <div className="absolute flex items-center justify-center rounded-full cursor-pointer size-8 bg-primary-500 top-1/2 -right-10">
      <Icons.ArrowRight onClick={onClick} className="text-white  size-5" />
    </div>
  )
}

export default NextArrow
