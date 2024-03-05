import React from 'react';
import HomeBg from './images/HomeBg.png';
import Carousel from './Carousel';
import { Link } from 'react-router-dom';
import About from './About';
import EventSection from './Event';


const Home = () => {
  return (
    <div>

      <div className='team' style={{ backgroundColor: 'black' }}>
        <div className='flex flex-col flex-wrap md:flex-row justify-center items-center
         px-0 md:px-0 '>
          <img className='' src={HomeBg} alt="KIET Chapter" />


          <div className='flex flex-col justify-center '>
            <h1 className=" flex justify-center  gap-2heading text-white  font-bold items-center">
              <span className='text-red-600 text-5xl mr-2'>KIET</span>
              <span className='text-white text-5xl'>CHAPTER</span>
            </h1>
            <div className='flex justify-center place-content-center '>

            <p className="text-white text-2xl md:text-2xl ">
              Remember: Protection is the Goal
            </p>
            </div>
            <div className=" flex justify-center place-content-center items-center pt-5">
              <Link to="/registration">
                <button className="btn-1 bg-red-600 text-white text-lg  px-12 py-3 rounded-xl">
                  Register Now
                </button>
              </Link>
            </div>
          </div>



        </div>
       <About/>
       <EventSection/>
       
        <Carousel/>
      </div>
    </div>
  );
};

export default Home;
