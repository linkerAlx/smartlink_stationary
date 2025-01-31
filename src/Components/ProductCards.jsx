import React from "react";

const ProductCards = ({ product }) => {
  return (
    <div className="bg-[#CDD5DB] border-1 border-gray-400 rounded-lg shadow-xl p-4 w-full max-w-xs sm:max-w-sm md:max-w-md 
    transform transition duration-300 hover:scale-105 hover:shadow-3xl flex flex-col">

      <img
        src={product.image}
        alt={product.name}
        className="w-full aspect-[4/3] object-cover rounded-t-lg"
      />
      <div className="p-3 flex flex-col gap-2">
        <p className="text-gray-500 text-sm md:text-base">{product.price}</p>
        <h3 className="text-lg md:text-xl font-semibold">{product.name}</h3>
        <button className="bg-[#B28C63] text-white px-4 py-2 rounded-full mt-3 w-full text-sm md:text-base">
          Shop Now
        </button>
      </div>
    </div>
  );
};

export default ProductCards;
