import { Link } from "react-router-dom"

function Card({imgUrl,title,price,id}) {
    return(
        <div className="font-montserrat w-[250px] h-[600] bg-[#000] border-2 border-stone-950 rounded-xl hover:border-[#fff] flex flex-col gap-6 items-center">
            <img src={imgUrl} alt={title} className="w-[200px] h-[200px] object-contain p-2 pt-3" />
            <Link to={`/shop/${id}`} className="p-2 text-white">{title}</Link>
            <span className="p-2 text-white">{price}</span>
        </div>
    )
}
export default Card