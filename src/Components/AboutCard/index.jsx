import { useEffect } from "react";
import { IoEye } from "react-icons/io5";
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
            <PiTargetBold className="text-6xl text-[#22876A] mb-2 group-hover:text-[#1a6853]" />
            <h3 className="text-2xl font-extrabold text-gray-800 mb-2">Our Mission</h3>
            <p className="text-gray-600">
              To lead the HVAC industry by delivering state-of-the-art, eco-friendly,
              and high-quality solutions that exceed expectations.
            </p>
            <div className="absolute top-0 left-0 w-12 h-12 bg-[#22876A] opacity-10 blur-lg rounded-full"></div>
          </div>

          {/* Vision */}
          <div className="relative group bg-white shadow-lg p-8 rounded-3xl transition transform hover:-translate-y-3 hover:shadow-2xl">
            <IoEye className="text-6xl text-[#22876A] mb-2 group-hover:text-[#1a6853]" />
            <h3 className="text-2xl font-extrabold text-gray-800 mb-2">Our Vision</h3>
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
