// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getStorage } from "firebase/storage";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCFrrJb-EmV3hjHxqqvoT69SJoEf083vxM",
  authDomain: "web65-project.firebaseapp.com",
  projectId: "web65-project",
  storageBucket: "web65-project.appspot.com",
  messagingSenderId: "74999241280",
  appId: "1:74999241280:web:e586e687025193dc725da5",
  measurementId: "G-R72THLKHK0",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const storage = getStorage(app);
