import React from 'react'
import { FiChevronRight } from 'react-icons/fi';


const Insta = ({children}) => {
  return (
    <div className='w-full mt-[-2%] mb-[-2%] pt-20 bg-black flex justify-center items-center text-white gap-[1em]'>
          <h1 className='font-[trajan] text-[18px] text-white absolute bottom-[9%]'>
              {children}
          </h1>
        <div>
            <button className='text-black bg-white px-6 py-3 flex rounded-[10px] absolute bottom-[1%] sm:bottom-[8%] right-[32%] sm:right-[28%] font-[times] text-[13px] hover:bg-zinc-700 hover:text-white transition-all duration-400'>
            Visit Now <FiChevronRight className="text-lg " />
            </button>
        </div>
    </div>
  )
}

export default Insta