import React, { useEffect, useState } from "react";
import { MdLocationOn, MdEmail } from "react-icons/md";
import { IoCall } from "react-icons/io5";
import { useLocation } from "react-router-dom";
import { Helmet } from "react-helmet";

const ContactUs = () => {
    const { pathname } = useLocation();

    const [showMessage,setShowMessage] = useState(false);

    const [formData, setFormData] = useState({
      firstName: "",
      lastName: "",
      email: "",
      subject:"",
      message: "",
    });
  
    const handleChange = (e) => {
      setFormData({ ...formData, [e.target.name]: e.target.value });
    };
  
    // const handleSubmit = (e) => {
    //   e.preventDefault();
  
    //   emailjs
    //     .send(
    //       serviceID, // Replace with your EmailJS Service ID
    //       templateID, // Replace with your EmailJS Template ID
    //       {
    //         from_name: `${formData.firstName}  ${formData.lastName}`,
    //         from_email: formData.email,
    //         message: formData.message,
    //       },
    //       publicKey// Replace with your EmailJS Public Key
    //     )
    //     .then(
    //       (response) => {
    //         console.log("Message sent successfully!");
    //         setFormData({
    //           firstName: "",
    //           lastName: "",
    //           email: "",
    //           message: "",
    //         });
    //       },
    //       (error) => {
    //         console.log("Failed to send the message. Please try again.");
    //       }
    //     );
    // };

    const handleSubmit = ()=>{

    }

    useEffect(() => {
      window.scrollTo(0, 0);
    }, [pathname]);
  return (
    <div className="relative bg-white py-20 px-5 mt-10">

<Helmet>
        <title>Contact Us | ECOVENT - HVAC Solutions</title>
        <meta
          name="description"
          content="Get in touch with ECOVENT for high-quality HVAC solutions, Ducts, and Dampers. Reach us for consultation or product inquiries."
        />
        <meta name="keywords" content="ECOVENT Air Systems India LLP,ECOVENT ,HVAC Installation,HVAC manufacturing, contact us, HVAC, air systems, customer support, consultation" />
        <meta property="og:title" content="Contact Us | ECOVENT - HVAC Solutions" />
        <meta property="og:description" content="Reach out to ECOVENT for all your HVAC solution needs. Our team is ready to assist you with consultation and product inquiries." />
        <meta property="og:url" content="https://www.yoursite.com/contact-us" />
        <meta property="og:type" content="website" />
      </Helmet>

      {/* Background Decorative Shapes */}
      <div className="absolute inset-0 -z-10 ">
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
                name='firstName'
                value={formData.firstName} 
                onChange={handleChange}
                className="w-full bg-white border-2 border-slate-200 rounded-lg p-3  shadow-sm"
              />
              <input
                type="text"
                placeholder="Last Name"
                name='lastName'
                value={formData.lastName}
                onChange={handleChange}
                className="w-full bg-white border-2 border-slate-200 rounded-lg p-3  shadow-sm"
              />
            </div>
            {/* Email and Subject Fields */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <input
                type="email"
                name='email'
                placeholder="Email Address"
                value={formData.email}
                onChange={handleChange}
                className="w-full bg-white border-2 border-slate-200 rounded-lg p-3  shadow-sm"
              />
              <input
                type="text"
                placeholder="Subject"
                name="subject"
                value={formData.subject}
                onChange={handleChange}
                className="w-full bg-white border-2 border-slate-200 rounded-lg p-3  shadow-sm"
              />
            </div>
            {/* Message Field */}
            <textarea
              placeholder="Your Message"
              name='message'
              value={formData.message}
              onChange={handleChange}
              className="w-full bg-white border-2 border-slate-200 rounded-lg p-3  shadow-sm"
            ></textarea>
            {/* Submit Button */}
            <button
              type="submit"
              className="w-full bg-[#22876A] text-white  border-2 border-[#22876A] rounded-lg py-3 font-bold shadow-lg hover:bg-white hover:text-[#22876A]  transition-transform transform hover:scale-105"
            >
              Send Message
            </button>
          </form>
        </div>

        <div className={`bg-green-100 border-[#22876A] border-2 p-2 w-[90%] lap:w-[60%] flex justify-center mx-auto rounded-lg ${showMessage ? "" : "hidden" }`}>
               <p className="font-bold text-[#22876A]">Thank you, The Message has sent Successfully</p>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;


