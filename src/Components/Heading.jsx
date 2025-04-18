import React from 'react'
import brush from '../Images/brush.png'

const Heading = ({children}) => {
  return (
    <div className='w-full mt-[-2%] pb-20 pt-20 sm:pt-30 bg-black flex justify-center items-center text-white '>
        <h1 className='font-[billy] text-6xl text-center sm:text-8xl'>
            {children}
        </h1> 
    </div>
  )
}

export default Heading;