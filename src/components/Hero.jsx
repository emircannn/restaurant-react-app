import React from 'react'
import hero from '../images/hero.png'

const Hero = () => {
  return (
    <div className='max-w-[1640px] mx-auto p-4'>
        <div className='max-h-[500px] relative rounded-3xl'>
            {/*! Overlay */}
            <div className='absolute h-full w-full text-white bg-black/60 max-h-[500px] flex rounded-3xl
            justify-center flex-col uppercase'>
                <h1 className='text-3xl sm:text-5xl md:text-6xl lg:text-7xl px-6 font-bold'>
                    <span className='text-rose-600'>Damak</span> Tadını</h1>
                <h1 className='text-4xl sm:text-5xl md:text-6xl lg:text-7xl px-6 font-bold'>Önemseyenlere Özel 
                 <span className='text-rose-600'> Lezzetler.</span></h1>
            </div>
            <img className='max-h-[500px] w-full h-full object-cover rounded-3xl shadow-xl' src={hero} alt="" />
        </div>
    </div>
  )
}

export default Hero