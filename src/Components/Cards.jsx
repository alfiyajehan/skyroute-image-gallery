import React from 'react';


const Cards = ({ cardsData }) => {

  return (
    <div className="w-full min-h-screen flex flex-col items-center gap-4 sm:gap-12 bg-black">
      {cardsData.map((card) => (
        <div
          key={card.id}
          className="w-[90%] sm:h-[90vh] sticky top-0 rounded-[1em] flex flex-col sm:flex-row justify-between items-center sm:px-16 "
          style={{ backgroundColor: card.color }}
        >

          <div className="px-10 sm:px-0 sm:w-1/2 z-10 flex flex-col">
            <h1 className={` font-bold mb-4 sm:mb-6 mt-10 sm:mt-0 font-[billy] text-5xl sm:text-7xl text-${card.textColor}`}>{card.title}</h1>

            <p className={` sm:mt-[4em] mb-7 font-[Times] text-sm sm:text-lg font-extralight text-${card.textColor}`}>{card.info}</p>
          </div>

          <div className="w-[70%] sm:w-1/2 flex justify-end items-end relative sm:pr-[4em]">
            <img
              src={card.img}
              alt={`Slide ${card.id}`}
              className="object-fit-cover w-[400px] h-[300px] mb-2 sm:mb-0 sm:h-[500px] rounded-[3px]"
            />
          </div>
        </div>
      ))}
    </div>
  );
};

export default Cards;
