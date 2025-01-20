// import React, { useEffect } from "react";
// import { useLocation, useNavigate } from "react-router-dom";
// import AboutPageImg from "../../assets/AboutPageImg.png"

// function AboutPage() {

//     const { pathname } = useLocation();

//     useEffect(() => {
//       window.scrollTo(0, 0);
//     }, [pathname]);

//     const navigate = useNavigate();
//   return (
//     <div className="w-full bg-white mt-20">
//       {/* Hero Section */}
//       <div className="bg-[#22876A] text-white py-16 px-6 lap:px-20 text-center">
//         <h1 className="text-5xl lap:text-6xl font-bold mb-4">ABOUT ECOVENT</h1>
//         <p className="text-lg lap:text-2xl leading-relaxed">
//           Dedicated to creating innovative HVAC solutions through constant research, 
//           development, and expertise in fabrication and installation.
//         </p>
//       </div>

//       {/* About ECOVENT Section */}
//       <section className="py-16 px-6 lap:px-20 grid grid-cols-1 lap:grid-cols-2 gap-12">
//         {/* Image */}
//         <div className="flex justify-center items-center">
//           <img
//             src={AboutPageImg}
//             alt="About ECOVENT"
//             className="rounded-lg shadow-md"
//           />
//         </div>

//         {/* Content */}
//         <div>
//           <h2 className="text-4xl font-bold text-[#22876A] mb-6">
//             Who We Are
//           </h2>
//           <p className="text-gray-700 text-lg leading-relaxed">
//             <strong>ECOVENT AIR SYSTEMS INDIA LLP</strong> is a consultant-certified venture 
//             of <strong>M/s K.C INDUSTRIES & FABRICATORS</strong>, established in 1989. 
//             Our company specializes in engineering, fabricating, and installing high-quality HVAC products. 
//             We are committed to providing innovative ideas for HVAC Ducts & Dampers through constant research 
//             and development while delivering the best quality and on-time services to our clients.
//           </p>
//         </div>
//       </section>

//       {/* Mission, Vision, Values Section */}
//       <section className="bg-gray-100 py-16 px-6 lap:px-20">
//         <h2 className="text-4xl font-bold text-center text-[#22876A] mb-12">
//           Our Core Principles
//         </h2>
//         <div className="grid grid-cols-1 lap:grid-cols-3 gap-8">
//           {/* Mission */}
//           <div className="bg-white border border-gray-200 shadow-md p-8 text-center  hover:scale-110 hover:shadow-xl transition duration-300 rounded-xl">
//             <h3 className="text-2xl font-bold text-[#22876A] mb-4">Our Mission</h3>
//             <p className="text-gray-700 text-lg leading-relaxed">
//               At ECOVENT, we believe in innovation and creative thinking.
//             </p>
//           </div>

//           {/* Vision */}
//           <div className="bg-white border border-gray-200 shadow-md p-8 text-center  hover:scale-110 hover:shadow-xl transition duration-300 rounded-xl">
//             <h3 className="text-2xl font-bold text-[#22876A] mb-4">Our Vision</h3>
//             <p className="text-gray-700 text-lg leading-relaxed">
//               We strive for excellence in all the work we do with our partners to achieve results 
//               and make impactful changes together.
//             </p>
//           </div>

//           {/* Values */}
//           <div className="bg-white border border-gray-200 shadow-md p-8 text-center  hover:scale-110 hover:shadow-xl transition duration-300 rounded-xl">
//             <h3 className="text-2xl font-bold text-[#22876A] mb-4">Our Values</h3>
//             <p className="text-gray-700 text-lg leading-relaxed">
//               We are committed to upholding our integrity, innovation, and collaboration to deliver exceptional outcomes.
//             </p>
//           </div>
//         </div>
//       </section>

//       {/* Call to Action */}
//       <section className="bg-[#22876A] text-white py-16 px-6 lap:px-20 text-center">
//         <h2 className="text-4xl lap:text-5xl font-bold mb-6">
//           Partner with Us
//         </h2>
//         <p className="text-lg lap:text-2xl mb-8">
//           Let's work together to create innovative and efficient HVAC solutions tailored to your needs.
//         </p>
//         <button onClick={()=>navigate("/contactUs")} className=" bg-white text-[#22876A] font-bold px-8 py-3 text-lg  rounded-full shadow-lg hover:bg-gray-200 transition">
//           Contact Us
//         </button>
//       </section>
//     </div>
//   );
// }

