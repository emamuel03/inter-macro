import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyCH-WqAaOKGWpYEG1XYZr9OR8JYxkErXNU",
  authDomain: "macropharma-80d86.firebaseapp.com",
  projectId: "macropharma-80d86",
  storageBucket: "macropharma-80d86.appspot.com",
  messagingSenderId: "253178429844",
  appId: "1:253178429844:web:a6f01fea7d25accd95cf81"
};


const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

export { auth };