import React, { HTMLAttributes } from 'react'
import cn from '../utils/cn'
interface IProps extends HTMLAttributes<HTMLImageElement> {
  src: string
  alt: string
}
const Image: React.FC<IProps> = ({ className, ...props }) => {
  return <img className={cn('size-28 mx-auto', className)} {...props} />
}

export default Image
