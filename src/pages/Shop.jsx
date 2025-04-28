import { useEffect, useState } from "react"
import Card from "../components/Card";
import { Link } from "react-router-dom";

function Shop() {
    const [searchValue,setSearchValue] = useState("")
    const [categories,setCategories] = useState([])
    const [data,setData] = useState([])
    const [page, setPage] = useState(1);
    const [totalPages, setTotalPages] = useState(0);



   useEffect(()=>{
    fetch(`https://dummyjson.com/products/search?q=${searchValue}`)
    .then(res=>{
        setData(res.products)
        setTotalPages(Math.ceil(res.total/20))
    });
   },[searchValue])



   useEffect(()=>{
    fetch('https://dummyjson.com/products/categories')
    .then(res => res.json())
    .then(res=>setCategories(res));
   },[])

useEffect(()=>{
    fetch(`https://dummyjson.com/products?limit=10&skip=${page*10}`)
    .then(res => res.json())
    .then(res=>setData(res.products));
},[page])

    return(
        <section className="w-full bg-[#7CFC00] font-montserrat">
        <div className="flex flex-col justify-center items-center py-5 gap-8 max-w-[1440px] my-0 mx-auto ">
            <h1 className='font-black text-white text-center text-5xl'> SHOP PAGE</h1>
            <input type="text" value={searchValue} onChange={(e)=>setSearchValue(e.target.value)}  placeholder="Փնտրել ապրանք..." className="pl-[10px] placeholder:text-white bg-slate-400  outline-none border-none sm:w-[300px] sm:h-8 w-[170px] rounded-2xl" />
            <div className="flex gap-2 justify-center items-center flex-wrap">
                {categories.map((elm)=><Link className="w-[130px] h-[50px] px-1 flex items-center justify-center bg-[#fff] text-[#000] rounded-3xl text-center text-wrap  hover:bg-black hover:text-[#7CFC00]" key={elm.slug} to={`category/${elm.slug}`}>{elm.name}</Link>)}
            </div>
            <div className="flex flex-wrap my-0 mx-auto m-w-[1440px] sm:px-[30px] px-[10px] gap-6 items-center justify-center">
            {data.map((elm)=><Card key={elm.id} imgUrl={elm.images[0]} title={elm.title} price={elm.price} id={elm.id}/>)}
            </div>
            <div>
                <button className="bg-white p-4" onClick={()=>setPage(page-1)}>back</button>
                <button className="bg-white p-4" onClick={()=>setPage(page+1)}>next</button>
            </div>
        </div>
        </section>
    )
}
export default Shop