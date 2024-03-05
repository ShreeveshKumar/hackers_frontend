import React from "react";
import AboutPic from "./images/Aboutpic.png";
import SmallPic1 from "./images/1.png";
import SmallPic2 from "./images/2.png";
import SmallPic3 from "./images/3.png";
import SmallPic4 from "./images/4.png";
import SmallPic5 from "./images/5.png";
import SmallPic6 from "./images/6.png";
// import Footer from './Footer';

const About = () => {
  return (
    <div className=" bg-black pt-10 overflow-hidden">
      <div className="flex flex-wrap justify-around ">

        <div className="">
          <img src={AboutPic} alt="foccu" className="w-full" />
        </div>


        <div className="flex flex-col w-1/2 ">
           <p className=" text-2xl text-white">What is</p>
           <h1 className="text-red-600 text-5xl font-bold mb-6">
            Hacker's Meet-up
           </h1>
          <p className="text-white mb-5">
            "Hackers Meet up" can refer to various gatherings of hackers and
            cybersecurity enthusiasts. The most prominent one is The Hacker's
            Meetup, a series of monthly events in India focused on sharing
            knowledge and building community around vulnerability research,
            ethical hacking, and security awareness. Other possibilities include
            local meetups, online forums, and platform-specific events.
          </p>
          <div className="flex flex-wrap justify-center items-center w-full">

            <div className="flex justify-around w-screen ">

            <div className="flex flex-col items-center p-4">
              <img className="w-22 h-14   " src={SmallPic1} alt="Small Pic 1" />
              <p className="text-white  mt-6">Learn</p>
            </div>
            <div className="flex flex-col items-center p-4">
              <img className="w-22 h-14" src={SmallPic2} alt="Small Pic 2" />
              <p className="text-white mt-2">Network</p>
            </div>
            <div className="flex flex-col items-center p-4">
              <img className="w-22" src={SmallPic3} alt="Small Pic 3" />
              <p className="text-white mt-2">Contribute</p>
            </div>
      
            </div>
              


            <div className="flex flex-wrap justify-center items-center w-full">
            <div className="flex justify-around w-screen ">

              <div className="flex flex-col items-center p-4">
                <img className="w-18" src={SmallPic4} alt="Small Pic 4" />
                <p className="text-white mt-9">Stay Updated</p>
              </div>
              <div className="flex flex-col items-center p-4">
                <img className="w-18" src={SmallPic5} alt="Small Pic 5" />
                <p className="text-white mt-4">Challenges yourself</p>
              </div>
              <div className="flex flex-col items-center p-4">
                <img className="w-18" src={SmallPic6} alt="Small Pic 6" />
                <p className="text-white mt-4">Fuel your passion</p>
                </div>
                

            </div>

            </div>
          </div>
        </div>
      </div>
      
    </div>
  );
};

export default About;