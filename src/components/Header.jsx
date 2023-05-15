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


const Header = () => {

  const [email, setEmail] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    submitEmailRequest(email);
    setEmail('');
  };

  return (
    <div className="md:w-screen mx-auto bg-blackGreen">
      <div className="absolute md:left-16 border-l border-lineGreen md:py-72"></div>

      <div className="absolute md:right-16 right-16 border-r border-lineGreen md:py-72"></div>

      <div className="absolute md:right-[32rem] border-l border-lineGreen md:py-72"></div>

      <div className="absolute md:left-[32rem] border-l border-lineGreen md:py-72"></div>
      
      <div className="relative z-10">
        <h1 className="text-white text-center pt-12 md:pt-24 md:pb-4 md:text-6xl text-2xl">Explore tech products that never <br /> made it to the world.</h1>
        <p className="pt-2 text-sm md:text-base text-white text-center max-w-lg px-4 pb-12 md:max-w-2xl mx-auto font-body md:pb-16">We curate and showcase a portfolio of innovative tech products that never made it to market, providing valuable insights into their potential and the challenges of product development.</p>

      </div>

      <form onSubmit={handleSubmit} className="relative z-10 max-w-md mx-auto pb-30 px-4 md:px-0">
        <div className="flex items-center border-b-2 border-gray-300 py-2 px-2 rounded-md bg-white">
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
        <p className="text-white font-body text-sm pt-2 text-center">Be one of first to test our products.</p>
      </form>

    </div>
  )
}

export default Header