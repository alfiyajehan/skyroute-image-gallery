import React from 'react'
import gsap from 'gsap'

const ArtistSection = () => {
    

  return (
    <div className='main relative w-full h-50 sm:h-full bg-black mt-[-2%]'>
        <div className="img-container w-full h-fit flex absolute top-1/2 -translate-y-1/2 justify-center">
            <img className='w-30 h-30 sm:w-72 sm:h-72 rounded-full object-cover border-4 border-white ' src='https://images.unsplash.com/photo-1658314756268-3552b9ba2784?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8YXJ0aXN0c3xlbnwwfHwwfHx8MA%3D%3D' alt="" />
            <img className='w-30 h-30 sm:w-72 sm:h-72 object-cover rounded-full border-4 border-white ' src='https://images.unsplash.com/photo-1628359355624-855775b5c9c4?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8YXJ0aXN0c3xlbnwwfHwwfHx8MA%3D%3Dhttps://images.unsplash.com/photo-1738784511586-81494be8575b?q=80&w=1935&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' alt="" />
            <img className='w-30 h-30 sm:w-72 sm:h-72 z-20 -translate-x-12 rounded-full border-4 border-white 
             ' src='https://images.unsplash.com/photo-1640622300363-4f295638be2e?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDI3fHx8ZW58MHx8fHx8' alt="" />
            <img className='w-30 h-30 sm:w-72 sm:h-72 object-cover z-10 -translate-x-20 rounded-full border-4 border-white 
             ' src='https://plus.unsplash.com/premium_photo-1677679816924-ed6a818ee634?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDM5fHx8ZW58MHx8fHx8' alt="" />
        </div>
        
    </div>
  )
}

export default ArtistSection;