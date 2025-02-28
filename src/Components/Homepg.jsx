import React from "react";
import { categories, products } from "../Constants";
import ProductCards from "./ProductCards";

const Homepg = () => {
  return (
    <div className="bg-[#CDD5DB] min-h-screen p-6 mt-16 "> 
      {/* Added pb-20 to push content above the fixed navbar */}

      {/* Header Section */}
      <h1 className="text-center text-xl md:text-2xl lg:text-3xl font-serif text-gray-700">
        SmartLink Station — <span className="italic">Where Creativity Meets Innovation</span>
      </h1>

      <div className="relative w-[102px] h-[32px] mb-6">
        <div className="absolute w-[102px] h-[32px] bg-[#4B6382] z-2">
          <div className="absolute w-[102px] h-[32px] bg-[#A4B5C4] z-1 top-1/4 left-1/4 transform translate-x-1/2 translate-y-1/2"></div>
        </div>
      </div>

      <p className="text-center text-lg md:text-xl font-semibold mt-2">
        Your One-Stop Shop for Stationery, Invitations & Web Solutions.
      </p>

      {/* Categories Section */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 mt-6 justify-center">
        {categories.map((category, index) => (
          <div key={index} className="relative bg-[#071739] m-4 text-white rounded-lg p-4 text-center">
            <h3 className="font-semibold">{category.title}</h3>
            <button className="absolute left-1/2 top-[40px] w-50 transform -translate-x-1/2 bg-[#CDD5DB] text-black text-sm rounded-md px-3 py-1 hover:bg-[#A4B5C4]">
              {category.description}
            </button>
          </div>
        ))}
      </div>

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
      <div className="mt-10 ">
        <h2 className="text-xl font-semibold text-[#071739] mb-4">
          <span className="text-[#A68868]">Top </span>Picks
        </h2>
        <div className="grid grid-cols-1  m-auto sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {products.map((product) => (
            <ProductCards key={product.id} product={product} />
          ))}
        </div>
      </div>
      <button className="bg-[#B28C63] text-white px-4 py-2 rounded-full mt-6 w-60 text-sm md:text-base block mx-auto text-center">
  View More 
</button>

    </div>
  );
};

export default Homepg;
