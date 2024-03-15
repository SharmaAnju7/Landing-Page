// import React from 'react';
import logo from '../../assets/images/logo1.png';

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

const Navbar = () => {
  return (
    <div className='fixed top-0 left-0 w-full z-50 duration-200 bg-gray-200 shadow-md'>
      <div className='container py-2 flex justify-between items-center'>
        <div>
          <a href="#" className='font-bold text-xl sm:text-xl flex gap-2 items-center'>
            <img src={logo} alt="logo" className='h-8 w-8 rounded' />
            Create
          </a>
        </div>
        <div className='flex justify-center'>
          <ul className='sm:flex hidden items-center gap-4'>
            {Menu.map((data) => (
              <li key={data.id}>
                <a href={data.link} className='inline-block px-4 hover:text-primary duration-200'>
                  {data.name}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
