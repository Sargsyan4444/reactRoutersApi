import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

function Product() {
    const { id } = useParams();
    const [product, setProduct] = useState(null);
    useEffect(() => {
        fetch(`https://dummyjson.com/products/${id}`)
            .then(res => res.json())
            .then(data => setProduct(data));
    }, [id]);
     if (!product) {
        return (
            <div className="flex justify-center items-center h-screen">
                <div className="animate-spin border-t-4 border-lime-500 w-16 h-16 border-solid rounded-full"></div>
            </div>
        );
    }
 return (
        <div className="max-w-6xl mx-auto p-4 sm:p-6 flex flex-col items-center gap-10 bg-[#7CFC00] pb-4 shadow-xl rounded-2xl mt-10 relative">
            <div className="flex flex-wrap justify-center gap-4">
                {product.images.map((img, index) => (
                    <img
                        key={index}
                        className="w-[450px] h-[450px] object-contain rounded-xl shadow hover:scale-105 transition-transform duration-300 cursor-pointer"
                        src={img}
                        alt={product.title}
                    />
                ))}
            </div>
            <div className="text-center px-4 sm:px-0">
                <h1 className="text-3xl font-bold text-white">{product.title}</h1>
                <p className="text-white mt-2">{product.description}</p>
                <div className="text-sm text-white mt-2 italic">{product.category}</div>
                 <div className="mt-4 text-xl text-black font-semibold">
                    ${product.price}
                    <span className="ml-4 text-red-600 text-lg">Զեղչ՝ {product.discountPercentage}%</span>
                </div> 
                <div className="text-sm mt-2 text-gray-500"> Մնացորդ՝ {product.stock} հատ </div>
                 <button className="mt-6 px-6 py-2 bg-black hover:bg-white hover:text-black text-white rounded-xl shadow-md"> Ավելացնել զամբյուղ </button>
            </div>
        </div>
    );
}

export default Product;
