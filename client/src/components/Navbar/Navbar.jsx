import React from "react";
import Insta from "../../assets/insta.png";
import Tiktok from "../../assets/tiktok.png";
import Account from "../../assets/account.png";
import Search from "../../assets/search1.png";
import Cart from "../../assets/cart.png";

const Navbar = () => {
  return (
    <div className="navbar absolute top-0 left-0 w-full font-medium p-4 z-10">
      <div className="flex justify-between items-center">
        {/* Left Side Links */}
        <div className="flex space-x-4 text-white">
          <h4>Theme Features</h4>
          <h4>Blog</h4>
          <h4>FAQ</h4>
        </div>

        {/* Right Side Icons and Links */}
        <div className="flex items-center space-x-4 text-white">
          <img src={Insta} alt="Instagram" className="w-6 h-6" />
          <img src={Tiktok} alt="TikTok" className="w-6 h-6" />
          <h4>Gift Card</h4>
          <h4>CAD $</h4>
        </div>
      </div>
      <div className="hr w-max-full text-[#d7cece] h-[1px] z-40 mt-4 mb-3">
        <hr />
      </div>
      <div className="flex justify-between items-center text-white">
        <div className="flex space-x-2">
          <h4>Shop</h4>
          <h4>Featured</h4>
          <h4>About</h4>
        </div>
        <div className="text-5xl font-serif">Cabrini Luxury</div>
        <div className="flex space-x-4 gap-1">
          <img src={Account} alt="account" className="w-6 h-6" />
          <img src={Search} alt="search" className="w-6 h-6" />
          <img src={Cart} alt="cart" className="w-6 h-6" />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
