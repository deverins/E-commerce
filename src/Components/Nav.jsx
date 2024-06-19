import React from 'react';
import { Link } from 'react-router-dom'; 

const Nav = () => {
  return (
    <nav className="bg-blue-800 p-4">
      <div className="container mx-auto flex justify-between items-center">
        {/* Left side with checkout and cart buttons */}
        <div className="flex items-center space-x-4">
          <Link to={""} className="text-white hover:text-gray-300">
            Checkout
          </Link>
          <Link to={""} className="text-white hover:text-gray-300">
            Cart
          </Link>
        </div>

        {/* Right side with other items (replace with your actual items) */}
        <div className="flex items-center space-x-4">
          <Link to={""} className="text-white hover:text-gray-300">
            Home
          </Link>
          <Link to={""} className="text-white hover:text-gray-300">
            Products
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Nav;