// export default AboutPage;
import React, { useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import AboutPageImg from "../../assets/AboutPageImg.png";
import { Helmet } from "react-helmet";

function AboutPage() {

  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  const navigate = useNavigate();

  return (
    <div className="w-full bg-white mt-20">
      {/* Helmet for SEO */}
      <Helmet>
        <title>About ECOVENT - Innovative HVAC Solutions</title>
        <meta
          name="description"
          content="ECOVENT is dedicated to providing innovative HVAC solutions through constant research, development, and expertise in fabrication and installation."
        />
        <meta name="keywords" content="ECOVENT, HVAC solutions, air systems, fabrication, installation, manufacturers,manufacturing" />
      </Helmet>

      {/* Hero Section */}
      <div className="bg-[#22876A] text-white py-16 px-6 lap:px-20 text-center">
        <h1 className="text-5xl lap:text-6xl font-bold mb-4">ABOUT ECOVENT</h1>
        <p className="text-lg lap:text-2xl leading-relaxed">
          Dedicated to creating innovative HVAC solutions through constant research, 
          development, and expertise in fabrication and installation.
        </p>
      </div>

      {/* About ECOVENT Section */}
      <section className="py-16 px-6 lap:px-20 grid grid-cols-1 lap:grid-cols-2 gap-12">
        {/* Image */}
        <div className="flex justify-center items-center">
          <img
            src={AboutPageImg}
            alt="About ECOVENT"
            className="rounded-lg shadow-md"
            loading="lazy"
          />
        </div>

        {/* Content */}
        <div>
          <h2 className="text-4xl font-bold text-[#22876A] mb-6">
            Who We Are
          </h2>
          <p className="text-gray-700 text-lg leading-relaxed">
            <strong>ECOVENT AIR SYSTEMS INDIA LLP</strong> is a consultant-certified venture 
            of <strong>M/s K.C INDUSTRIES & FABRICATORS</strong>, established in 1989. 
            Our company specializes in engineering, fabricating, and installing high-quality HVAC products. 
            We are committed to providing innovative ideas for HVAC Ducts & Dampers through constant research 
            and development while delivering the best quality and on-time services to our clients.
          </p>
        </div>
      </section>

      {/* Mission, Vision, Values Section */}
      <section className="bg-gray-100 py-16 px-6 lap:px-20">
        <h2 className="text-4xl font-bold text-center text-[#22876A] mb-12">
          Our Core Principles
        </h2>
        <div className="grid grid-cols-1 lap:grid-cols-3 gap-8">
          {/* Mission */}
          <div className="bg-white border border-gray-200 shadow-md p-8 text-center  hover:scale-110 hover:shadow-xl transition duration-300 rounded-xl">
            <h3 className="text-2xl font-bold text-[#22876A] mb-4">Our Mission</h3>
            <p className="text-gray-700 text-lg leading-relaxed">
              At ECOVENT, we believe in innovation and creative thinking.
            </p>
          </div>

          {/* Vision */}
          <div className="bg-white border border-gray-200 shadow-md p-8 text-center  hover:scale-110 hover:shadow-xl transition duration-300 rounded-xl">
            <h3 className="text-2xl font-bold text-[#22876A] mb-4">Our Vision</h3>
            <p className="text-gray-700 text-lg leading-relaxed">
              We strive for excellence in all the work we do with our partners to achieve results 
              and make impactful changes together.
            </p>
          </div>

          {/* Values */}
          <div className="bg-white border border-gray-200 shadow-md p-8 text-center  hover:scale-110 hover:shadow-xl transition duration-300 rounded-xl">
            <h3 className="text-2xl font-bold text-[#22876A] mb-4">Our Values</h3>
            <p className="text-gray-700 text-lg leading-relaxed">
              We are committed to upholding our integrity, innovation, and collaboration to deliver exceptional outcomes.
            </p>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="bg-[#22876A] text-white py-16 px-6 lap:px-20 text-center">
        <h2 className="text-4xl lap:text-5xl font-bold mb-6">
          Partner with Us
        </h2>
        <p className="text-lg lap:text-2xl mb-8">
          Let's work together to create innovative and efficient HVAC solutions tailored to your needs.
        </p>
        <button 
          onClick={() => navigate("/contactUs")} 
          className="bg-white text-[#22876A] font-bold px-8 py-3 text-lg rounded-full shadow-lg hover:bg-gray-200 transition"
        >
          Contact Us
        </button>
      </section>
    </div>
  );
}

export default AboutPage;
