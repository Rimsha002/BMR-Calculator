// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.11.1/firebase-app.js";
import {
  getAuth,
  createUserWithEmailAndPassword,
} from "https://www.gstatic.com/firebasejs/10.11.1/firebase-auth.js"; // Import from version 10.11.1
import {
  getFirestore,
  doc,
  setDoc,
} from "https://www.gstatic.com/firebasejs/10.11.1/firebase-firestore.js";

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

const db = getFirestore(app);

// Submit Button
const submit = document.getElementById("submit");
submit.addEventListener("click", (event) => {
  //inputs
  const email = document.getElementById("email").value;
  const password = document.getElementById("password").value;
  const firstName = document.getElementById("firstName").value;
  const lastName = document.getElementById("lastName").value;

  event.preventDefault();

  const auth = getAuth();
  createUserWithEmailAndPassword(auth, email, password)
    .then(async (userCredential) => {
      const userRef = doc(db, "users", email); // Assuming "users" is your Firestore collection name
      const userData = {
        firstName: firstName,
        lastName: lastName,
        email: email,
      };

      try {
        await setDoc(userRef, userData);
        console.log("User data added successfully!");
      } catch (error) {
        console.error("Error adding user data: ", error);
      }
      // Signed up
      const user = userCredential.user;
      localStorage.setItem("loggedInUser", JSON.stringify(user));
      alert("Creating account!!");
      window.location.href = "index.html";
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      alert(errorCode);
    });
});
