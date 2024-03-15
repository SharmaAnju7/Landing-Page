// import React from 'react';
import logo from '../../assets/images/logo1.png';
import { FaFacebookSquare, FaTwitterSquare, FaLinkedin, FaInstagramSquare } from 'react-icons/fa';
const Menu = [
    {
        id: 1,
        name: "ABOUT US",
        link: "/#",
    },
    {
        id: 2,
        name: "PRESS",
        link: "/#",
    },
    {
        id: 3,
        name: "PRODUCTS",
        link: "/#",
    },
    {
        id: 4,
        name: "CONTACT US",
        link: "/#",
    },
];

const Footer = () => {
    return (
        <div className=' bg-gray-300 text-gray-500'>
            <div className='container py-2 pb-20 flex justify-between items-center'>
                <div>
                    <a href="#" className='font-bold  flex gap-2 items-center '>
                        <img src={logo} alt="logo" className='h-8 w-8 rounded' />
                        Create
                    </a>
                </div>
                <div className='flex px-8 items-center justify-between'>
                    <ul className='sm:flex font-bold'>
                        {Menu.map((data) => (
                            <li key={data.id}>
                                <a href={data.link} className='inline-block px-4 hover:text-primary duration-200'>
                                    {data.name}
                                </a>
                            </li>
                        ))}
                    </ul>
                </div>
     <div className="flex space-x-4">
        {/* Facebook */}
        <a href="https://www.facebook.com/" target="_blank" rel="noopener noreferrer">
            <FaFacebookSquare className="text-blue-500 hover:text-blue-600 text-2xl" />
        </a>
        
        {/* Twitter */}
        <a href="https://twitter.com/" target="_blank" rel="noopener noreferrer">
            <FaTwitterSquare className="text-blue-400 hover:text-blue-500 text-2xl" />
        </a>
        
        {/* LinkedIn */}
        <a href="https://www.linkedin.com/" target="_blank" rel="noopener noreferrer">
            <FaLinkedin className="text-blue-700 hover:text-blue-800 text-2xl" />
        </a>
        
        {/* Instagram */}
        <a href="https://www.instagram.com/" target="_blank" rel="noopener noreferrer">
            <FaInstagramSquare className="text-pink-500 hover:text-pink-600 text-2xl" />
        </a>
     </div>    
        </div>
        </div>
    );
};

export default Footer;
