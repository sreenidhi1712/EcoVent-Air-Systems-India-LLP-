import { useParams } from "react-router-dom"

function ProductPage() {

    const {product} = useParams()
  return (
    <div className="w-[100%] h-screen bg-slate-200 mt-28 flex flex-col items-center justify-center">
      <p className="mt-10 font-bold text-4xl">{product}</p>
    </div>
  )
}

export default ProductPage