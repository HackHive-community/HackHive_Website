import React from 'react'

const Hero = () => {
  return (
    <div className= "flex justify-center items-center h-4/5 p-20 bg-gray-600" >
        <div className="text-center">
            <h1 className='font-bold  font-sans text-4xl md:text-6xl lg:text-8xl text-slate-100 hover:text-white'>
                HackHive
                
            </h1>
            <p className='font-semibold md:text-sm lg:text-xl text-slate-100'>Driven by Passion, Powered by Students</p>
            <button type='button' className = "text-slate-100 bg-black font-medium px-6 py-3 rounded-2xl mt-8 hover:text-black hover:bg-white">Expore !</button>
      </div>
    </div>
  )
}

export default Hero
