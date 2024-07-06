import React from 'react'
import { useState } from 'react'
import Menuicon  from './assets/menu-icon.svg'

const Navbar = () => {

    const  [Toggle , setToggle] = useState(false)

    const handleToggle = ()=>{
        
            setToggle(!Toggle)
    } 

  return (
    <div className='p-5 flex justify-between items-center bg-white shadow-lg'>
                <h1 className='font-bold p-5 font-sans text-blue-950 text-3xl'>HackHive</h1>

            {/* Hamburger menu for the navbar */}
            <div className='lg:hidden'>
                <button type="submit" className='text-blue-950 ' onClick={handleToggle}>
                    <img src= {Menuicon} alt = "Menu Icon" className='w-6 h-6'></img>
                </button>
            </div>



            {/* Navbar for largew display */}

            <nav className='hidden lg:flex'>
                <ul className='flex space-x-20 font-medium text-blue-950 font-sans items-center'>
                    <li><a href="">Projects</a></li>
                    <li><a href="">Events</a></li>
                    <li><a href="">Members</a></li>
                    <li><button className='bg-blue-950 text-white font-sans p-4 rounded-3xl' type="button">Join Us!</button></li>
                </ul> 
            </nav>

            {/* Navbar for small screens */}
            <nav className={`absolute right-0 top-16 p-5 bg-white shadow-md  rounded-md ${Toggle ? 'block' : 'hidden'} lg:hidden `}>
                <ul className='space-y-4 font-sans text-blue-950 mt-4 font-medium'>
                <li><a href="">Projects</a></li>
                    <li><a href="">Events</a></li>
                    <li><a href="">Members</a></li>
                    <li><button className ='bg-blue-950 font-thin text-white font-sans p-2 rounded-2xl w-full' type="button">Join Us!</button></li>
                </ul>
            </nav>
            {/* <nav className={`absolute right-0 top-0 p-5 bg-white shadow-md  rounded-md  ${Toggle ? 'block' : 'hidden'} lg:hidden`}>
  <ul className='space-y-4 font-sans text-blue-950 mt-4 font-medium'>
    <li><a href="">Projects</a></li>
    <li><a href="">Events</a></li>
    <li><a href="">Members</a></li>
    <li><button className='bg-blue-950 text-white font-sans p-3 rounded-2xl w-full' type="button">Join Us!</button></li>
  </ul>
</nav> */}
    </div>
  )



}
export default Navbar;