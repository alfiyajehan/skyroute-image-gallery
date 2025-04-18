import React from 'react'
import './App.css';
import Nav from './Components/Nav'
import data from './data';
import cardData from './CardData'
import image from './Image'
import { Swiper, SwiperSlide } from 'swiper/react';
import HomeSlider from './Components/HomeSlider';
import Cards from './Components/Cards'
import PhotoGallery from './Components/PhotoGallery'
import gallery from './Gallery'
import Cursor from './Components/Cursor'
import ribbion from './Images/ribbion.png';
import TextSection from './Components/TextSection'
import ArtistSection from './Components/ArtistSection'
import Heading from './Components/Heading';
import Insta from './Components/Insta'

const App = () => {
  return (
    <div className="bg-black w-full h-screen">
      <Cursor />

      <Nav/>
      <div className='flex justify-center items-center w-[100%] h-[7em] gap-[1em]'>
        <img className='w-20 scale-x-[-1]' src={ribbion} />
        <h1 className='font-extrabold text-white text-2xl sm:text-6xl font-[trajan-bold]' >Gallery</h1>
        <img className='w-20 ' src={ribbion} />
      </div>
      <HomeSlider imgs={image}/>
      <Heading>The Art</Heading>
      <Cards cardsData={cardData}/>
      <Heading>The Artist</Heading>
      <ArtistSection />
      <div className='hidden sm:block w-full h-1/2 mt-[-2%] bg-black pt-20'>
        <TextSection /> 
      </div>
      <Heading>Explore Our Art Pieces</Heading>
      <PhotoGallery gallery={gallery} className="bg-black  relative"></PhotoGallery>

    </div>
  )
}

export default App