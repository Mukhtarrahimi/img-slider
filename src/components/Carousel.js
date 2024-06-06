import React from 'react'
import { MdOutlineNavigateNext } from "react-icons/md";
import { GrFormPrevious } from "react-icons/gr";


function Carousel({children: images}) {
  return (
    <div className='relative w-full'>
      <div className='flex overflow-hidden'>{images}</div>
      <div className="buttons absolute inset-0 flex items-center justify-between p-4">
        <button className='bg-gray-800/20 text-white text-3xl cursor-pointer rounded-full p-1'>
          <GrFormPrevious/>
        </button>
        <button className='bg-gray-800/20 text-white text-3xl cursor-pointer rounded-full p-1'>
          <MdOutlineNavigateNext/>
        </button>
      </div>
    </div>
  )
}

export default Carousel
