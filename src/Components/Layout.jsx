import React, { useEffect } from 'react'
import Nav from './Nav'
import { Outlet } from 'react-router-dom'
import ThemeToggle from './Theme/ThemeToggle ';
import useThemeStore from '../store/useThemeStore ';

const Layout = () => {
  const { theme } = useThemeStore();
  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
  }, [theme]);
  return (
    <>
        <main>
        <Nav />
          <Outlet />
      <ThemeToggle />
        </main>
    </>
  )
}

export default Layout