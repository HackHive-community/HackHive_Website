import React from 'react'

const Hero = () => {
  return (
    <div className= "flex justify-center items-center h-90 p-20 bg-white-300" >
        <div className="text-center">
            <h1 className='font-bold  font-sans text-4xl md:text-6xl lg:text-8xl text-blue-950 hover:text-blue-300'>
                HackHive
                
            </h1>
            
            <p className='font-semibold md:text-sm lg:text-xl text-blue-950'>Driven by Passion, Powered by Students</p>
            <button type='button' className = "bg-blue-950 text-white font-medium px-6 py-3 rounded-xl mt-8 hover:text-black hover:bg-blue-300">Expore !</button>
      </div>
    </div>
  )
}

export default Hero
