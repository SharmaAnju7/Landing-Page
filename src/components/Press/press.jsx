// import React from 'react';
import Image from '../../assets/images/bg.jpg';
// import Image2 from '../../assets/images/image2.jpg'

const press= () => {
  return (
    <div className="flex px-20 bg-gray-200 gap-2">

        <div className='flex flex-col justify-center py-14 px-24 md:px-12 lg:px-24 '>
              <p className='font-bold md:text-2xl text-xl py-2 '>
                 Never doubt that a small group of <br/>thoughtful, committed 
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

      {/* right side with text box */}
      <div className="w-1/22 p-2 flex flex-col md:grid-cols-2 py-14">
        <div className="bg-primary p-8 px-8 py-6 rounded ">
          <h2 className="text-2xl text-white font-bold mt-8"><br/>PRESS</h2>
        </div>
      </div>
      <div className='p-0'>
        <div className="relative py-14 ">
            <img src={Image} className='rounded max-w-[500px] max-h-[500px]' />
        </div>
      </div> 

      <div className="absolute right-20 px-40 p-10 animate-float ">
            <img src={Image} className='rounded-full p-10'/>
        </div>
        
    </div> 
  );
};

export default press;
