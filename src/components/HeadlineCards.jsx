import React from 'react'
import kebab from '../images/kebab1.png'
import doner from '../images/doner.png'
import tatli from '../images/tatli.png'

const HeadlineCards = () => {
  return (
    <div className='max-w-[1640px] mx-auto p-4 py-12 grid md:grid-cols-3 gap-6'>
        {/*Card*/}
        <div className='rounded-xl relative'>
            {/*Overlay*/}
            <div className='absolute w-full h-full bg-black/50 rounded-xl text-white flex flex-col gap-3 justify-center items-center'>
                <p className='text-2xl font-bold uppercase'>Kebab Çeşitleri</p>
                <button className='button'>Sipariş Ver</button>
            </div>
            <img src={kebab} className='rounded-xl object-cover max-h-[160px] md:max-h-[200px] w-full' alt="" />
        </div>

        <div className='rounded-xl relative'>
            {/*Overlay*/}
            <div className='absolute w-full h-full bg-black/50 rounded-xl text-white flex flex-col gap-3 justify-center items-center'>
                <p className='text-2xl font-bold uppercase'>Döner Çeşitleri</p>
                <button className='button'>Sipariş Ver</button>
            </div>
            <img src={doner} className='rounded-xl object-cover max-h-[160px] md:max-h-[200px] w-full' alt="" />
        </div>

        <div className='rounded-xl relative'>
            {/*Overlay*/}
            <div className='absolute w-full h-full bg-black/50 rounded-xl text-white flex flex-col gap-3 justify-center items-center'>
                <p className='text-2xl font-bold uppercase'>Tatlı Çeşitleri</p>
                <button className='button'>Sipariş Ver</button>
            </div>
            <img src={tatli} className='rounded-xl object-cover max-h-[160px] md:max-h-[200px] w-full' alt="" />
        </div>
    </div>
  )
}

export default HeadlineCards