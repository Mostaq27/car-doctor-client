

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey:import.meta.env.VITE_apiKey,
  authDomain:import.meta.env.VITE_authDomain,
  projectId:import.meta.env.VITE_projectId,
  storageBucket:import.meta.env.VITE_storageBucket,
  messagingSenderId:import.meta.env.VITE_messagingSenderId,
  appId:import.meta.env.VITE_appId
//   apiKey: "AIzaSyCZv07bhxSReWNad7Sl1VrvH5Q0BTmgWEw",
//   authDomain: "car-doctor-9d924.firebaseapp.com",
//   projectId: "car-doctor-9d924",
//   storageBucket: "car-doctor-9d924.appspot.com",
//   messagingSenderId: "14023032784",
//   appId: "1:14023032784:web:de0263acf0b29d7fe383d5"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;