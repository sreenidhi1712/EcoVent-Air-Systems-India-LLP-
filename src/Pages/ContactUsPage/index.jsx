import React, { useEffect } from "react";
import { MdLocationOn, MdEmail } from "react-icons/md";
import { IoCall } from "react-icons/io5";
import { useLocation } from "react-router-dom";

const ContactUs = () => {
    const { pathname } = useLocation();

    useEffect(() => {
      window.scrollTo(0, 0);
    }, [pathname]);
  return (
    <div className="relative bg-white py-20 px-5 mt-20">
      {/* Background Decorative Shapes */}
      <div className="absolute inset-0 -z-10">
        <div className="bg-gradient-to-tr from-green-100 to-green-200 rounded-full w-96 h-96 blur-3xl opacity-40 top-10 left-10 absolute"></div>
        <div className="bg-gradient-to-tr from-green-200 to-green-300 rounded-full w-72 h-72 blur-3xl opacity-30 bottom-20 right-10 absolute"></div>
      </div>

      <div className="max-w-7xl mx-auto space-y-20">
        {/* Intro Section */}
        <div className="text-center space-y-4">
          <h1 className="text-5xl font-extrabold text-green-700">
            Let’s Connect!
          </h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
          Discover excellence with our products. Reach out to us today to
            explore our offerings and find the perfect product that aligns with
            your best requirements
          </p>
        </div>

        {/* Asymmetric Contact Info Section */}
        <div className="relative grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
          {/* Decorative Stripe */}
          <div className="hidden md:block md:col-span-1 bg-[#22876A] h-full w-1 rounded-full"></div>

          {/* Contact Cards */}
          <div className="md:col-span-11 grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Address */}
            <div className="group bg-green-50 rounded-xl p-6 border border-[#22876A] shadow-xl hover:shadow-2xl hover:bg-[#22876A] transition-transform transform hover:scale-105 space-y-4">
              <MdLocationOn className="text-4xl text-[#22876A] group-hover:text-white" />
              <h3 className="text-xl font-extrabold text-[#22876A] group-hover:text-white">
                Office Address
              </h3>
              <p className="text-gray-700 font-bold group-hover:text-white">
                9/7, 4th Cross, Saraswathipuram, Nandini Layout, Bangalore -
                560096
              </p>
            </div>

            {/* Factory */}
            <div className="group bg-green-50 rounded-xl p-6 border border-[#22876A] shadow-xl hover:shadow-2xl hover:bg-[#22876A] transition-transform transform hover:scale-105 space-y-4">
              <MdLocationOn className="text-4xl text-[#22876A] group-hover:text-white" />
              <h3 className="text-xl font-extrabold text-[#22876A] group-hover:text-white">
                Factory Address
              </h3>
              <p className="text-gray-700 font-bold group-hover:text-white">
                #68/1, K-Hosahalli, Kodigehalli Post, Bengaluru North Taluk,
                Bengaluru - 560112
              </p>
            </div>

            {/* Contact Info */}
            <div className="group bg-green-50 rounded-xl p-6 border border-[#22876A] shadow-xl hover:shadow-2xl hover:bg-[#22876A] transition-transform transform hover:scale-105 space-y-4">
              <IoCall className="text-4xl text-[#22876A] group-hover:text-white" />
              <h3 className="text-xl font-extrabold text-[#22876A] group-hover:text-white">
                Contact Details
              </h3>
              <p className="text-gray-700 font-bold group-hover:text-white">
                <strong>Phone:</strong> +91 98450 59731 | +91 98866 51100
              </p>
              <p className="text-gray-700 font-bold group-hover:text-white">
                <strong>Email:</strong> ecoventairsystems@gmail.com
              </p>
            </div>
          </div>
        </div>

        {/* Animated Contact Form */}
        <div className="bg-white border-2 border-[#22876A] rounded-xl shadow-xl py-12 px-6 md:px-12 lg:px-20 max-w-4xl mx-auto relative">
          <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-white rounded-full border-4 border-[#22876A] w-24 h-24 flex text-2xl items-center justify-center shadow-lg">
            ✉
          </div>
          <h2 className="text-3xl font-bold text-[#22876A] text-center mt-12">
            Write to Us
          </h2>
          <p className="text-center text-gray-600 mt-2">
            Send us a message, and we’ll get back to you within 24 hours!
          </p>
          <form className="mt-8 space-y-6">
            {/* Name Fields */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <input
                type="text"
                placeholder="First Name"
                className="w-full bg-white border-2 border-[#22876A] rounded-lg p-3  shadow-sm"
              />
              <input
                type="text"
                placeholder="Last Name"
                className="w-full bg-white border-2 border-[#22876A] rounded-lg p-3  shadow-sm"
              />
            </div>
            {/* Email and Subject Fields */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <input
                type="email"
                placeholder="Email Address"
                className="w-full bg-white border-2 border-[#22876A] rounded-lg p-3  shadow-sm"
              />
              <input
                type="text"
                placeholder="Subject"
                className="w-full bg-white border-2 border-[#22876A] rounded-lg p-3  shadow-sm"
              />
            </div>
            {/* Message Field */}
            <textarea
              placeholder="Your Message"
              className="w-full bg-white border-2 border-[#22876A] rounded-lg p-3  shadow-sm"
            ></textarea>
            {/* Submit Button */}
            <button
              type="submit"
              className="w-full bg-white text-[#22876A] border-2 border-[#22876A] rounded-lg py-3 font-bold shadow-lg hover:bg-[#22876A] hover:text-white  transition-transform transform hover:scale-105"
            >
              Send Message
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;