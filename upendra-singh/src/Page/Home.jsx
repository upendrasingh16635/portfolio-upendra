import React from 'react';
import img from "../assets/img3.jpg";
import img1 from "../assets/bg.jpg";
import { TypeAnimation } from 'react-type-animation';

const Home = () => {
  return (
    <div
      id="Home"
      className="relative  w-full bg-cover bg-center bg-no-repeat px-4 md:px-8 lg:px-16 xl:px-24 max-w-full"
      style={{ backgroundImage: `url(${img1})` }} >
    
      <div className="absolute inset-0  bg-opacity-40 z-0" />

      
      <div className="relative z-10 max-w-7xl mx-auto text-center py-20 md:py-32 text-white">
        
        <div className="mb-6 flex justify-center">
          <img
            src={img}
            alt="Upendra Singh"
            className="h-40 w-40 md:h-52 md:w-52 object-cover rounded-full shadow-lg border-4 border-white"
          />
        </div>

  
        <h1 className="text-3xl md:text-4xl font-bold mb-4">
          <TypeAnimation
            sequence={[
              'Full Stack Developer', 2000,
              'Web Developer', 2000,
            ]}
            speed={50}
            repeat={Infinity}
            className="text-orange-400"
          />
        </h1>

      
        <p className="text-base md:text-lg leading-relaxed max-w-3xl mx-auto">
          Hi, I’m <span className="font-semibold text-white">Upendra Singh</span> — a Full Stack Developer skilled in
          React, Express, MongoDB, and always exploring new technologies. Proficient in HTML, CSS, SCSS, JavaScript,
          and Tailwind CSS. Passionate about solving DSA problems in JavaScript and building scalable, user-friendly
          applications from scratch.
        </p>

     
        <div className="mt-8 flex flex-col sm:flex-row justify-center items-center gap-4">
          {/* <button className="bg-gradient-to-r from-orange-400 to-sky-300 text-white font-semibold py-2 px-8 rounded-full shadow hover:from-orange-300 hover:to-sky-200 transition duration-300">
            Connect with me
          </button> */}
          <button className="border border-sky-500 bg-white text-sky-600 font-semibold py-2 px-8 rounded-full hover:bg-sky-900 transition duration-300">
            
            <a href="https://drive.google.com/file/d/15E7zrxNMJDuEm1FF0SLZ1xQlkxKKNa_F/view?usp=sharing">CV Download</a>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Home;

