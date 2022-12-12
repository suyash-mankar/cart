import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyDE6KyuC83df2jBlng46misQX7iz6668jc",
    authDomain: "practice-adaa8.firebaseapp.com",
    projectId: "practice-adaa8",
    storageBucket: "practice-adaa8.appspot.com",
    messagingSenderId: "267511970269",
    appId: "1:267511970269:web:45b4aa96ef697d349e1e34"
  };

firebase.initializeApp(firebaseConfig);


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);


