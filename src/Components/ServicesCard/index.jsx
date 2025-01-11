import Slider from 'react-slick';
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";


export default function ServiceCard() {
  const settings = {
    infinite: true,
    autoplay: true,
    speed: 3000,
    autoplaySpeed: 1000,
    slidesToShow: 4, // Default number of slides
    slidesToScroll: 1,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024, // For screens <= 1024px
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 768, // For screens <= 768px
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 480, // For screens <= 480px
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],

  };

  return (
    <div className="mt-20 w-full h-auto py-5 overflow-hidden flex flex-col items-center gap-5">
      <p className="text-4xl font-bold">
        OUR <span className="text-green-400">SERVICES</span>
      </p>
      <Slider {...settings} className="w-full mt-10">
        {[
          "Duct Manufacturing Works",
          "Dampers Manufacturing",
          "Plenum Manufacturing",
          "Ducting & Thermal Insulation",
          "Fire Fighting Works",
          "Industrial Installations",
        ].map((service, index) => (
          <div key={index} className="h-[370px] flex justify-center items-end">
            <div className="w-[90%] h-full mx-auto flex justify-center items-center border-2 border-green-400 rounded-3xl shadow-lg">
              <p className="text-center font-medium">{service}</p>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
}
