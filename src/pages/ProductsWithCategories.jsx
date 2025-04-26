import { useEffect, useState } from "react"
import { Link, useParams } from "react-router-dom"

function ProductsWithCategories() {
    const {slug} = useParams()
    const [data,setData] = useState([])
    useEffect(()=>{
        fetch(`https://dummyjson.com/products/category/${slug}`)
        .then(res => res.json())
        .then(res=>setData(res.products));
    },[slug])
    return(
        <div>
            <Link to="/">Go Home</Link>
            <div>
       {data.length === 0 ? (
           <h3>There is no page like this</h3>
        ):(
            data.map((elm)=>(
                <h3 key={"product-title-"+elm.id}>{elm.title}</h3>
            ))
        )}
            </div>
        </div>
    )
}
export default ProductsWithCategories