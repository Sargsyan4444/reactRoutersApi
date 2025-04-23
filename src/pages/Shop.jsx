import { useEffect, useState } from "react"
import Card from "../components/Card";

function Shop() {
    const [searchValue,setSearchValue] = useState("")
    const [data,setData] = useState([])
   useEffect(()=>{
    fetch(`https://dummyjson.com/products/search?q=${searchValue}`)
    .then(res => res.json())
    .then(res=> setData(res.products));
   },[searchValue])
    return(
        <div className="flex flex-col justify-center items-center gap-8">
            <h1>shop page</h1>
            <input type="text" value={searchValue} onChange={(e)=>setSearchValue(e.target.value)} className="bg-amber-200 outline-none border-none w-[300px] h-8 rounded-2xl" />
            <div className="flex flex-wrap my-0 mx-auto m-w-[1440px] px-[30px] gap-6 items-center justify-center">
            {data.map((elm)=><Card key={elm.id} imgUrl={elm.images[0]} title={elm.title} price={elm.price} id={elm.id}/>)}
            </div>
        </div>
    )
}
export default Shop











