import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { initializeApp } from "firebase/app";

const firebaseConfig = {
    apiKey: "AIzaSyDAHDUoSOuqNFujd1alkaMXqj83k372iqw",
    authDomain: "cart-2b619.firebaseapp.com",
    projectId: "cart-2b619",
    storageBucket: "cart-2b619.appspot.com",
    messagingSenderId: "966911847967",
    appId: "1:966911847967:web:de7081a0e0b73524ebaf2a"
  };

const app = initializeApp(firebaseConfig);
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);


