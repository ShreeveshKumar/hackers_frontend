import React from 'react'
import banner from './images/team_banner.png'
import yash from './images/yash.png'
import dhruv from './images/dhruv.png'
import abhinav from './images/abhinav.png'
import rohit from './images/rohit.png'
import raj from './images/raj_pandey.png'
import ananya from './images/ananya_.png'
import kartikey from './images/kartikey.png'
import shreya from './images/shreya.jpg'
import aryan from './images/aryan.png'
import sahil from './images/sahil.png'
import akshay from './images/akshay.png'
// import harveer from './images/harveer.png'



const Team = () => {
    // const banner = './images/team_banner';
    return (
        <div className='team'>
        {/* <Navbar/> */}
            <section className={`bg-black bg-cover bg-no-repeat h-[60vh] sm:h-screen flex flex-col justify-center items-center gap-8 `} style={{ backgroundImage: `url(${banner})` }}>

                <div className="inline-block m-0 text-transparent bg-[url('https://s3-alpha-sig.figma.com/img/94e1/68cb/3a0c7f4b515c899c5550dc4331074056?Expires=1708905600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=cGWCb4cdmGdNk5NfTsy~WmX7iTm-IhvP4PQeXzYOD5eXZiqAcx5Ub4ubIUbQDm2YhcD-rmZK-gLMv69TjhQoV~3bsHSFTGMPlWmnoXi4HAH5nU747R6mGI0~YultVPgiSfX1ag6~IE4hbMTq78V1OQwWIfBcd7K1HarZajFqPKICjti4KU4KQKQGHM34mntqqAc2fZy84-s8irlOZm3cwxHY4tR~ODFGYOSPwhAHfkQ5UVDOcFW6cOvIC8WnD2NrV09zm9cBSfk0lFLRtPIWm6e5uRiOpzXiNQenrgEeAGUFCXhWLJJcq9GaA~a9U3s3JntQ5nBYbtj~4pZNbtNAEA__')] bg-cover bg-no-repeat bg-center bg-clip-text">
                    <h1 className="text-center text-6xl sm:text-9xl font-['inter var'] " style={{ WebkitTextStroke: '1px white' }}>OUR TEAM</h1>
                </div>
                <h2 className='text-center text-white font-semibold font-["inter var"]'>The people Who Work Day and Night To Make It Possible!!</h2>

            </section>

            <section className='bg-black flex flex-col items-center justify-center gap-12 py-12'>
                <div className="new flex flex-col gap-10 sm:flex-row">
                    <div className='flex flex-col items-center justify-center gap-6'>
                        <h3 className='text-red-600 text-2xl font-bold'>Head Of Department</h3>
                        <div className="cards flex flex-col gap-10 sm:flex-row">
                            <div className="image bg-[#404040] w-[65vw] sm:w-[17vw]  p-7 flex flex-col items-center justify-center gap-4 rounded-xl">
                                <img src={abhinav} className='rounded-full w-48  h-48' alt="" />
                                <p className='text-white text-xl font-bold'>Dr Abhinav Juneja</p>
                            </div>
                           
                        </div>

                    </div>
                    <div className='flex flex-col items-center justify-center gap-6'>
                        <h3 className='text-red-600 text-2xl font-bold'>Faculty Co-ordinator</h3>
                        <div className="cards flex flex-col gap-10 sm:flex-row">
                            
                            <div className="image bg-[#404040] w-[65vw] sm:w-[17vw]  p-7 flex flex-col items-center justify-center gap-4 rounded-xl">
                                <img src={rohit} className='rounded-full w-48  h-48' alt="" />
                                <p className='text-white text-xl font-bold'>Dr Rohit Vashisht</p>
                            </div>
                        </div>

                    </div>
                </div>
                <div className="new flex flex-col gap-10 sm:flex-row">
                    <div className='flex flex-col items-center justify-center gap-6'>
                        <h3 className='text-red-600 text-2xl font-bold'>Chapter Lead</h3>
                        <div className="cards flex flex-col gap-10 sm:flex-row">
                            <div className="image bg-[#404040] w-[65vw] sm:w-[17vw]  p-7 flex flex-col items-center justify-center gap-4 rounded-xl">
                                <img src={raj} className='rounded-full w-48  h-48' alt="" />
                                <p className='text-white text-xl font-bold'>Raj Pandey</p>
                            </div>
                           
                        </div>

                    </div>
                    <div className='flex flex-col items-center justify-center gap-6'>
                        <h3 className='text-red-600 text-2xl font-bold'>Chapter Conveners</h3>
                        <div className="cards flex flex-col gap-10 sm:flex-row">
                            
                            <div className="image bg-[#404040] w-[65vw] sm:w-[17vw]  p-7 flex flex-col items-center justify-center gap-4 rounded-xl">
                                <img src={ananya} className='rounded-full w-48  h-48' alt="" />
                                <p className='text-white text-xl font-bold'>Ananya Srivastava</p>
                            </div>
                            <div className="image bg-[#404040] w-[65vw] sm:w-[17vw]  p-7 flex flex-col items-center justify-center gap-4 rounded-xl">
                                <img src={kartikey} className='rounded-full w-48  h-48' alt="" />
                                <p className='text-white text-xl font-bold'>Kartikey Mishra</p>
                            </div>
                        </div>

                    </div>
                </div>
                <div className="new flex flex-col gap-10 sm:flex-row">
                    <div className='flex flex-col items-center justify-center gap-6'>
                        <h3 className='text-red-600 text-2xl font-bold'>PR Lead</h3>
                        <div className="cards flex flex-col gap-10 sm:flex-row">
                            <div className="image bg-[#404040] w-[65vw] sm:w-[17vw]  p-7 flex flex-col items-center justify-center gap-4 rounded-xl">
                                <img src={shreya} className='rounded-full w-48  h-48' alt="" />
                                <p className='text-white text-xl font-bold'>Shreya Punani</p>
                            </div>
                            <div className="image bg-[#404040] w-[65vw] sm:w-[17vw]  p-7 flex flex-col items-center justify-center gap-4 rounded-xl">
                                <img src={aryan} className='rounded-full w-48  h-48' alt="" />
                                <p className='text-white text-xl font-bold'>Aryan Sharma</p>
                            </div>
                        </div>

                    </div>
                    <div className='flex flex-col items-center justify-center gap-6'>
                        <h3 className='text-red-600 text-2xl font-bold'>Graphics Lead</h3>
                        <div className="cards flex flex-col gap-10 sm:flex-row">
                            <div className="image bg-[#404040] w-[65vw] sm:w-[17vw]  p-7 flex flex-col items-center justify-center gap-4 rounded-xl">
                                <img src={sahil} className='rounded-full w-48  h-48' alt="" />
                                <p className='text-white text-xl font-bold'>Sahil Panwar</p>
                            </div>
                            <div className="image bg-[#404040] w-[65vw] sm:w-[17vw]  p-7 flex flex-col items-center justify-center gap-4 rounded-xl">
                                <img src={akshay} className='rounded-full w-48  h-48' alt="" />
                                <p className='text-white text-xl font-bold'>Akshay Jha</p>
                            </div>
                        </div>

                    </div>
                </div>
                <div className='flex flex-col items-center justify-center gap-6'>
                    <h3 className='text-red-600 text-2xl font-bold'>Logistics Lead</h3>
                    <div className="cards flex flex-col gap-10 sm:flex-row">
                        <div className="image bg-[#404040] w-[65vw] sm:w-[17vw]  p-7 flex flex-col items-center justify-center gap-4 rounded-xl">
                            <img src={yash} className='rounded-full w-48  h-48' alt="" />
                            <p className='text-white text-xl font-bold'>Yash Kumar Gaur </p>
                        </div>
                        <div className="image bg-[#404040] w-[65vw] sm:w-[17vw]  p-7 flex flex-col items-center justify-center gap-4 rounded-xl">
                            <img src={dhruv} className='rounded-full w-48  h-48' alt="" />
                            <p className='text-white text-xl font-bold'>Dhruv Sharma</p>
                        </div>
                    </div>

                </div>
            </section>
       
        </div>
    )
}

export default Team
