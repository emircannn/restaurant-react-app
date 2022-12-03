import React, { useState } from 'react'
import {data} from '../data/data'


const Food = () => {
    console.log(data);

    const [foods, setFoods] = useState(data);

    const filterType = (category) => {
        setFoods(
            data.filter((food) => {
                return food.category === category
            })
        )
    }

  return (
    <div className='max-w-[1640px] mx-auto px-4 py-12'>
        <h1 className='text-rose-600 font-bold text-4xl text-center'>Menü</h1>

        {/*Filter*/}
        <div className='flex flex-col lg:flex-row justify-between items-center'>
            {/*Filter Category*/}
            <div>
                <p className='font-bold text-rose-600'>Kategoriler</p>
                <div>
                    <button onClick={()=> setFoods(data)} className='button m-1'>Hepsi</button>
                    <button onClick={()=> filterType('doner')} className='button m-1'>Döner</button>
                    <button onClick={()=> filterType('pide')} className='button m-1'>Pide</button>
                    <button onClick={()=> filterType('pizza')} className='button m-1'>Pizza</button>
                    <button onClick={()=> filterType('hamburger')} className='button m-1'>Hamburger</button>
                    <button onClick={()=> filterType('icecek')} className='button m-1'>İçecek</button>
                    <button onClick={()=> filterType('tatli')} className='button m-1'>Tatlı</button>
                    <button onClick={()=> filterType('diger')} className='button m-1'>Diğer</button>
                </div>
            </div>
        </div>

        {/*Food*/}
        <div className='grid grid-cols-2 text-xs md:grid-cols-3 md:text-lg lg:grid-cols-4 gap-6 pt-4'>
            {foods.map((food, index) =>(
                <div key={index} className='boder rounded-lg hover:scale-105 duration-300'>
                    <img src={food.image} alt={food.name} 
                    className='w-full h-[200px] object-cover rounded-t-lg'/>
                    <div className='flex justify-between rounded-b-lg hfu bg-rose-600 items-center px-2 py-4'>
                        <p className='font-bold w-[60%] text-start p-1 text-white'>{food.name}</p>
                        <p className='font-semibold w-[40%] text-center p-1 text-white'>{(food.price.toFixed(2))} ₺</p>
                    </div>
                </div>
            ))}
        </div>
    </div>
  )
}

export default Food