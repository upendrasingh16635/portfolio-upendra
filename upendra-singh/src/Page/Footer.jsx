import React from 'react';
import { TfiEmail } from "react-icons/tfi";

function Footer() {
  return (
    <footer className="bg-black text-white md:px-8 lg:px-16 xl:px-24 max-w-full">
      <hr />
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-10 mb-5">
        {/* Left Section */}
        <div>
          <h1 className="font-bold text-2xl">Upendra Singh</h1>
          <p className="mt-2">
            I am a Frontend Developer from<br />
            TDI Mohali, Chandigarh with<br />
            6 months training experience.
          </p>
        </div>

        {/* Email Subscribe Section */}
        <div className="w-full md:w-auto">
          <form className="flex flex-col sm:flex-row items-start sm:items-center gap-3">
            <div className="flex items-center w-full sm:w-auto gap-2">
              <TfiEmail className="text-blue-300 text-xl" />
              <input
                type="email"
                placeholder="Enter your Email"
                className="border border-white bg-transparent text-white rounded px-4 py-2 w-full sm:w-64 placeholder-white focus:outline-none focus:ring-2 focus:ring-blue-300"
              />
            </div>
            <button
              type="submit"
              className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition"
            >
              Subscribe
            </button>
          </form>
        </div>
      </div>

      <hr className="mb-6 border-white/30" />

      {/* Bottom Section */}
      <div className="flex flex-col md:flex-row justify-between items-center text-sm gap-4">
        <p>© 2025 Upendra Singh. All rights reserved.</p>
        <div className="flex gap-4">
          <p>Terms of Service</p>
          <p>Privacy Policy</p>
          <p>Connect with Me</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
