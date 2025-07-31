import { createUserWithEmailAndPassword } from "firebase/auth";
import { Link } from "react-router-dom";
import React, { useState } from "react";

function Register() {
  const [formData, setFormData] = useState({
    fullname: "",
    email: "",
    phoneno: "",
    password: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    console.log(formData);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
  };



  

  return (
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-r from-gray-900 via-gray-800 to-black">
      <form
        onSubmit={handleSubmit}
        className="bg-gradient-to-r from-gray-800 via-gray-700 to-gray-900 p-8 rounded-xl shadow-2xl max-w-sm w-full border border-gray-700"
      >
        <h3 className="text-2xl font-bold text-center text-gray-200 mb-6">
          Sign Up
        </h3>

        <div className="mb-4">
          <label className="block text-gray-400">Full Name</label>
          <input
            type="text"
            className="w-full p-3 border border-gray-600 bg-gray-700 text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all duration-300 hover:shadow-lg hover:border-blue-400"
            placeholder="Enter your Full Name"
            name="fullname"
            value={formData.fullname}
            onChange={handleChange}
            required
          />
        </div>

        <div className="mb-4">
          <label className="block text-gray-400">Email Address</label>
          <input
            type="email"
            className="w-full p-3 border border-gray-600 bg-gray-700 text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all duration-300 hover:shadow-lg hover:border-blue-400"
            placeholder="Enter your email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
          />
        </div>

        <div className="mb-4">
          <label className="block text-gray-400">Phone No:</label>
          <input
            type="text"
            className="w-full p-3 border border-gray-600 bg-gray-700 text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all duration-300 hover:shadow-lg hover:border-blue-400"
            placeholder="Enter your phone number"
            name="phoneno"
            value={formData.phoneno}
            onChange={handleChange}
          />
        </div>

        <div className="mb-4">
          <label className="block text-gray-400">Password</label>
          <input
            type="password"
            className="w-full p-3 border border-gray-600 bg-gray-700 text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all duration-300 hover:shadow-lg hover:border-blue-400"
            placeholder="Enter your password"
            name="password"
            value={formData.password}
            onChange={handleChange}
            required
          />
        </div>

        <button
          type="submit"
          className="w-full p-3 mt-4 text-white bg-gradient-to-r from-blue-600 via-blue-500 to-blue-400 rounded-lg hover:from-blue-500 hover:to-purple-500 transition-all duration-300 shadow-md hover:shadow-lg"
        >
          Sign Up
        </button>

        <p className="text-center text-gray-400 mt-4">
          <Link to="/Login" className="text-blue-400 hover:underline">
            Login
          </Link>
        </p>
      </form>
    </div>
  );
}

export default Register;
