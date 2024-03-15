// import backgroundImage from '../../assets/images/bg.jpg';
const Hero = () => {
  return (
    <div className="relative overflow-hidden min-h-[550px] sm:min-h-[650px]  bg-gray-200 flex justify-center items-center  dark:bg-gray-200 duration-200 dark:text-black">
      {/* Background Pattern- */}
      <div className="h-[700px] w-[600px]  bg-primary/90 absolute -top-1/2 right-0 rounded-3xl rotate-45 -z-9"></div>
        <div className="container">
         <div className="flex-1 pt-0 sm:px-16 px-6  ">
          <h1 className="hero_title">
            CREATE <br /> SOFTWARE <br />SOLUTION
          </h1>
          <p className="hero_subtitle">
            Streamline your Information technology <br/> with your effortless manpower.
          </p><br/>
          <div className="flex items-center">
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
    </div>
  )
}

export default Hero;
