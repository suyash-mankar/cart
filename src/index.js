import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore';



const firebaseConfig = {
    apiKey: "AIzaSyDAHDUoSOuqNFujd1alkaMXqj83k372iqw",
    authDomain: "cart-2b619.firebaseapp.com",
    projectId: "cart-2b619",
    storageBucket: "cart-2b619.appspot.com",
    messagingSenderId: "966911847967",
    appId: "1:966911847967:web:de7081a0e0b73524ebaf2a"
};

firebase.initializeApp(firebaseConfig);
export const firestore = firebase.firestore();


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);


