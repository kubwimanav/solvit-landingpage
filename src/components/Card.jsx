import React from "react";

export default function Card({
  image,
  title,
  price,
  description,
  className,
  children,
}) {
  return (
    <div className="flex flex-col gap-2 border border-white shadow-md rounded-md">
      <img src={image} alt="" className="w-75 h-72" />

      {/* div for title, price and description */}
      <div className="flex flex-col gap-3">
        {/* Titles and Price */}
        <span className="flex flex-col items-center text-center justify-between">
          <h1 className="text-teal-700 font-bold text-[16px] pb-2 border-b-2 ">
            {title}
          </h1>
          <h2 className=" w-50 font-semibold text-sm  p-1 rounded-md">
            {description}
          </h2>
        </span>

        {/* Description text */}
        <span>
          <p className="text-lg font-bold text-center text-teal-700">Learn More</p>
        </span>
      </div>
      <div className={className}>{children}</div>
    </div>
  );
}
