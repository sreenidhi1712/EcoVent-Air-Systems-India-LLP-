import { useEffect, useRef } from 'react';
import { PiTargetBold } from "react-icons/pi";
import { IoEye } from "react-icons/io5";
import styles from "./index.module.css";
import { useNavigate } from 'react-router-dom';

function AboutCard() {
  const aboutTextRef = useRef(null);
  const missionRef = useRef(null);
  const navigate = useNavigate();


  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add(styles.autoShowFromRight);

          }
        //   else {
        //     entry.target.classList.remove(styles.autoShowFromRight);
        //   }
        });
      },
      {
        threshold: 0.1, // Adjust this value as needed
      }
    );

    if (aboutTextRef.current) observer.observe(aboutTextRef.current);
    if (missionRef.current) observer.observe(missionRef.current);


    return () => {
      if (aboutTextRef.current) observer.unobserve(aboutTextRef.current);
      if (missionRef.current) observer.unobserve(missionRef.current);

    };
  }, []);

  return (
    <div className="w-full flex lap:h-screen min-h-screen flex-col tab:flex-row bg-white pb-5">
      <div className="w-[100%] h-[50%] tab:w-[50%] tab:h-full p-3 mt-5 lap:flex-row flex flex-col tab:justify-end items-center justify-center">
        <div ref={aboutTextRef} className="lap:w-[60%] h-full w-[100%] flex flex-col justify-center gap-3">
          <p className="text-4xl font-bold text-[#22876A]">
            ABOUT <span className="text-black">US</span>
          </p>
          <p  className="font-light text-justify text-lg ">
            ECOVENT AIR SYSTEMS INDIA LLP. Is a HVAC contracting company in INDIA
            specializing in design, manufacturing, supply & installation of Electro-Mechanical &
            HVAC Systems. Our scope covers Engineering Design, Manufacturing, Submittals
            Approval, Installation, and Testing & Commissioning HVAC Products.
          </p>
          <button onClick={()=>navigate("/aboutUs")} className='bg-[#22876A] font-bold text-white p-3 w-[40%] rounded-lg self-center'>View More</button>
        </div>
      </div>

      <div ref={missionRef} className="  w-[100%] tab:w-[50%] h-[50%] tab:h-full flex flex-col items-center justify-center gap-5 mt-10">
        <div  className="hover:shadow-[#22876A] shadow-lg py-1 w-[95%] lap:w-[80%] h-[45%] tab:h-[30%] flex flex-col items-center justify-center group hover:border-[#22876A] hover:border-2 hover:bg-white bg-[#22876A] rounded-3xl lap:rounded-full hover:scale-105 transition-all duration-500">
          <PiTargetBold className="text-5xl text-white group-hover:text-[#22876A]" />
          <div className="flex flex-col items-center justify-center gap-1 tab:gap-5 w-full px-5">
            <p className="text-xl tab:text-3xl font-extrabold text-white group-hover:text-[#22876A]">OUR MISSION</p>
            <p className="text-sm tab:text-lg font-bold text-white text-center group-hover:text-[#22876A] font-serif">
              With the advancement in the Technology & Machinery be the Leaders & NO#1
              Manufacturers of HVAC Products
            </p>
          </div>
        </div>
        <div  className="hover:shadow-[#22876A] shadow-lg py-2 w-[95%] lap:w-[80%] h-[45%] tab:h-[30%] flex flex-col items-center justify-center group hover:border-[#22876A] hover:border-2 hover:bg-white bg-[#22876A] rounded-3xl lap:rounded-full hover:scale-105 transition-all duration-500">
          <IoEye className="text-5xl text-white group-hover:text-[#22876A]" />
          <div className="flex flex-col items-center justify-center gap-1 tab:gap-5 w-full px-5">
            <p className="text-xl tab:text-3xl font-extrabold text-white  group-hover:text-[#22876A]">OUR VISION</p>
            <p className="text-sm tab:text-lg font-bold text-white text-center group-hover:text-[#22876A] font-serif">
              To be the most trusted and innovative HVAC solutions provider in the industry.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AboutCard;