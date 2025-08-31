// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyBr4vVAWoVG864_aWJgbvh22sLpW-KTzP8",
    authDomain: "netflixgpt-2833c.firebaseapp.com",
    projectId: "netflixgpt-2833c",
    storageBucket: "netflixgpt-2833c.firebasestorage.app",
    messagingSenderId: "193238038077",
    appId: "1:193238038077:web:15f7645aed7b21f5139c54",
    measurementId: "G-CQDTLBTH05"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);