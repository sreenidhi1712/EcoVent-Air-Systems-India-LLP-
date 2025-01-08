import Slider from 'react-slick';
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
 import mainImageBg from "../../assets/18493.webp"

export default function SliderComponent() {
  const settings = {
    dots: true,
    infinite: true,
    autoplay: true,
    speed: 3000,
    autoplaySpeed: 1000,
    slidesToShow: 1, // Default number of slides
    slidesToScroll: 1,
    initialSlide: 0,
  };

  return (
    <div className="mt-10 w-full h-auto py-5 overflow-hidden ">
      <Slider {...settings} className="w-full mt-10">
        {/* Slide 1 */}
        <div className="h-[300px] tab:h-[450px] flex justify-center items-end">
          <div className="w-[95%] h-full mx-auto flex justify-center items-center  rounded-3xl shadow-lg overflow-hidden">
            <img
              src={mainImageBg}
              alt="Duct Manufacturing Works"
              className="object-cover w-full h-full"
            />
          </div>
        </div>

        {/* Slide 2 */}
        <div className="h-[300px] tab:h-[450px] flex justify-center items-end">
          <div className="w-[95%] h-full mx-auto flex justify-center items-center  rounded-3xl shadow-lg overflow-hidden">
            <img
             src={mainImageBg}
              alt="Dampers Manufacturing"
              className="object-cover w-full h-full"
            />
          </div>
        </div>

        {/* Slide 3 */}
        <div className="h-[300px] tab:h-[450px] flex justify-center items-end">
          <div className="w-[95%] h-full mx-auto flex justify-center items-center rounded-3xl shadow-lg overflow-hidden">
            <img
                src={mainImageBg}
              alt="Plenum Manufacturing"
              className="object-cover w-full h-full"
            />
          </div>
        </div>

        {/* Slide 4 */}
        <div className="h-[300px] tab:h-[450px] flex justify-center items-end">
          <div className="w-[95%] h-full mx-auto flex justify-center items-center  rounded-3xl shadow-lg overflow-hidden">
            <img
             src={mainImageBg}
              alt="Ducting and Thermal Insulation"
              className="object-cover w-full h-full"
            />
          </div>
        </div>
      </Slider>
    </div>
  );
}
