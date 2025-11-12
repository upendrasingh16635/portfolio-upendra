
import React, { useState } from 'react';
import { Link } from 'react-scroll';
import { FiMenu, FiX } from 'react-icons/fi';
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  const navLinks = [
    { name: "Home", to: "Home" },
    { name: "About", to: "About" },
    { name: "Skills", to: "Skills" },
    { name: "Contact", to: "Contact" },
 
  ];

  return (
    <nav className="w-full px-4 md:px-8 py-4 shadow-md text-white fixed top-0 z-50 ">
    
      <div className="flex items-center justify-around max-w-7xl mx-auto  mt-2">

        <div className="text-2xl font-bold text-gray-800">
          <Link to="home" smooth={true} duration={500} className="cursor-pointer text-white">
            Upendra Singh
          </Link>
        </div>

        <ul className="hidden md:flex gap-10 text-lg font-semibold text-gray-700">
          {navLinks.map((link) => ( <li key={link.name}> <Link to={link.to} smooth={true}duration={500} offset={-70} className="cursor-pointer text-white hover:text-[#8245ec]">{link.name}</Link> </li>
          ))}
        </ul>

        <div className=" flex space-x-4 text-gray-300 hover:text-white justify-around ">
          <a href="http://www.linkedin.com/in/upendra-singh-53192632a"
          target='_blank'
          rel='noopener noreferrer'
          ><FaLinkedin /></a>
          
        <div className='cursor-pointer'>
          <a href="https://github.com/upendrasingh16635"
          target='_blank'
          rel='noopener noreferrer'
          ><FaGithub /></a></div>
        </div>
         

        <div className="md:hidden">
          <button onClick={toggleMenu}>{isOpen ? <FiX size={24} /> : <FiMenu size={24} />} </button>
        </div>
      </div>

      {isOpen && (
        <div className="md:hidden mt-4 bg-white rounded-md shadow-md px-4 py-4 space-y-4 text-gray-700 text-base font-medium ">
          {navLinks.map((link) => ( <Link key={link.name} to={link.to}smooth={true}duration={500}offset={-70}onClick={toggleMenu}className="block cursor-pointer hover:underline cursor-pointer">
              {link.name}</Link>
          ))}
           <div className="flex space-x-4   ">
          <a href="http://www.linkedin.com/in/upendra-singh-53192632a"
          target='_blank'
          rel='noopener noreferrer'
          ><FaLinkedin /></a>
          
        <div className='cursor-pointer'>
          <a href="https://github.com/upendrasingh16635"
          target='_blank'
          rel='noopener noreferrer'
          ><FaGithub /></a>
          </div>
        </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;

