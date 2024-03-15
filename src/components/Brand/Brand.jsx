// import React from 'react';
import { FaNapster } from 'react-icons/fa'; 
import { DiGithub } from "react-icons/di";// Import icons from react-icons library

const Brand = () => {
  return (
    <div className="my-div bg-gray-200 px-20 py-6 space-x-20 flex text-2xl">
      <span className="font-bold">Lenovo</span>
      <span className="font-bold">Citrix</span>
      <span className="font-bold flex items-center"><DiGithub className='ml-1 w-10 h-8'/>GitHub</span>
      <span className="font-bold flex items-center"><FaNapster className="ml-1 w-10 h-5" />Napster </span>
      <span className="font-bold flex items-center">Microsoft </span>
      <span className="font-bold">NetDevo</span>
    </div>
  );
}

export default Brand;
