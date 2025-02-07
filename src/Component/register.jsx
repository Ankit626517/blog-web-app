import { createUserWithEmailAndPassword } from "firebase/auth";
import { Link } from 'react-router-dom';
// import Login from './Login'


import React, { useState } from "react";
import { auth ,db } from "./firebase";
import { setDoc, doc } from "firebase/firestore";
import { toast } from "react-toastify";
// import {Link } from 'react-router-dom'

import Login from './Login'

function Register() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [fname, setFname] = useState("");
  const [lname, setLname] = useState("");
  // const [msg  , setmsg] = useState()
 

  const handleRegister = async (e) => {
    e.preventDefault();
    try {
      await createUserWithEmailAndPassword(auth, email, password);
      const user = auth.currentUser;
      // console.log(user);
      // console.log("user register Secsesfully");
      

      if (user) {
        // console.log("Kuchh gadbad hai re baba")
        await setDoc(doc(db, "Users", user.uid), {
          email: user.email,
          firstName: fname,
          lastName: lname,
          // photo:""
        });
      }
      window.location.href="/Login"
      toast.success("user is registerd", {
        position: "bottom-center",
      });
    // msg = "Register Secsecfully"
      //  toast("Wow so easy!");
    } catch (error) {
      console.log(error.message);
      toast.error(error.message, {
        position: "bottom-center",
      });
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-r from-gray-900 via-gray-800 to-black">
    
    <form onSubmit={handleRegister} className="bg-gradient-to-r from-gray-800 via-gray-700 to-gray-900 p-8 rounded-xl shadow-2xl max-w-sm w-full border border-gray-700">
      <h3 className="text-2xl font-bold text-center text-gray-200 mb-6">Sign Up</h3>

      <div className="mb-4">
        <label className="block text-gray-400">First Name</label>
        <input
          type="text"
          className="w-full p-3 border border-gray-600 bg-gray-700 text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all duration-300 hover:shadow-lg hover:border-blue-400"
          placeholder="Enter your first name"
          onChange={(e) => setFname(e.target.value)}
          required
        />
      </div>

      <div className="mb-4">
        <label className="block text-gray-400">Last Name</label>
        <input
          type="text"
          className="w-full p-3 border border-gray-600 bg-gray-700 text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all duration-300 hover:shadow-lg hover:border-blue-400"
          placeholder="Enter your last name"
          onChange={(e) => setLname(e.target.value)}
        />
      </div>

      <div className="mb-4">
        <label className="block text-gray-400">Email Address</label>
        <input
          type="email"
          className="w-full p-3 border border-gray-600 bg-gray-700 text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all duration-300 hover:shadow-lg hover:border-blue-400"
          placeholder="Enter your email"
          onChange={(e) => setEmail(e.target.value)}
          required
        />
      </div>

      <div className="mb-4">
        <label className="block text-gray-400">Password</label>
        <input
          type="password"
          className="w-full p-3 border border-gray-600 bg-gray-700 text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all duration-300 hover:shadow-lg hover:border-blue-400"
          placeholder="Enter your password"
          onChange={(e) => setPassword(e.target.value)}
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
               <Link to="/Login" className="text-blue-400 hover:underline">Login</Link>
            </p>
    </form>
  </div>
  );
}
export default Register;