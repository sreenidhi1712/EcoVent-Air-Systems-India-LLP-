import sliderImage2 from "../../assets/18493.webp"

function IntoductionCard() {
  return (
    <div className="w-full relative">
    <div className="w-full h-60 py-5 bg-slate-100 flex lap:h-screen opacity-20  justify-start items-center" style={{backgroundImage: `url(${sliderImage2})`, backgroundSize: 'cover', backgroundPosition: 'center'}}>    
    </div>
    <div className="w-[40%] absolute top-1/2 left-[10%] transform  ">

<p className=" text-4xl font-bold">
HVAC contracting company 
</p>

<p className=" text-2xl mt-10">
specializing in design, manufacturing, supply & installation of Electro-Mechanical &
HVAC Systems
</p>

</div>
    </div>
  )
}

export default IntoductionCard
