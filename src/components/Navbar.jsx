import React from 'react'
import { useState } from 'react';

const Navbar = () => {
  const [toggle, setToggle] = useState(false);
  return (
    <nav className="flex justify-between uppercase p-10 ">
        <div>
            <h2>Instrument</h2>
        </div>
        <div className="flex">
            <a href='/#about' className="pr-[100px] md:flex hidden">What We do</a>
            <a href='/#explore' className="pr-[100px] md:flex hidden">Who We Are</a>
            <a href='/#explore' className="pr-[100px] md:flex hidden">Being Here</a>
            <a href='/#contact' className="md:flex hidden">Careers</a>
        </div>
        <div className="sm:hidden flex flex-1 justify-end items-center">
          <img
            alt='menu'
            src={toggle ? 'close.png' : 'menu.png'}
            className="w-[30px] h-[30px] object-contain"
            onClick={() => setToggle((prev) => !prev)}
          />


        <div
          className={`${
            toggle ? "flex" : "hidden"
          }  absolute top-20 right-0 mx-4 my-2 min-w[140px] rounded-xl sidebar text-white `}
        >
          <div className='grid'>
            <a href='/#about' className="pb-4">What We do</a>
            <a href='/#explore' className="pb-4">Who We Are</a>
            <a href='/#explore' className="pb-4">Being Here</a>
            <a href='/#contact' >Careers</a>
        </div>
      
        </div>
      </div>
    </nav>
  )
}

export default Navbar