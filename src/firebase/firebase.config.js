// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDtHXf42ROAv_J-AvvpFn1z4lKDGBiRtIk",
  authDomain: "the-news-dragon-6ccdd.firebaseapp.com",
  projectId: "the-news-dragon-6ccdd",
  storageBucket: "the-news-dragon-6ccdd.appspot.com",
  messagingSenderId: "155296573846",
  appId: "1:155296573846:web:735366e4c5785ba3e515b7"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app