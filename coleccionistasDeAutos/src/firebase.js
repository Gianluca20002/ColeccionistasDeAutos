// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCTAaaF5kYGpNqyIx6KwqAAgHlp35CEHEc",
  authDomain: "coleccionistasdeautos.firebaseapp.com",
  projectId: "coleccionistasdeautos",
  storageBucket: "coleccionistasdeautos.appspot.com",
  messagingSenderId: "986025657260",
  appId: "1:986025657260:web:6a0a1ba8cbe9a321fd7009",
  measurementId: "G-YVKRGN28CN"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);