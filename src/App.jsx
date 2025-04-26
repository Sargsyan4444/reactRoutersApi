import { useEffect, useState } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation } from 'swiper/modules'
import 'swiper/css'
import 'swiper/css/navigation'

function App() {
  const [products, setProducts] = useState([])

  useEffect(() => {
    fetch('https://dummyjson.com/products')
      .then(res => res.json())
      .then(res => {
        const shuffled = res.products.sort(() => 0.5 - Math.random())
        const selected = shuffled.slice(0, 5)
        setProducts(selected)
      })
  }, [])

  return (
    <div className="w-full bg-[#7CFC00]">
      <h1 className='font-black text-white text-center text-5xl'>HOME PAGE</h1>
    <div className="w-full max-w-[1200px] mx-auto py-10 relative ">
      <Swiper
        modules={[Navigation]}
        spaceBetween={20}
        slidesPerView={3}
        navigation
      >
        {products.map((product) => (
          <SwiperSlide key={product.id}>
            <div className="bg-white shadow-md rounded-lg overflow-hidden h-[350px] flex flex-col items-center p-4">
              <img src={product.thumbnail} alt={product.title} className="w-full h-[200px] object-cover rounded-md" />
              <h2 className="text-lg font-bold mt-4">{product.title}</h2>
              <p className="text-gray-500 text-sm mt-1">${product.price}</p>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
    </div>
  )
}

export default App
