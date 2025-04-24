import { Link } from "react-router-dom"

function Card({imgUrl,title,price,id}) {
    return(
        <div className="w-[250px] h-[600] bg-slate-50 border-2 border-stone-950 rounded-xl hover:border-[#2563eb] flex flex-col gap-6 items-center">
            <img src={imgUrl} alt={title} className="w-[200px] h-[200px] object-contain p-2 pt-3" />
            <Link to={`/shop/${id}`} className="p-2">{title}</Link>
            <span className="p-2">{price}</span>
        </div>
    )
}
export default Card