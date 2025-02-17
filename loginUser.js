// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.11.1/firebase-app.js";
import {
  getAuth,
  signInWithEmailAndPassword,
} from "https://www.gstatic.com/firebasejs/10.11.1/firebase-auth.js"; // Import from version 10.11.1


// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyB8QIT8g7uROAzsUr9fH1v8DgXFZawboL8",
  authDomain: "dietrecommendation-252a8.firebaseapp.com",
  projectId: "dietrecommendation-252a8",
  storageBucket: "dietrecommendation-252a8.appspot.com",
  messagingSenderId: "432747866238",
  appId: "1:432747866238:web:d284c39169af3c72b8902f",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Submit Button
const submit = document.getElementById("submit");
submit.addEventListener("click", (event) => {
  //inputs
  const email = document.getElementById("email").value;
  const password = document.getElementById("password").value;

  console.log("email", email);
  event.preventDefault();

  const auth = getAuth();
  signInWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      // Signed up
      const user = userCredential.user;
      localStorage.setItem("loggedInUser", JSON.stringify(user));
      alert("Logged In Successfully!!");
      window.location.href = "index.html";
      // ...
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      alert(errorCode);
      // ..
    });
});
