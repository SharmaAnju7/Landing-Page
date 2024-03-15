// import React from 'react'
const Product = () => {
  return (
    <div className="flex px-20 bg-gray-200 py-9 gap-3">
      {/* Left side with text box */}
      <div className="w-1/22 p-4 flex flex-col md:grid-cols-2">
        <div className="bg-primary p-8 px-8 py-3 rounded ">
          <h2 className="text-2xl text-white font-bold mt-8"><br/>PRO <br/>DUCTS</h2>
        </div>
      </div>
      <div className='flex flex-col  bg-gray-100 justify-center py-6 md:px-12 lg:px-12 rounded h-full'>
              <h1 className='font-bold md:text-2xl text-xl'>
                Product <br/>Solution
              </h1>
              <p>Lorem, ipsum dolor sit <br/> consectetur adipisicing elit.<br/> Corrupti dignissimos eligendi<br/>  incidunt, ullam necessitatibus quo! <br/></p>
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

            <div className='flex flex-col  bg-gray-100 justify-center py-6 md:px-12 lg:px-12 rounded h-full'>
              <h1 className='font-bold md:text-2xl text-xl'>
              Product <br/>Solution
              </h1>
              <p>Lorem, ipsum dolor sit <br/> consectetur adipisicing elit.<br/> Corrupti dignissimos eligendi<br/>  incidunt, ullam necessitatibus quo! <br/></p>
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
            <div className='flex flex-col  bg-gray-100 justify-center py-6 md:px-12 lg:px-12 rounded h-full '>
              <h1 className='font-bold md:text-2xl text-xl'>
              Product <br/>Solution
              </h1>
              <p>Lorem, ipsum dolor sit <br/> consectetur adipisicing elit.<br/> Corrupti dignissimos eligendi<br/>  incidunt, ullam necessitatibus quo! <br/></p>
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
  )
}

export default Product;
