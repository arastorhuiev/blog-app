export const Header = () => {
  return (
    <header className='bg-blog-dark h-20'>
      <nav className='flex px-6 py-6'>
        <span className='text-lg font-semibold text-white mr-16 hover:underline hover:underline-offset-8 decoration-4'>
          Blog
        </span>
        <ul className='flex flex-row justify-between text-white'>
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
        <div className='space-y-2'>
          <div className='w-5 h-0.5 bg-white'></div>
          <div className='w-5 h-0.5 bg-white'></div>
          <div className='w-5 h-0.5 bg-white'></div>
        </div>
      </nav>
    </header>
  );
};
