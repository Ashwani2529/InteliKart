import React from "react";

// Card component for displaying product information
const Card = ({ item }) => {
  const { title, description, price, discountPercentage, thumbnail } = item;
  const img = thumbnail;

  return (
    <div 
      style={{ fontFamily: "Quicksand, sans-serif" }}
      className="relative font-regular p-2 rounded-2xl w-64 h-full shadow-md shadow-violet-700 transform transition-transform cursor-pointer duration-300 hover:scale-105"
    >
      <div className="flex-col relative">
        {/* Display offer if available */}
        {discountPercentage ? (
          <span className="bg-yellow-300 p-2 z-2 absolute right-0 top-0">
            {`${discountPercentage}% Off`}
          </span>
        ) : null}
        {/* Product Image */}
        <img
          src={img}
          alt="product"
          className="rounded-2xl object-cover h-40 bg-slate-700"
        />
        <div className="flex justify-between w-full">
          <div className="flex items-center">
            {/* Product Price */}
            <div className="pr-2 font-bold">Rs.{price}</div>
            {/* Savings */}
            {discountPercentage ? (
              <div className="text-green-500 text-sm">
                Saves Rs. {Math.round(price * (discountPercentage / 100))}
              </div>
            ) : null}
          </div>
          <div className="flex items-center space-x-2">
            {/* Icons for actions */}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="black"
              className="w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z"
              />
            </svg>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M12 6.75a.75.75 0 110-1.5.75.75 0 010 1.5zM12 12.75a.75.75 0 110-1.5.75.75 0 010 1.5zM12 18.75a.75.75 0 110-1.5.75.75 0 010 1.5z"
              />
            </svg>
          </div>
        </div>
        {/* Product Title */}
        <div className="font-bold text-lg mt-2">{title}</div>
        {/* Availability */}
        <div className="text-green-500 font-bold text-sm">In Stock</div>
        {/* Product Description */}
        <div className="whitespace-normal mt-2">{description}</div>
      </div>
    </div>
  );
};

export default Card;
