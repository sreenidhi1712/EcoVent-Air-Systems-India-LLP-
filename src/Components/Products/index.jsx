import { useNavigate } from "react-router-dom";


// eslint-disable-next-line react/prop-types
function Product({image,data}) {
  const navigate = useNavigate();
  return (
    <div className="w-[90%] h-60 py-7  bg-white  hover:shadow-2xl shadow-lg rounded-2xl  ml:w-[100%] tab:h-80 lap:w-[90%] flex flex-col items-center justify-between hover:scale-105 transition-all duration-500">
      <div className="w-[90%] h-[70%] flex justify-center items-center">
      <img src={image} className="h-full w-full object-contain "/>
      </div>
      <p className="text-2xl font-bold">{data}</p>
      <button className="mt-2 h-[20%] bg-green-400 px-4 py-2 rounded-xl font-extrabold text-white" onClick={()=>navigate(`/product/${data}`)}>View more</button>
    </div>
  )
}

export default Product
