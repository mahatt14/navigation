
import React, { useState } from 'react';

const ConsecutiveInputsWithData = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    message: '',
  });

  const [showData, setShowData] = useState(false);

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.id]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setShowData(true);
  };

  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <form
        className="bg-teal-800 shadow-md rounded px-8 pt-6 pb-8 mb-4 w-full max-w-md"
        onSubmit={handleSubmit}
      >
        <div className="flex flex-col space-y-4">
          <div className="flex space-x-4">
            <div className="flex-1">
              <label
                htmlFor="firstName"
                className="block text-white font-bold mb-2"
              >
                First Name:
              </label>
              <input
                type="text"
                id="firstName"
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                placeholder="Enter your first name"
                value={formData.firstName}
                onChange={handleInputChange}
              />
            </div>
            <div className="flex-1">
              <label
                htmlFor="lastName"
                className="block text-white font-bold mb-2"
              >
                Last Name
              </label>
              <input
                type="text"
                id="lastName"
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                placeholder="Enter your last name"
                value={formData.lastName}
                onChange={handleInputChange}
              />
            </div>
          </div>
          <div className="flex space-x-4">
            <div className="flex-1">
              <label
                htmlFor="email"
                className="block text-white font-bold mb-2"
              >
                Email
              </label>
              <input
                type="email"
                id="email"
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                placeholder="Enter your email"
                value={formData.email}
                onChange={handleInputChange}
              />
            </div>
            <div className="flex-1">
              <label
                htmlFor="phone"
                className="block text-white font-bold mb-2"
              >
                Phone
              </label>
              <input
                type="tel"
                id="phone"
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                placeholder="Enter your phone number"
                value={formData.phone}
                onChange={handleInputChange}
              />
            </div>
          </div>
          <div>
            <label
              htmlFor="message"
              className="block text-white font-bold mb-2"
            >
              Message
            </label>
            <textarea
              id="message"
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              placeholder="Enter your message"
              value={formData.message}
              onChange={handleInputChange}
            />
          </div>
          <button
            type="submit"
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
          >
            Submit
          </button>
        </div>
      </form>
      {showData && (
        <div className="bg-teal-800 shadow-md rounded px-8 pt-6 pb-8 mb-4 w-full max-w-md">
          <h1 className="text-2xl font-bold mb-4 text-white">Form Data</h1>
          <p className="font-bold text-white">
            First Name: <span className=" text-white">{formData.firstName}</span>
          </p>
          <p className="font-bold text-white">
            Last Name: <span className="text-white">{formData.lastName}</span>
          </p>
          <p className="font-bold text-white">
            Email: <span className=" text-white">{formData.email}</span>
          </p>
          <p className="font-bold text-white">
            Phone: <span className=" text-white">{formData.phone}</span>
          </p>
          <p className="font-bold text-white">
            Message: <span className=" text-white">{formData.message}</span>
          </p>
          
        </div>
        
      )}
      <footer className="bg-white text-black py-4 border rounded">
        <div className="container mx-auto text-center">
          <p>&copy; 2024 Eng Mahat. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
};

export default ConsecutiveInputsWithData;
