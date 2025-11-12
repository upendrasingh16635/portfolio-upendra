
import React from 'react';
import img from "../assets/img3.jpg";
import img1 from "../assets/bg.jpg";

function About() {
  return (
    <div id="About" 
       className="relative w-full bg-cover bg-center bg-no-repeat px-4 md:px-8 lg:px-16 xl:px-24 max-w-full max-h-full"
            style={{ backgroundImage: `url(${img1})` }}
            >
    
      <div className="mb-12 text-center">
        <h1 className="text-3xl md:text-5xl font-bold text-white">About Me</h1>
      </div>
      <div className="flex flex-col md:flex-row items-center gap-12 mb-16">
        <div className="w-full md:w-1/2 flex justify-center">
          <img
            src={img}
            alt="About"
            className="w-full max-w-sm rounded-lg shadow-lg object-cover"
          />
        </div>
        <div className="w-full md:w-1/2 text-lg leading-relaxed text-white">
          <p className="mb-4">
            I am an experienced Frontend Developer with over a decade of professional experience.
          </p>
          <p>
            My passion for frontend development is not only reflected in my extensive experience but also in my commitment to continuous learning and delivering high-quality solutions.
          </p>
        </div>
      </div>

      <div className="">
        <h2 className="text-2xl font-semibold mb-6 text-white">Skills</h2>
        <div className="space-y-5">
          <div>
            <p className="mb-1 text-white">HTML & CSS</p>
            <div className="w-4/5 h-2 bg-gradient-to-r bg-orange-400 to-blue-500 rounded-full"></div>
          </div>
          <div>
            <p className="mb-1 text-white">JavaScript</p>
            <div className="w-3/5 h-2 bg-gradient-to-r bg-orange-500 to-blue-400 rounded-full"></div>
          </div>
          <div>
            <p className="mb-1 text-white">React JS</p>
            <div className="w-7/12 h-2 bg-gradient-to-r bg-orange-600 to-blue-500 rounded-full"></div>
          </div>
          <div className=''>
            <p className=" text-white ">Next JS</p>
            <div className="w-1/2 h-2 bg-gradient-to-r bg-orange-700 to-blue-600 rounded-full "></div>
          
          </div>
        </div>
      </div>

    </div>
  );
}

export default About;


