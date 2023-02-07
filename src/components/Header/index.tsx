import { useState } from 'react';

export const Header = () => {
  const [openMenu, setOpenMenu] = useState(false);

  const handleMenu = () => {
    setOpenMenu(() => !openMenu);
  };

  return (
    <header className='bg-blog-dark h-20'>
      <nav className='flex justify-between items-center px-6 py-6'>
        <div className='flex justify-between w-4/12'>
          <span className='text-lg font-semibold text-white mr-6 hover:underline hover:underline-offset-8 decoration-4'>
            Blog
          </span>
          <ul className='hidden sm:flex flex-row justify-between text-white ml-'>
            <li className='text-lg font-semibold mr-6 hover:underline hover:underline-offset-8 decoration-4'>
              All
            </li>
            <li className='text-lg font-semibold mr-6 hover:underline hover:underline-offset-8 decoration-4'>
              Culture
            </li>
            <li className='text-lg font-semibold mr-6 hover:underline hover:underline-offset-8 decoration-4'>
              Ideas
            </li>
            <li className='text-lg font-semibold mr-6 hover:underline hover:underline-offset-8 decoration-4'>
              Technology
            </li>
          </ul>
        </div>
        <div onClick={handleMenu} className='space-y-2 hover:cursor-pointer sm:hidden'>
          <div className='w-7 h-px bg-white'></div>
          <div className='w-7 h-px bg-white'></div>
          <div className='w-7 h-px bg-white'></div>
        </div>
      </nav>
    </header>
  );
};
