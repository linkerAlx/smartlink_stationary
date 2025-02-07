import React from 'react'
import ProductCards from '../Components/ProductCards'
import { products } from '../Constants'

const Productspage = () => {
  return (
    <div className='bg-[#CDD5DB] min-h-screen p-6 mt-16'>
        
      {/* Product Listings */}
      <div className="mt-10">
        <h2 className="text-xl font-semibold text-[#071739] mb-4">
          <span className="text-[#A68868]">New </span>Arrivals
        </h2>

        <div className="overflow-x-auto hide-scrollbar pb-4">
          <div className="flex gap-6">
            {products.map((product) => (
              <div className="flex-none w-[250px] sm:w-[300px] md:w-[350px] min-h-[300px]" key={product.id}>
                <ProductCards product={product} />
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Top Picks */}
      <div className="mt-10">
        <h2 className="text-xl font-semibold text-[#071739] mb-4">
          <span className="text-[#A68868]">Top </span>Picks
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {products.map((product) => (
            <ProductCards key={product.id} product={product} />
          ))}
        </div>
      </div>
      <button className="bg-[#B28C63] text-white px-4 py-2 rounded-full mt-6 w-60 text-sm md:text-base block mx-auto text-center">
  View More 
</button>
      
    </div>
  )
}

export default Productspage
