import React from 'react'
import { useState } from 'react'
import Menuicon  from '../assets/menu-icon.svg'

const Navbar = () => {

    const  [Toggle , setToggle] = useState(false)

    const handleToggle = ()=>{
        
            setToggle(!Toggle)
    } 

  return (
    <div className='p-5 flex justify-between items-center bg-gray-800  shadow-lg'>
                <h1 className='font-bold p-5 font-sans text-slate-200 text-xl'>HackHive</h1>

            {/* Hamburger menu for the navbar */}
            <div className='lg:hidden'>
                <button type="submit" className='text-slate-200 ' onClick={handleToggle}>
                    <img src= {Menuicon} alt = "Menu Icon" className='w-6 h-6'></img>
                </button>
            </div>



            {/* Navbar for largew display */}

            <nav className='hidden lg:flex'>
                <ul className='flex space-x-20 font-medium text-slate-200 font-sans items-center'>
                    <li><a href="">Projects</a></li>
                    <li><a href="">Events</a></li>
                    <li><a href="">Members</a></li>
                    <li><button className='bg-black  text-white font-sans px-8 py-4 rounded-3xl hover:bg-white hover:text-black' type="button">Join Us!</button></li>
                </ul> 
            </nav>

            {/* Navbar for small screens */}
            <nav className={`absolute right-0 top-16 p-5 bg-gray-700 shadow-md  rounded-md ${Toggle ? 'block' : 'hidden'} lg:hidden `}>
                <ul className='space-y-4 font-sans text-slate-200 mt-4 font-medium'>
                <li><a href="">Projects</a></li>
                    <li><a href="">Events</a></li>
                    <li><a href="">Members</a></li>
                    <li><button className =' bg-black font-thin text-slate-200 font-sans p-2 rounded-2xl w-full' type="button">Join Us!</button></li>
                </ul>
            </nav>
    </div>
  )



}
export default Navbar;