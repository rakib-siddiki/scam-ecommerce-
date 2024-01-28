import React from 'react'
import { Link } from 'react-router-dom'
import { Image, MySlider } from '../../Core'
interface IBanner {
  img: string
}
const Banner: React.FC = () => {
  const data: IBanner[] = [
    {
      img: '/src/assets/banner/banner1.png',
    },
    {
      img: '/src/assets/banner/banner2.png',
    },
    {
      img: '/src/assets/banner/banner1.png',
    },
  ]
  return (
    <section className="pb-6 bg-shade-50 h-dvh">
      <MySlider slidesToShow={1} centerMode={false} arrows={false} dots>
        {data.map(item => (
          <div className="w-full" key={item.img}>
            <Link to={'#'} className='outline-none'>
              <Image className="size-fit" src={item.img} alt="banner" />
            </Link>
          </div>
        ))}
      </MySlider>
    </section>
  )
}

export default Banner
