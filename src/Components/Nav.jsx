import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import ThemeToggle from './Theme/ThemeToggle ';
import useThemeStore from '../store/useThemeStore ';

const Nav = () => {
  const { theme } = useThemeStore();
  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
  }, [theme]);
  return (
    <>
      <div className='mt-24'>

        <nav className={`p-4 ${theme === 'dark' ? 'bg-[rgb(36,37,38)] shadow-lg fixed top-0 w-full  z-10' : 'bg-blue-800 fixed top-0 w-full z-10'}`}>
          <div className="containe flex justify-around items-center">
            <div className="flex items-center space-x-4">
              <Link to={"/zustand"} className={`p-4 ${theme === 'dark' ? 'text-[#ba8fff]' : 'text-white'}`}>
                Products
              </Link>
            </div>

            <div className="flex items-center space-x-4">
              <Link to={'/create'} className="text-white hover:text-gray-300">
                Create
              </Link>
              <Link to={"/add-to-cart"} className="text-white hover:text-gray-300">
                Cart
              </Link>
              <ThemeToggle />
            </div>


          </div>
        </nav>
      </div>
    </>
  );
};

export default Nav;
