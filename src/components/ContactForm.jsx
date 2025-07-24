import React, { useState } from 'react'
import Input from './Input';

function ContactForm() {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        subject: '',
        message: ''
    });
    const [error, setError] = useState({});
    const formerrors = {};
   const handleChange = (event) => {
          console.log(event);
          setFormData((prev) => ({
            ...prev,
            [event.target.name]: event.target.value,
          }));

          console.log(formData);
      
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Handle form submission logic here
        console.log('Form submitted:', formData);
         if (!formData.name.trim()) {
           formerrors.name = "Name Is Required";
         }

         if (!formData.email.includes("@")) {
           formerrors.email = "Email is required";
         }

         if (!formData.subject.trim()) {
           formerrors.subject = "Subject is required";
         }
         if (!formData.message.trim()) {
           formerrors.message = " Please Enter Your Message";
         }

         if (Object.keys(formerrors).length > 0) {
           setError(formerrors);
         } else {
           alert("Registration Successful!");
           setFormData({
             name: "",
             subject: "",
             email: "",
             message: "",
           });
         }
    }; 

  return (
    <div>
      <form action="" className=" flex flex-col gap-2 " onSubmit={handleSubmit}>
        <Input
          name={"name"}
          type={"text"}
          placeholder={"name"}
          value={formData.name}
          onChange={handleChange}
        />
        {error.name && <p className=" text-red-600">{error.name}</p>}
        <Input
          name={"email"}
          type={"email"}
          placeholder={"email"}
          value={formData.email}
          onChange={handleChange}
        />
        {error.email && <p className=" text-red-600">{error.email}</p>}
        <Input
          name={"subject"}
          type={"text"}
          placeholder={"subject"}
          value={formData.subject}
          onChange={handleChange}
        />
        {error.subject && <p className=" text-red-600">{error.subject}</p>}
        <textarea
          name={"message"}
          type={"text"}
          placeholder={"message"}
          value={formData.message}
          onChange={handleChange}
          className="border border-teal-700 rounded-md p-4 sm:w-full md:w-3xs lg:w-2xl"
        />
        {error.message && <p className=" text-red-600">{error.message}</p>}

        <button className=" bg-teal-700  w-1/2 py-2.5 rounded-md text-white">
          Send Message
        </button>
      </form>
    </div>
  );
}

export default ContactForm
