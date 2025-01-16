import Slider from 'react-slick';
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
 import Slider1 from "../../assets/Slider1.jpg"
 import Slider2 from "../../assets/Slider2.jpeg"
  import Slider3 from "../../assets/Slider3.jpg"
  import Slider5 from "../../assets/Slider5.jpg"

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
        <div className="h-[300px] tab:h-[500px] flex justify-center items-end">
          <div className="w-[95%] h-full mx-auto flex justify-center items-center  rounded-3xl shadow-lg overflow-hidden">
            <img
              src={Slider1}
              alt="Duct Manufacturing Works"
              className="object-cover w-full h-full"
            />
          </div>
        </div>

        {/* Slide 2 */}
        <div className="h-[300px] tab:h-[500px] flex justify-center items-end">
          <div className="w-[95%] h-full mx-auto flex justify-center items-center  rounded-3xl shadow-lg overflow-hidden">
            <img
             src={Slider2}
              alt="Dampers Manufacturing"
              className="object-cover w-full h-full"
            />
          </div>
        </div>

        {/* Slide 3 */}
        <div className="h-[300px] tab:h-[500px] flex justify-center items-end">
          <div className="w-[95%] h-full mx-auto flex justify-center items-center rounded-3xl shadow-lg overflow-hidden">
            <img
                src={Slider3}
              alt="Plenum Manufacturing"
              className="object-cover w-full h-full"
            />
          </div>
        </div>

        {/* Slide 4 */}
        {/* <div className="h-[300px] tab:h-[500px] flex justify-center items-end">
          <div className="w-[95%] h-full mx-auto flex justify-center items-center  rounded-3xl shadow-lg overflow-hidden">
            <img
             src={Slider4}
              alt="Ducting and Thermal Insulation"
              className="object-cover w-full h-full"
            />
          </div>
        </div> */}
{/* Slider 5 */}
        <div className="h-[300px] tab:h-[500px] flex justify-center items-end">
          <div className="a w-[95%] h-full mx-auto flex justify-center items-center  rounded-3xl shadow-lg overflow-hidden  " >
            <img
             src={Slider5}
              alt="Ducting and Thermal Insulation"
              className="object-cover w-full h-full object-center"
            />
          </div>
        </div>
      </Slider>
    </div>
  );
}
