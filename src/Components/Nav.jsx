import React from 'react';
import { Link } from 'react-router-dom'; 
import ThemeToggle from './Theme/ThemeToggle ';

const Nav = () => {
  return (
    <nav className="bg-blue-800 p-4">
      <div className="containerx mx-auto flex justify-between items-center">
        {/* Right side with other items (replace with your actual items) */}
        <div className="flex items-center space-x-4">
          <Link to={""} className="text-white hover:text-gray-300">
            Home
          </Link>
          <Link to={""} className="text-white hover:text-gray-300">
            Products
          </Link>
        </div>

        {/* Left side with checkout and cart buttons */}
        <div className="flex items-center space-x-4">
          <Link to={""} className="text-white hover:text-gray-300">
            Checkout
          </Link>
          <Link to={""} className="text-white hover:text-gray-300">
            Cart
          </Link>
          <Link to={'/create'} className="text-white hover:text-gray-300">
            Create
          </Link>
          <ThemeToggle/>
        </div>

        
      </div>
    </nav>
  );
};

export default Nav;
