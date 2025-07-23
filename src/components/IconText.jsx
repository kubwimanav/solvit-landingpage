import React from 'react'

function IconText({icon,title,text,}) {
  return (
    <div className=" flex  flex-row gap-5">
      <div className=' items-center justify-center rounded-full p-1 border-2 border-dashed border-teal-500'>
        <div className="  h-12 w-12 text-xl text-white  bg-teal-600 rounded-full flex items-center justify-center ">
          {icon}
        </div>
       </div>
      <div className=" flex flex-col gap-1">
        <span className=' text-xl font-bold'>{title}</span>
        <p>{text}</p>
      </div>
    </div>
  );
}

export default IconText
