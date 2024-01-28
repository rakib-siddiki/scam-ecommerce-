import React from 'react'

import logo from '../../assets/logo.svg'
import { Icons } from '../../Core'
import SearchBar from './SearchBar'
const Navbar: React.FC = () => {
  const menu: string[] = [
    'Home',
    'Pages',
    'Products',
    'Blog',
    'Shop',
    'Contact',
  ]
  return (
    <nav className="items-center justify-end py-5 lg:flex">
      <div className="container">
        <div className="items-center justify-between lg:flex">
          <div>
            <img src={logo} alt="Nav Logo" />
          </div>
          <div className="items-center lg:flex gap-9">
            {menu.map(item => (
              <menu
                className="font-semibold capitalize duration-200 cursor-pointer font-secondary text-primary-900 hover:text-accent-500"
                key={item}
              >
                {item}
              </menu>
            ))}
          </div>
          <div>
            <SearchBar />
          </div>
        </div>
      </div>

      {/* out of container  */}
      <div className="flex items-center gap-4 mr-10 capitalize text-primary-900">
        <div className="flex items-center gap-1 cursor-pointer">
          <span className="font-semibold">Login</span>
          <Icons.User />
        </div>
        <div className="flex items-center gap-1 cursor-pointer">
          <span className="font-semibold">wishlist</span>
          <Icons.Heart />
        </div>
        <div className="flex items-center gap-1 cursor-pointer">
          <span className="font-semibold">cart</span>
          <Icons.ShoppingCart />
        </div>
      </div>
    </nav>
  )
}

export default Navbar
