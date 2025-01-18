// import { useEffect, useRef } from 'react';
// import { PiTargetBold } from "react-icons/pi";
// import { IoEye } from "react-icons/io5";
// import styles from "./index.module.css";
// import { useNavigate } from 'react-router-dom';

// function AboutCard() {
//   const aboutTextRef = useRef(null);
//   const missionRef = useRef(null);
//   const navigate = useNavigate();


//   useEffect(() => {
//     const observer = new IntersectionObserver(
//       (entries) => {
//         entries.forEach(entry => {
//           if (entry.isIntersecting) {
//             entry.target.classList.add(styles.autoShowFromRight);

//           }
//         //   else {
//         //     entry.target.classList.remove(styles.autoShowFromRight);
//         //   }
//         });
//       },
//       {
//         threshold: 0.1, // Adjust this value as needed
//       }
//     );

//     if (aboutTextRef.current) observer.observe(aboutTextRef.current);
//     if (missionRef.current) observer.observe(missionRef.current);


//     return () => {
//       if (aboutTextRef.current) observer.unobserve(aboutTextRef.current);
//       if (missionRef.current) observer.unobserve(missionRef.current);

//     };
//   }, []);

//   return (
//     <div className="w-full flex  max-h-screen flex-col tab:flex-row bg-white pb-5 mt-10">
//       <div className="w-[100%] h-[50%] tab:w-[50%] tab:h-full p-3 mt-5 lap:flex-row flex flex-col tab:justify-end items-center justify-center">
//         <div ref={aboutTextRef} className="lap:w-[60%] h-full w-[100%] flex flex-col justify-center gap-3">
//           <p className="text-4xl font-bold text-[#22876A]">
//             ABOUT <span className="text-black">US</span>
//           </p>
//           <p  className="font-light text-justify text-lg ">
//             ECOVENT AIR SYSTEMS INDIA LLP. Is a HVAC contracting company in INDIA
//             specializing in design, manufacturing, supply & installation of Electro-Mechanical &
//             HVAC Systems. Our scope covers Engineering Design, Manufacturing, Submittals
//             Approval, Installation, and Testing & Commissioning HVAC Products.
//           </p>
//           <button onClick={()=>navigate("/aboutUs")} className='bg-[#22876A] font-bold text-white text-sm tab:text-base p-3  rounded-lg self-center'>View More</button>
//         </div>
//       </div>

//       <div ref={missionRef} className="  w-[100%] tab:w-[50%] h-[50%] tab:h-full flex flex-col items-center justify-center gap-5 mt-10">
//         <div  className="hover:shadow-[#22876A] shadow-lg py-1 w-[95%] lap:w-[80%] h-[45%] tab:h-[30%] flex flex-col items-center justify-center group hover:border-[#22876A] hover:border-2 hover:bg-white bg-[#22876A] rounded-3xl  hover:scale-105 transition-all duration-500">
//           <PiTargetBold className="text-5xl text-white group-hover:text-[#22876A]" />
//           <div className="flex flex-col items-center justify-center gap-1 tab:gap-3 w-full px-5">
//             <p className="text-xl lap:text-3xl font-extrabold text-white group-hover:text-[#22876A]">OUR MISSION</p>
//             <p className="text-sm lap:text-lg font-bold text-white text-center group-hover:text-[#22876A] font-serif">
//               With the advancement in the Technology & Machinery be the Leaders & NO#1
//               Manufacturers of HVAC Products
//             </p>
//           </div>
//         </div>
//         <div  className="hover:shadow-[#22876A] shadow-lg py-2 w-[95%] lap:w-[80%] h-[45%] tab:h-[30%] flex flex-col items-center justify-center group hover:border-[#22876A] hover:border-2 hover:bg-white bg-[#22876A] rounded-3xl  hover:scale-105 transition-all duration-500">
//           <IoEye className="text-5xl text-white group-hover:text-[#22876A]" />
//           <div className="flex flex-col items-center justify-center gap-1 tab:gap-3 w-full px-5">
//             <p className="text-xl lap:text-3xl font-extrabold text-white  group-hover:text-[#22876A]">OUR VISION</p>
//             <p className="text-sm lap:text-lg font-bold text-white text-center group-hover:text-[#22876A] font-serif">
//               To be the most trusted and innovative HVAC solutions provider in the industry.
//             </p>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default AboutCard;
import { useEffect } from "react";
import { IoEye, IoRocketSharp } from "react-icons/io5";
import { PiTargetBold } from "react-icons/pi";
import { useNavigate } from "react-router-dom";

