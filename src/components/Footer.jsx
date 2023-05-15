import React, { useState } from 'react';
import 'firebase/firestore';


// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyABD8Tg6s0NwBKgf5Jlka4wt82lphu8C1M",
  authDomain: "prodgrav-16a0d.firebaseapp.com",
  projectId: "prodgrav-16a0d",
  storageBucket: "prodgrav-16a0d.appspot.com",
  messagingSenderId: "162163650062",
  appId: "1:162163650062:web:39b38fb46cb8dbe18b965f",
  measurementId: "G-0V7H4001KH"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

const submitEmailRequest = async (email) => {
  try {
    const emailRequestsRef = firebase.firestore().collection('emailRequests');
    await emailRequestsRef.add({ email });
    console.log('Email request submitted successfully');
    // Success message or redirect
  } catch (error) {
    console.error('Error submitting email request:', error);
    // Error message
  }
};

const Footer = () => {
  const [email, setEmail] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    submitEmailRequest(email);
    setEmail('');
  };

  return (
    <div>
      <p className="text-center font-heading md:text-6xl text-2xl pt-12  pb-2 md:pt-28 md:pb-5">Get the ProdGrav advantage</p>

      <form onSubmit={handleSubmit} className="relative z-10 max-w-md mx-auto md:pb-30 pb-12 px-4 md:px-0">
        <div className="flex items-center border-b-2 py-2 px-2 rounded-md bg-white border-blackGreen border">
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className=" bg-white border-none w-full text-gray-700 mr-3 py-1 font-body px-2 leading-tight focus:outline-none"
            placeholder="Enter your email"
            required
          />
          <button
            type="submit"
            className="flex-shrink-0 bg-darkenGreen hover:bg-brightGreen text-sm border-4 text-white font-body py-1 px-2 rounded"
          >
            Request invite
          </button>
        </div>
      </form>


      <div className="bg-blackGreen md:w-screen mx-auto">
        <p className="py-2 text-white font-body max-w-7xl mx-auto ">© 2023 ProdGrav. All Rights Reserved</p>
      </div>
    </div>
  )
}

export default Footer