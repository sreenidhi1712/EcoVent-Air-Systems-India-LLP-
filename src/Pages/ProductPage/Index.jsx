import { useEffect } from "react";
import { useLocation, useParams } from "react-router-dom"

function ProductPage() {

    const {product} = useParams()
    const { pathname } = useLocation();

    useEffect(() => {
      window.scrollTo(0, 0);
    }, [pathname]);
  return (
    <div className="w-[100%] h-screen bg-slate-200 mt-28 flex flex-col items-center justify-center">
      <p className="mt-10 font-bold text-4xl">{product}</p>
    </div>
  )
}

export default ProductPage