function AboutCard() {
  const navigate = useNavigate();

  useEffect(() => {
    const handleScroll = () => {
      const elements = document.querySelectorAll(".parallax");
      elements.forEach((el) => {
        const speed = el.getAttribute("data-speed");
        const offset = window.pageYOffset * speed;
        el.style.transform = `translateY(${offset}px)`;
      });
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <section className="relative w-full min-h-screen overflow-hidden bg-[#EAF8F5]">
      {/* Parallax Background */}
      <div
        className="absolute top-0 left-0 w-full h-[300px] md:h-[400px] bg-gradient-to-br from-[#22876A] to-[#EAF8F5] parallax"
        data-speed="0.3"
      ></div>

      {/* Main Content */}
      <div className="relative  flex flex-col md:flex-row items-center justify-center md:justify-between px-6 md:px-12 pt-20 md:pt-40">
        {/* Left Section */}
        <div className="text-center md:text-left space-y-6 md:w-1/2">
          <h1 className="text-5xl md:text-6xl font-bold text-[#22876A] leading-tight">
            ECOVENT AIR SYSTEMS <br />
            <span className="text-black">Innovating HVAC Solutions</span>
          </h1>
          <p className="text-gray-600 text-lg leading-relaxed">
            ECOVENT AIR SYSTEMS INDIA LLP is revolutionizing the HVAC industry by
            delivering cutting-edge, sustainable, and reliable solutions. With a legacy
            of excellence, we ensure client satisfaction in every project.
          </p>
          <button
            onClick={() => navigate("/aboutUs")}
            className="mt-4 bg-[#22876A] text-white font-medium py-3 px-6 rounded-full shadow-lg hover:shadow-xl hover:scale-105 transform transition"
          >
            Discover More
          </button>
        </div>

        {/* Right Section: Mission & Vision */}
        <div className="relative grid grid-cols-1 md:grid-cols-2 gap-8 mt-10 md:mt-0 md:w-1/2">
          {/* Mission */}
          <div className="relative group bg-white shadow-lg p-8 rounded-3xl transition transform hover:-translate-y-3 hover:shadow-2xl">
            <PiTargetBold className="text-6xl text-[#22876A] mb-4 group-hover:text-[#1a6853]" />
            <h3 className="text-xl font-bold text-gray-800 mb-2">Our Mission</h3>
            <p className="text-gray-600">
              To lead the HVAC industry by delivering state-of-the-art, eco-friendly,
              and high-quality solutions that exceed expectations.
            </p>
            <div className="absolute top-0 left-0 w-12 h-12 bg-[#22876A] opacity-10 blur-lg rounded-full"></div>
          </div>

          {/* Vision */}
          <div className="relative group bg-white shadow-lg p-8 rounded-3xl transition transform hover:-translate-y-3 hover:shadow-2xl">
            <IoEye className="text-6xl text-[#22876A] mb-4 group-hover:text-[#1a6853]" />
            <h3 className="text-xl font-bold text-gray-800 mb-2">Our Vision</h3>
            <p className="text-gray-600">
              To be the most trusted name in the HVAC industry, innovating sustainable
              systems for a better tomorrow.
            </p>
            <div className="absolute bottom-0 right-0 w-12 h-12 bg-[#22876A] opacity-10 blur-lg rounded-full"></div>
          </div>
        </div>
      </div>

      {/* Decorative Elements */}
      <div
        className="absolute bottom-0 right-0 w-[300px] h-[300px] bg-[#22876A] opacity-20 rounded-full parallax"
        data-speed="0.2"
      ></div>
    </section>
  );
}

export default AboutCard;
