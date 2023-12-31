import React from "react";

import logo from '../assets/Logo.svg'
import { Icons } from "../Core";
import  SearchBar  from "./SearchBar";
const Navbar: React.FC = () => {
  const menu: string[] = ["Home", "Pages", "Shop", "Blog", "Shop", "Contact"];
  return (
    <nav className="lg:flex items-center justify-end">
      <div className="container">
        <div className="lg:flex items-center justify-between">
          <div>
            <img src={logo} alt="Nav Logo" />
          </div>
          <div className="flex items-center gap-9">
            {menu.map((item) => (
              <menu className="font-secondary font-semibold text-primary-900 hover:text-accent-500 duration-200 cursor-pointer capitalize">{item}</menu>
            ))}
          </div>
          <div><SearchBar/></div>
        </div>
      </div>
      <div className="flex items-center gap-4 mr-10 capitalize">
        <div className="flex items-center gap-2">
          <span>Login</span>
          <Icons.User />
        </div>
        <div className="flex items-center gap-2">
          <span>wishlist</span>
          <Icons.Heart />
        </div>
        <div className="flex items-center gap-2">
          <span>cart</span>
          <Icons.ShoppingCart />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;