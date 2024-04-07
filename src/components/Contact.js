import React, { useState } from "react";

function Contact() {
  const [formData, setFormData] = useState({
    firstName: "",
    phone: "",
    email: "",
    message: "",
  });

  const handleChange = (event) => {
    setFormData({ ...formData, [event.target.name]: event.target.value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log("Form submitted!", formData);
  };
  return (
    <>
      <div className="container mx-auto px-4 py-16 paragraph font-light my-10">
        <h2 className="text-4xl font-bold mb-8">Contact Us</h2>
        <p className="mb-8 text-[16px]">
          If you're a member of the media and would like to get in touch, please
          send us a note. For non-press-related inquiries, please use our
          general contact page.
        </p>
        <form onSubmit={handleSubmit}>
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
            <div className="flex flex-col">
              <label htmlFor="firstName" className="mb-2 text-sm font-medium">
                First Name
              </label>
              <input
                type="text"
                id="firstName"
                name="firstName"
                className="shadow-sm px-4 py-3 rounded-md focus:outline-none focus:ring-1 focus:ring-indigo-500 w-full border border-gray-400"
                placeholder="Your First Name"
                value={formData.firstName}
                onChange={handleChange}
                required
              />
            </div>
            <div className="flex flex-col">
              <label htmlFor="phone" className="mb-2 text-sm font-medium">
                Phone
              </label>
              <input
                type="tel"
                id="phone"
                name="phone"
                className="shadow-sm px-4 py-3 rounded-md focus:outline-none focus:ring-1 focus:ring-indigo-500 w-full border border-gray-400"
                placeholder="Your Phone Number"
                value={formData.phone}
                onChange={handleChange}
              />
            </div>
            <div className="flex flex-col md:col-span-2">
              <label htmlFor="email" className="mb-2 text-sm font-medium">
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                className="shadow-sm px-4 py-3 rounded-md focus:outline-none focus:ring-1 focus:ring-indigo-500 w-full border border-gray-400"
                placeholder="Your Email Address"
                value={formData.email}
                onChange={handleChange}
                required
              />
            </div>
            <div className="flex flex-col md:col-span-2">
              <label htmlFor="message" className="mb-2 text-sm font-medium">
                Type your message here
              </label>
              <textarea
                id="message"
                name="message"
                className="shadow-sm px-4 py-3 rounded-md focus:outline-none focus:ring-1 focus:ring-indigo-500 w-full border border-gray-400 h-32"
                placeholder="Your Message"
                value={formData.message}
                onChange={handleChange}
                required
              />
            </div>
          </div>
          <button
            type="submit"
            className="inline-flex items-center justify-center px-4 py-1 text-black border border-gray-400 hover:text-white rounded-full hover:bg-blue-500 focus:outline-none focus:ring-2 focus:ring-offset-2  mt-4 text-[15px]"
          >
            Send
          </button>
        </form>
      </div>
    </>
  );
}

export default Contact;
