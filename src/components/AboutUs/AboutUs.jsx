// import React from 'react';
import Image from '../../assets/images/bg.jpg';
// import Image2 from '../../assets/images/image2.jpg'

const AboutUs = () => {
  return (
    <div className="flex px-20 bg-gray-200 ">
      {/* Left side with text box */}
      <div className="w-1/22 p-3 flex flex-col md:grid-cols-2 ">
        <div className="bg-primary p-8 px-6 py-4 rounded ">
          <h2 className="text-2xl text-white font-bold mt-4"><br/>ABOUT <br/>US</h2>
        </div>
      </div>
      <div className='p-2'>
        <div className="relative py-1 ">
            <img src={Image} className='rounded max-w-[500px] max-h-[500px]' />
        </div>
      </div> 

      <div className="absolute left-20 p-20 animate-float ">
            <img src={Image} className='rounded-full'/>
        </div>
      <div className='flex flex-col justify-center py-4 px-24 md:px-12 lg:px-24 '>
              <p className='font-bold md:text-2xl text-xl py-2 '>
                 Never doubt that a small group of <br/>thoughtful, committed people can <br/>change the world.
              </p>
              <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit.<br/> Corrupti dignissimos eligendi incidunt, ullam necessitatibus quo! <br/>Cum quos neque repellendus tempora, rerum a deleniti?<br/> Cum, dolor! Fugit et iure in blanditiis.</p>
              <div className="flex items-center mt-4">
                <button className="relative group">
                  <span className="custom-btn">Explore More</span>
                  <div className="text-white bg-primary absolute right-0 rounded-full ml-4 top-7 group-hover:bg-gray-300 transition duration-300">
                 <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="4 4 24 28"
                    strokeWidth="2"
                    stroke="currentColor"
                    className="w-6 h-6 ml-2 mt-2">
                    <path strokeLinecap="round" strokeLinejoin="round" d="m12.75 15 3-3m0 0-3-3m3" />
                      </svg>
                    </div>
              </button>
            </div>
            
            </div>
    </div> 
  );
};

export default AboutUs;
