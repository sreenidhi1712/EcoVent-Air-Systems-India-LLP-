import Iconimg from "../../assets/logo.png"

function Footer() {
  return (
    <div className="w-[100%] bg-[#333333] py-10 flex flex-col items-center gap-5">

      <div className="w-[90%] flex flex-col items-center gap-2 ">
        <p className="text-white font-extrabold tab:text-xl lap:text-3xl">ECOVENT AIR SYSTEMS INDIA LLP</p>
        <p className="text-white text-center text-xs tab:text-sm lap:text-lg"> #9/7, 4th CROSS, SARASWATHIPURAM, NANDINI LAYOUT, BENGALURU - 560096</p>
      </div>

      <div className="w-[90%]  flex justify-center mt-20 tab:w-[50%] lap:w-[30%]">
        <img src={Iconimg} alt="phone" className="h-24 w-[90%] object-cover"/>
      </div>

      
    </div>
  )
}

export default Footer
