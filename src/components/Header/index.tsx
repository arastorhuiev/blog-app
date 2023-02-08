import { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';

const OpenMenu = () => {
  return (
    <div className='space-y-2'>
      <div className='w-7 h-px bg-white'></div>
      <div className='w-7 h-px bg-white'></div>
      <div className='w-7 h-px bg-white'></div>
    </div>
  );
};

const CloseMenu = () => {
  return (
    <svg
      className='h-7 w-7 text-white'
      viewBox='0 0 24 24'
      fill='none'
      stroke='currentColor'
      strokeWidth='2'
      strokeLinecap='round'
      strokeLinejoin='round'>
      <line x1='18' y1='6' x2='6' y2='18' />
      <line x1='6' y1='6' x2='18' y2='18' />
    </svg>
  );
};

export const Header = () => {
  const [openNav, setOpenNav] = useState(false);

  return (
    <header className='bg-main-dark'>
      <nav className='h-20 flex flex-row justify-between items-center mx-10'>
        <Link
          to='/'
          className='text-white text-lg font-semibold hover:underline hover:underline-offset-8 decoration-2'>
          Personal Blog
        </Link>
        <ul className='hidden sm:flex space-x-6 text-white text-lg font-semibold decoration-4'>
          <li className='hover:underline hover:underline-offset-8'>
            <NavLink to='/all'>All</NavLink>
          </li>
          <li className='hover:underline hover:underline-offset-8'>
            <NavLink to='/culture'>Culture</NavLink>
          </li>
          <li className='hover:underline hover:underline-offset-8'>
            <NavLink to='/ideas'>Ideas</NavLink>
          </li>
          <li className='hover:underline hover:underline-offset-8'>
            <NavLink to='/tech'>Technology</NavLink>
          </li>
        </ul>
        <div onClick={() => setOpenNav(!openNav)} className='sm:hidden hover:cursor-pointer'>
          {openNav ? <CloseMenu /> : <OpenMenu />}
        </div>
      </nav>
    </header>
  );
};
