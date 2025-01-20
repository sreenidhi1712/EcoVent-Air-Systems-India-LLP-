import { useNavigate } from "react-router-dom";


// eslint-disable-next-line react/prop-types
function Product({image,data,url}) {
  const navigate = useNavigate();
  return (
    <div className="w-[90%] min-h-60 py-7  bg-white  hover:shadow-2xl shadow-lg rounded-2xl  ml:w-[100%] tab:h-80 lap:w-[90%] flex flex-col items-center justify-between hover:scale-105 transition-all duration-500">
      <div className="w-[90%] h-[70%] flex justify-center items-center">
      <img src={image} className="h-full w-full object-contain transition-transform duration-500 hover:scale-110"/>
      </div>
      <p className="text-xl font-bold text-center text-[#22876A] font-serif">{data}</p>
      <button className="text-sm mt-2  bg-[#22876A] px-4 py-2 w-[40%] rounded-lg font-extrabold text-white hover:bg-white hover:border-2 hover:border-[#22876A] hover:text-[#22876A] transition duration-300" onClick={()=>navigate(`/products/${url}`)}>View</button>
    </div>
  )
}

export default Product

