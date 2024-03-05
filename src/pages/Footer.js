import React from 'react'
import { useEffect, useState } from 'react';
import footerlogo from './images/footer_logo.png'
import { Link } from 'react-router-dom';
const Footer = () => {
 
  const [faqData, setFaqData] = useState([]);
  const [answersVisible, setAnswersVisible] = useState([]);

  useEffect(() => {
      
      const fetchedFaqData = [
          { id: 1, question: "How much is the ticket for?", answer: "We’re glad to share that is a charge-free community and tickets are sent out before the event on a first come first serve basis" },
          { id: 2, question: "What will be the venue for the event?", answer: "All the editions of the event will be held at the campus of the KIET Group Of Institutions, Ghaziabad until and unless specified otherwise" },
          { id: 3, question: "What if I have some doubts regarding the event?", answer: "Feel free to reach us out at raj.2125csit1154@kiet.edu or ananya.2226csit1059@kiet.edu" },
          { id: 4, question: "How do I stay updated on notifications and news for the next edition?", answer: "Follow us on Instagram (thm.kiet) to stay updated about the regular editions of the event." }
      ];

      setFaqData(fetchedFaqData);
    
      setAnswersVisible(Array(fetchedFaqData.length).fill(false));
  }, []);

  const toggleAnswer = (index) => {
      setAnswersVisible((prevAnswersVisible) => {
          const newAnswersVisible = [...prevAnswersVisible];
          newAnswersVisible[index] = !newAnswersVisible[index];
          return newAnswersVisible;
      });
  };

  return (
   
        
    <div>
  
<footer
  className="bg-black text-center lg:text-left">

<div className="faq_section_main">

<div className="faq_section">
<div className="py-10 bg-black sm:py-16 lg:py-24">
   <div className="px-4 mx-auto sm:px-6 lg:px-8 max-w-6xl">

       <div className="max-w-2xl mx-auto text-center mb-12">
           <h2 className="text-3xl font-bold leading-tight text-white sm:text-4xl lg:text-5xl">
           FAQ’s
           </h2>
       </div>

       <div className="flex flex-col gap-4">
                   {faqData.map((faq, index) => (
                       <div
                           key={index}
                           className="transition-all duration-300 bg-[#1e1e1e] drop-shadow-[5px_5px_0_#0A0A0A]  shadow-lg cursor-pointer  " 
                       >
                           <button
                               type="button"
                               onClick={() => toggleAnswer(index)}
                               className="flex items-center justify-between w-full px-4 py-5 text-left sm:p-6"
                           >
                               <span className="flex text-lg font-semibold text-white">{faq.question}</span>
                               <svg
                                   xmlns="http://www.w3.org/2000/svg"
                                   fill="none"
                                   viewBox="0 0 24 24"
                                   stroke="currentColor"
                                   className={`w-6 h-6 text-white ${answersVisible[index] ? 'transform rotate-0' : 'transform rotate-180'}`}
                               >
                                   <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                               </svg>
                           </button>
                           <div
                               id={`answer${index}`}
                               className="px-4 pb-5 sm:px-6 sm:pb-6 text-white"
                               style={{ display: answersVisible[index] ? 'block' : 'none' }}
                           >
                               <p>{faq.answer}</p>
                           </div>
                       </div>
                   ))}
                   </div>
               </div>
               </div>
       </div>
</div>
  
  <div className="mx-6 sm:mx-56 py-10 text-center md:text-left">
    <div className="grid-1 grid gap-0 sm:gap-8 md:grid-cols-2 lg:grid-cols-3">
    
      
      <div >
        <h6
          className="text-white text-xl mb-4 flex justify-center font-semibold uppercase md:justify-start">
          Explore
        </h6>
        <p className="mb-4">
          <a href="https://www.kiet.edu/" target='_blank' className="text-white"
            >KIET Group of Institutions</a>
        </p>
        <p className="mb-4">
          <a href="/about" className="text-white"
            >About Us</a>
        </p>
        <p className="mb-4">
          <a href="https://discord.gg/zCHzmxADmZ" target='_blank' className="text-white"
            >Join Us</a>
        </p>
      </div>

      <div className="">
        <h6
          className="mb-4 flex justify-center font-semibold uppercase md:justify-start">
          ‎ 
        </h6>
        <p className="mb-4">
          <a href="/event" className="text-white"
            >Chapter Guidelines</a>
        </p>
        <p className="mb-4">
          <a href="/team" className="text-white"
            >Meet the team</a          >
        </p>
        <p className="mb-4">
          <a href="/footer" className="text-white"
            >FAQs</a          >
        </p>
        
      </div>
    
      
      <div className="">
        <h6
          className="mb-4 flex items-center justify-center font-semibold uppercase md:justify-start">
          ‎
        </h6>
        <p className='text-white gap-2 '>
        Write to us at: ‎ <a href='mailto:technocrats@kiet.edu' className='font-semibold text-white'> technocrats@kiet.edu</a>
        </p>
      </div>
    </div>
  </div>

  <div className="bg-black p-6 text-center dark:bg-neutral-700 flex flex-col sm:flex-row sm:justify-around items-center gap-6">
 <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3497.893214057894!2d77.49584577474205!3d28.75260507861928!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390cf47204fb9241%3A0xd11ed4123c7691fe!2sKIET%20GROUP%20OF%20INSTITUTIONS%2C%20Muradnagar%2C%20Uttar%20Pradesh%20201206!5e0!3m2!1sen!2sin!4v1708115942846!5m2!1sen!2sin" className='w-[90vw] h-[80vw] sm:w-[1087px] sm:h-[341px]' style={{border:0}} allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>  
  </div>

 
  
  <div className="bg-black p-6 text-center dark:bg-neutral-700 flex flex-col sm:flex-row sm:justify-around items-center gap-6 sm:pb-10">
  <Link to="/home"> <img src={footerlogo} alt="" className='w-[70vw] sm:w-[20vw]' /></Link>
    <span className='text-white'>© Copyright 2023 Technocrats - Developed by Technocrats</span>    
  </div>

</footer>
    </div>
  )
}

export default Footer
