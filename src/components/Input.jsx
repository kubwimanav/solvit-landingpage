import React from 'react'

function Input({label, type, placeholder, value, onChange, className }) {
  return (
    <form className=" flex flex-col gap-2" onChange={onChange}>
      <input
        type="text"
        placeholder="Name"
        className="border border-teal-700 rounded-md p-4 w-full "
      />
      <input
        type="text"
        placeholder="Email"
        className="border border-teal-700 rounded-md p-4 w-full "
      />
      <input
        type="text"
        placeholder="Subject"
        className="border border-teal-700 rounded-md p-4 sm:w-2xl "
      />

          <textarea name="" id="" placeholder='Your Message' className=' border border-teal-700 p-4 h-32 rounded-md'></textarea>
          <button className=' bg-teal-700  w-1/2 py-2.5 rounded-md text-white'> Send Message</button>
    </form>
  );
}

export default Input
