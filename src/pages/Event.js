import React from 'react';
import Event from './images/Event.png'; 

const EventSection = () => {
  return (
    <div className='bg-black'>
    <div className="flex flex-col items-center  mx-auto max-w-screen-lg px-4 md:px-0">
      <h1 className='text-6xl text-white mt-28 md:mt-28 text-center'>Upcoming Events</h1>
      <img className="pic1 w-full md:w-[600px] mt-24" src={Event} alt="Upcoming Events" />
    </div>

    </div>
  );
};

export default EventSection;
