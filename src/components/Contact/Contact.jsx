// import React from 'react'
import { useEffect } from 'react';
import { FaPhone, FaEnvelope } from 'react-icons/fa';

const Contact = () => {

  useEffect(() => {
   
    const map = new window.google.maps.Map(document.getElementById('map'), {
      center: { lat: 37.7749, lng: -122.4194 }, 
      zoom: 12, 
    });
    new window.google.maps.Marker({
      position: { lat: 37.7749, lng: -122.4194 }, 
      map: map,
      title: 'Location'
    });
  }, []);


  return (
    <div className="flex px-20 bg-gray-300 py-10 gap-x-3">
      {/* Left side with text box */}
      <div className="p-4 flex flex-col bg-gray-300 rounded ">
        <div className="bg-primary  px-4 py-6 rounded ">
          <h2 className="text-2xl text-white font-bold mt-10"><br/>CONTACT</h2>
        </div>
        </div> 
        <div className='flex flex-col  bg-gray-200 justify-center py-6 md:px-12 lg:px-12 rounded  '>
              <h1 className='font-bold md:text-xl text-xl px-2 '>
               Support
              </h1>
              <div className="py-4 items-center">
      {/* Phone Number */}
            <div className="items-center bg-gray-200 rounded p-2 flex">
              <FaPhone className="text-gray-600 mr-2" />
              <span className="text-gray-800 ">9876543123</span>
            </div>

      {/* Email Address */}
            <div className="flex items-center bg-gray-200 rounded p-2 ">
              <FaEnvelope className="text-gray-600 mr-2" />
              <span className="text-gray-800">stha@example.com</span>
            </div>
          </div>
          <h1 className='font-bold md:text-xl text-xl px-2 '>
               Sales
              </h1>
              <div className="py-4 items-center">
      {/* Phone Number */}
            <div className="items-center bg-gray-200 rounded p-2 flex">
              <FaPhone className="text-gray-600 mr-2" />
              <span className="text-gray-800 ">16373524524</span>
            </div>

      {/* Email Address */}
            <div className="flex items-center bg-gray-200 rounded p-2 ">
              <FaEnvelope className="text-gray-600 mr-2" />
              <span className="text-gray-800">hello45@example.com</span>
            </div>
          </div>

              
              <div className="flex items-center mt-4">
                <button className="relative group">
                  <span className="custom-btn">Contact us</span>
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
            <div id="map" className="w-full h-100"></div>
        
         </div>
        
  )
}

export default Contact;
