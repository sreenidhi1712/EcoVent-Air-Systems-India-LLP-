import AboutCard from "../../Components/AboutCard";
import Product from "../../Components/Products";
import ServiceCard from "../../Components/ServicesCard";
import SliderComponent from "../../Components/Slider";
import ovalDuct from "../../assets/ovalDuct.png";
import rectangularDuct from "../../assets/rectangularDuct.jpg";
import spiralDuct from "../../assets/spiralDucts.jpg"
import volumeDampers from "../../assets/VolumeDampers.jpg"
import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import Contactus from "../../Components/ContactUs";
import { Helmet } from "react-helmet";


// const mainImage  = mainImageBg;
function MainContent() {

  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return (
    <div className={`w-[100%] h-auto pt-10 bg-slate-100 flex flex-col items-center `} >

<Helmet>
        <title>ECOVENT Air Systems | Premium HVAC Solutions</title>
        <meta
          name="description"
          content="Explore ECOVENT Air Systems' premium HVAC products including flat oval ducts, rectangular ducts, spiral ducts, and volume control dampers. Providing innovative solutions since 1989."
        />
        <meta
          name="keywords"
          content="HVAC, HVAC Installation, HVAC Manufacturers, ducts, dampers, flat oval duct, rectangular duct, spiral duct, volume control dampers, ECOVENT Air Systems India LLP, ECOVENT Air Systems, Bangalore"
        />
        <link rel="canonical" href="https://www.ecoventairsystems.com/" />

        {/* Open Graph (OG) Meta Tags for Social Sharing */}
        <meta property="og:title" content="ECOVENT Air Systems | Premium HVAC Solutions" />
        <meta
          property="og:description"
          content="Explore ECOVENT Air Systems' premium HVAC products including flat oval ducts, rectangular ducts, spiral ducts, and volume control dampers. Providing innovative solutions since 1989."
        />
        <meta property="og:image" content="https://www.ecoventairsystems.com/assets/logo.png" />
        <meta property="og:url" content="https://www.ecoventairsystems.com/" />
        <meta property="og:type" content="website" />
        <meta property="og:site_name" content="ECOVENT Air Systems" />

        {/* Twitter Meta Tags */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="ECOVENT Air Systems | Premium HVAC Solutions" />
        <meta
          name="twitter:description"
          content="Explore ECOVENT Air Systems' premium HVAC products including flat oval ducts, rectangular ducts, spiral ducts, and volume control dampers. Providing innovative solutions since 1989."
        />
        <meta name="twitter:image" content="https://www.ecoventairsystems.com/assets/logo.png" />

        {/* Structured Data for internal linking */}
        <script type="application/ld+json">
          {`
            {
              "@context": "https://schema.org",
              "@type": "WebSite",
              "url": "https://www.ecoventairsystems.com",
              "name": "ECOVENT Air Systems",
              "description": "Explore ECOVENT's premium HVAC solutions including ducts and dampers.",
              "mainEntityOfPage": "https://www.ecoventairsystems.com",
              "relatedLink": [
                {
                  "@type": "WebPage",
                  "name": "Products | ECOVENT",
                  "url": "https://www.ecoventairsystems.com/products/all"
                },
                {
                  "@type": "WebPage",
                  "name": "About Us | ECOVENT",
                  "url": "https://www.ecoventairsystems.com/about-us"
                },
                {
                  "@type": "WebPage",
                  "name": "Contact Us | ECOVENT",
                  "url": "https://www.ecoventairsystems.com/contact-us"
                }
              ]
            }
          `}
        </script>

        {/* Breadcrumbs Structured Data */}
        <script type="application/ld+json">
          {`
            {
              "@context": "https://schema.org",
              "@type": "BreadcrumbList",
              "itemListElement": [
                {
                  "@type": "ListItem",
                  "position": 1,
                  "name": "Home",
                  "item": "https://www.ecoventairsystems.com/"
                },
                {
                  "@type": "ListItem",
                  "position": 2,
                  "name": "Products",
                  "item": "https://www.ecoventairsystems.com/products/all"
                },
                {
                  "@type": "ListItem",
                  "position": 3,
                  "name": "About Us",
                  "item": "https://www.ecoventairsystems.com/about-us"
                }
              ]
            }
          `}
        </script>
      </Helmet>

         <SliderComponent/>
      {/* <IntoductionCard/> */}
      <AboutCard/>
      <ServiceCard/>

      <div className="w-full h-auto py-5 bg-slate-100 flex flex-col items-center">
      <p className="text-2xl tab:text-4xl font-bold"><span className="text-[#22876A]">OUR</span> PRODUCTS</p>

      <div className="w-full h-auto grid grid-cols-1  justify-items-center gap-10 mm:gap-5 px-3 mt-10 lap:grid-cols-3 tab:grid-cols-2 " >
          <Product image={ovalDuct} data="FLAT OVAL DUCT" url="flat-oval-duct"/>
          <Product image={rectangularDuct} data="RECTANGULAR DUCT" url="rectangular-duct"/>
          <Product image={spiralDuct} data="SPIRAL DUCT" url="spiral-duct"/>
          <Product image={volumeDampers} data="VOLUME CONTROL DAMPERS" url="volume-control-dampers"/>
      </div>
      </div>
      <Contactus/>
    </div>
  )
}

export default MainContent;
