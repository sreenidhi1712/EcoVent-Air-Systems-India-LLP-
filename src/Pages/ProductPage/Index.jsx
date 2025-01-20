
import React, { useEffect } from "react";
import { useLocation, useNavigate, useParams } from "react-router-dom";
import { Helmet } from "react-helmet";
import productdData from "../../data";

function ProductPage() {
  const { product } = useParams();
  const { pathname } = useLocation();
  const navigate = useNavigate();

  console.log(product);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  const filteredProducts = product !== "all" 
    ? productdData.filter((item) => item.productUrl === product)
    : productdData;

  // Handling case if product is not found
  if (filteredProducts.length === 0) {
    return (
      <div className="w-full min-h-screen bg-white flex flex-col items-center mt-20">
        <h1 className="text-3xl ml:text-5xl font-bold text-[#22876A] mb-10 text-center">
          Product Not Found
        </h1>
        <p className="text-lg text-gray-700">Sorry, the product you're looking for doesn't exist.</p>
      </div>
    );
  }

  return (
    <div className="w-full min-h-screen bg-white pt-10 flex flex-col items-center mt-20">
      {/* Helmet for SEO and Social Media Sharing */}
      <Helmet>
        <title>{`ECOVENT | ${filteredProducts[0].productName}`}</title>
        <meta
          name="description"
          content={filteredProducts[0].productDescription}
        />
        <meta name="keywords" content="HVAC,Rectangular Ducts,Flat Oval Ducts,Volume Controller Dampers,Spiral Duct,Dampers,Duct,duct systems, fabrication standards, ECOVENT ,Ecovent Air Systems,Ecovent Air Systems India LLP" />
        <link rel="canonical" href={`https://www.ecoventairsystems.com/products/${product}`} />
        
        {/* Open Graph Meta Tags */}
        <meta property="og:title" content={`ECOVENT | ${filteredProducts[0].productName}`} />
        <meta property="og:description" content={filteredProducts[0].productDescription} />
        <meta property="og:image" content={filteredProducts[0].productImg} />
        <meta property="og:url" content={`https://www.ecoventairsystems.com/products/${product}`} />
        <meta property="og:type" content="website" />
        
        {/* Twitter Meta Tags */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={`ECOVENT | ${filteredProducts[0].productName}`} />
        <meta name="twitter:description" content={filteredProducts[0].productDescription} />
        <meta name="twitter:image" content={filteredProducts[0].productImg} />
      </Helmet>

      {/* Title */}
      {product === "all"  && (
        <h1 className="text-3xl ml:text-5xl lap:text-6xl font-bold text-[#22876A] mb-10 text-center">
          <span className="text-black">OUR</span> PRODUCTS
        </h1>
      )}

      {/* Products Section */}
      {filteredProducts.map((item) => (
        <div
          key={item.productId}
          className="w-11/12 bg-[#f7f7f7] shadow-2xl rounded-lg p-6 lap:p-10 mb-12 flex flex-col lap:flex-row"
        >
          {/* Image Section */}
          <div className="lap:w-1/2 flex justify-center items-center bg-white  shadow-xl rounded-xl hover:scale-105 transition-transform duration-300 hover:shadow-2xl">
            <img
              src={item.productImg}
              alt={item.productName}
              className="w-full lap:w-3/4 object-contain rounded-md"
              loading="lazy"
            />
          </div>

          {/* Details Section */}
          <div className="lap:w-1/2 mt-8 lap:mt-0 lap:ml-10">
            <h1 className="text-3xl ml:text-4xl lap:text-5xl font-extrabold text-[#22876A] mb-4">
              {item.productName}
            </h1>
            <p className="text-base ml:text-lg lap:text-xl text-gray-700 mb-6 leading-relaxed">
              {item.productDescription}
            </p>

            {/* Fabrication Standard */}
            {item.productFS && (
              <div className="mb-6">
                <h2 className="text-xl ml:text-2xl lap:text-3xl font-semibold text-[#22876A] mb-2">
                  Fabrication Standard
                </h2>
                <ul className="list-disc ml-5 text-gray-600">
                  {item.productFS.map((fabricationStandard, index) => (
                    <li key={index} className="mb-1">
                      {fabricationStandard}
                    </li>
                  ))}
                </ul>
              </div>
            )}

            {/* Fabrication Options */}
            {item.productFO && (
              <div>
                <h2 className="text-xl ml:text-2xl lap:text-3xl font-semibold text-[#22876A] mb-2">
                  Fabrication Options
                </h2>
                <ul className="list-disc ml-5 text-gray-600">
                  {item.productFO.map((fabricationOption, index) => (
                    <li key={index} className="mb-1">
                      {fabricationOption}
                    </li>
                  ))}
                </ul>
              </div>
            )}

            {/* Action Button */}
            <div className="mt-6">
              <button
                onClick={() => navigate("/contactUs")}
                className="px-4 py-2 ml:px-6 ml:py-3 lap:px-8 lap:py-4 bg-[#22876A] text-white font-medium rounded-lg shadow-md hover:bg-[#1c7057] transition-all"
              >
                Enquire Now
              </button>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

export default ProductPage;
