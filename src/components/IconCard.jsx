import React from 'react'
import { GiBookPile } from 'react-icons/gi';
import { SiBookstack } from "react-icons/si";
function IconCard( {icon,title,description,children} ) {
  return (
    <div className="  bg-teal-50 p-5 border border-teal-100 w-3xs sm:w-md md:w-3xs">
      <div className="w-14 h-14 sm:h-12 sm:w-12 bg-gradient-to-br from-teal-600 to-emerald-600 rounded-full flex items-center justify-center mb-6 mx-auto shadow-lg shadow-teal-600/30">
        <GiBookPile className=' text-3xl sm:text-2xl md:text-3xl'/>
      </div>
      <h3 className="text-xl font-bold text-gray-800 mb-3  text-center sm:text-xs md:text-xl">
        {title}
      </h3>
      <p className="text-slate-600 font-normal text-sm sm:text-xs text-center leading-relaxed">
        {description}
      </p>
    </div>
  );
}

export default IconCard
