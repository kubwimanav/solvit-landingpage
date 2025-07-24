import React from 'react'

function Input({name, type, placeholder, value, onChange, className }) {
  return (
      <input
        name={name}
        type={type}
        value={value}
        placeholder={placeholder}
        onChange={onChange}
        className="border border-teal-700 rounded-md p-4 w-full"
      />
  
  );
}

export default Input
