import React from 'react'
import { GiDonerKebab, GiPizzaSlice, GiFullPizza, GiHamburger, GiCakeSlice } from "react-icons/gi";
import { MdEmojiFoodBeverage } from "react-icons/md";

const Category = () => {
  return (
    <div className='max-w-[1640px] mx-auto px-4 py-12'>
      <h1 className='text-red-600 font-bold text-4xl text-center uppercase'>Kategoriler</h1>

      <div className='grid grid-cols-2 md:grid-cols-4 gap-6 py-6'>

      <div className='bg-gray-200 rounded-lg p-4 flex items-center justify-between'>
        <h2 className='font-bold text-xl max-sm:text-base text-rose-500'>Döner</h2>
        <GiDonerKebab size={60} className='text-rose-500'/>
      </div>

      <div className='bg-gray-200 rounded-lg p-4 flex items-center justify-between'>
        <h2 className='font-bold text-xl max-sm:text-base text-rose-500'>Pide</h2>
        <GiPizzaSlice size={60} className='text-rose-500'/>
      </div>

      <div className='bg-gray-200 rounded-lg p-4 flex items-center justify-between'>
        <h2 className='font-bold text-xl max-sm:text-base text-rose-500'>Pizza</h2>
        <GiFullPizza size={60} className='text-rose-500'/>
      </div>

      <div className='bg-gray-200 rounded-lg p-4 flex items-center justify-between'>
        <h2 className='font-bold text-xl max-sm:text-base text-rose-500'>Hamburger</h2>
        <GiHamburger size={60} className='text-rose-500'/>
      </div>

      <div className='bg-gray-200 rounded-lg p-4 flex items-center justify-between'>
        <h2 className='font-bold text-xl max-sm:text-base text-rose-500'>Tatlı</h2>
        <GiCakeSlice size={60} className='text-rose-500'/>
      </div>

      <div className='bg-gray-200 rounded-lg p-4 flex items-center justify-between'>
        <h2 className='font-bold text-xl max-sm:text-base text-rose-500'>İçecek</h2>
        <MdEmojiFoodBeverage size={60} className='text-rose-500'/>
      </div>
      
      </div>
    </div>
  )
}

export default Category