import React from 'react'
import kid from '../assets/Images/kid.jpg'
import men from '../assets/Images/men.jpg'
import woman from '../assets/Images/woman.jpg'

const Category = () => {
    const list = [
        {
            title:'Men',
            url:men,
        },
        {
            title:'Woman',
            url:woman,
        },
        {
            title:'kid',
            url:kid,
        },
        
    ]
  return (
    <div className='container mx-auto grid grid-cols-1 sm:grid-cols-3 gap-6 '>
      {list.map((img,i)=>{
        return(
            <div key={i} className='relative h-64 transform transition-transform duration-300 hover:scale-105 cursor-pointer'>
                <img src={img.url} alt='' className='w-full h-full object-cover rounded-lg shadow-md'/>
                <div className='absolute top-20 left-12'>
                    <p className='text-xl font-bold'>{img.title}</p>
                    <p className='text-gray-600'>View All</p>
                    </div>
                </div>
        )
      })}
    </div>
  )
}

export default Category
