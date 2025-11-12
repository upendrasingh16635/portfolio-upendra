import React from "react";
import { MdOutlineEmail } from "react-icons/md";
import { FaLocationDot } from "react-icons/fa6";
import { IoMdCall } from "react-icons/io";
import img from "../assets/bg.jpg";

function Contact() {
  const onSubmit = async (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);
    formData.append("access_key", "a9ca33ae-bded-43d9-ac16-efc4808f9193");

    const object = Object.fromEntries(formData);
    const json = JSON.stringify(object);

    const res = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: json,
    }).then((res) => res.json());

    if (res.success) {
      alert(res.message);
    }
  };

  return (
    <div
      id="Contact"
      className="md:px-8 lg:px-16 xl:px-24 max-w-full relative">
    
      <div className="absolute inset-0 -z-10">
        <img
          src={img}
          alt="Background"
          className="w-full h-full object-cover" />
        {/* <div className="absolute inset-0 bg-black opacity-60" /> */}
      </div>

    
      <div className="relative z-10 text-white">
        <div className="flex justify-center mb-10">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-center">
            Contact
          </h1>
        </div>

        <div className="flex flex-col md:flex-row gap-12">
       
          <div className="md:w-1/2 space-y-6">
            <h2 className="text-2xl text-red-500 font-semibold">Let's talk</h2>
            <p className="text-sm sm:text-base leading-relaxed">
              I'm currently available to take on new projects, so feel free to
              send me a message about anything you want to discuss. You can
              contact me anytime.
            </p>
            <div className="flex items-center gap-3 text-sm sm:text-base">
              <MdOutlineEmail className="text-white text-xl" />
              <p>upendrasingh16635@gmail.com</p>
            </div>
            <div className="flex items-center gap-3 text-sm sm:text-base">
              <FaLocationDot className="text-white text-xl" />
              <p>India</p>
            </div>
            <div className="flex items-center gap-3 text-sm sm:text-base">
              <IoMdCall className="text-white text-xl" />
              <p>+91 9368533773</p>
            </div>
          </div>

          <form onSubmit={onSubmit} className="md:w-1/2 space-y-4">
            <div>
              <label className="block font-semibold mb-1 text-sm sm:text-base">
                Your Name
              </label>
              <input name="name"className="w-full border border-gray-300  rounded px-4 py-2 text-white text-sm sm:text-base" type="text" placeholder="Enter your name" required
              />
            </div>

            <div>
              <label className="block font-semibold mb-1 text-sm sm:text-base ">
                Your Email
              </label>
              <input
                name="email"
                className=" w-full border border-gray-300 rounded px-4 py-2 text-white text-sm sm:text-base"
                type="email"
                placeholder="Enter your email"
                required
              />
            </div>

            <div>
              <label className="block font-semibold mb-1 text-sm sm:text-base">
                Message
              </label>
              <textarea
                name="message"
                className="w-full border border-gray-300 rounded px-4 py-2 h-32 text-white text-sm sm:text-base"
                placeholder="Enter your message"
                required
              ></textarea>
            </div>

            <button
              type="submit"
              className="bg-gradient-to-r bg-blue-400 via-purple-500 to-pink-400 text-white px-6 py-2 rounded mb-10 transition-transform duration-300 hover:scale-105 hover:shadow-xl text-sm sm:text-base"
            >
              Submit Now
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Contact;
