import React from 'react';
import { assets } from '../assets/assets';

const Sidebar = () => {
  return (
    <div className='w-[25%] h-full p-2 flex-col gap-w text-white hidden lg:flex'>
      <div className='bg-[#121212] h-[15%] rounded flex flex-col justify-around'>
        <div className='flex items-center gap-3 pl-8 cursor-pointer text-white'>
          <img className='w-6' src={assets.home_icon} alt="Home Icon" />
          <p className='font-bold'>Home</p>
        </div>
        <div className='flex items-center gap-3 pl-8 cursor-pointer text-white my-3'>
          <img className='w-6' src={assets.search_icon} alt="Search Icon" />
          <p className='font-bold'>Search</p>
        </div>
      </div>
      <div className='bg-[#121212] h-[85%] rounded'>
        <div className='p-4 flex items-center justify-between'>
          <div className='flex items-center gap-3'>
            <img className='w-8' src={assets.stack_icon} alt="Library Icon" />
            <p>Your Library</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
