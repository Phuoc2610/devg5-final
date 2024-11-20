import React from 'react';

const Contact = () => {
  return (
    <div className="w-[90%] mx-auto my-10">
      <h1 className="text-4xl font-bold text-center mb-10">Contact Us</h1>
      <div className="flex flex-col lg:flex-row lg:justify-between gap-10">
        {/* Form liên hệ */}
        <form className="w-full lg:w-1/2 bg-white p-8 shadow-md rounded-lg">
          <div className="mb-4">
            <label htmlFor="name" className="block text-gray-700 font-bold mb-2">
              Your Name
            </label>
            <input
              type="text"
              id="name"
              placeholder="Enter your name"
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring focus:ring-blue-200"
            />
          </div>
          <div className="mb-4">
            <label htmlFor="email" className="block text-gray-700 font-bold mb-2">
              Email
            </label>
            <input
              type="email"
              id="email"
              placeholder="Enter your email"
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring focus:ring-blue-200"
            />
          </div>
          <div className="mb-4">
            <label htmlFor="message" className="block text-gray-700 font-bold mb-2">
              Message
            </label>
            <textarea
              id="message"
              rows="4"
              placeholder="Type your message"
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring focus:ring-blue-200"
            ></textarea>
          </div>
          <button className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600">
            Send Message
          </button>
        </form>

        {/* Thông tin liên hệ */}
        <div className="w-full lg:w-1/2 flex flex-col gap-4">
          <div className="flex items-center gap-4">
            <div className="p-4 bg-blue-500 text-white rounded-full">
              <i className="fas fa-map-marker-alt"></i>
            </div>
            <div>
              <h3 className="font-bold text-lg">Our Location</h3>
              <p>117 Nguyen Tri Phuong, Ho Chi Minh City</p>
            </div>
          </div>
          <div className="flex items-center gap-4">
            <div className="p-4 bg-blue-500 text-white rounded-full">
              <i className="fas fa-envelope"></i>
            </div>
            <div>
              <h3 className="font-bold text-lg">Email Us</h3>
              <p>phuoc0905886611@gmail.com</p>
            </div>
          </div>
          <div className="flex items-center gap-4">
            <div className="p-4 bg-blue-500 text-white rounded-full">
              <i className="fas fa-phone-alt"></i>
            </div>
            <div>
              <h3 className="font-bold text-lg">Call Us</h3>
              <p>0905886611</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
