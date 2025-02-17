import { initializeApp } from "https://www.gstatic.com/firebasejs/10.11.1/firebase-app.js";
import {
  getFirestore,
  doc,
  getDoc,
  updateDoc,
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

const logOut = document.getElementById("logOutButton");

logOut.addEventListener("click", function () {
  console.log("storage Cleared !");
  localStorage.clear();
  // Redirect the user to the login page or perform any other logout actions
  window.location.href = "logIn.html";
});

const loggedInUserData = JSON.parse(localStorage.getItem("loggedInUser"));
console.log("local storage", loggedInUserData);
const userId = loggedInUserData.email;

try {
  // Fetch the user document based on the user's ID
  const userDoc = await getDoc(doc(db, "users", userId)); // Assuming "users" is your Firestore collection name
  const userData = userDoc.data();
  console.log("user docs", userData.weightLossMeals);
  if (userDoc.exists()) {
    // Document data is available
    const userData = userDoc.data();
    const userName = document.getElementById("userName");
    const weightSpan = document.getElementById("weight");
    const heightSpan = document.getElementById("height");
    const ageSpan = document.getElementById("age");
    const bmrSpan = document.getElementById("bmr");

    userName.textContent = userData.firstName +" "+ userData.lastName;
    weightSpan.textContent = userData.weight;
    heightSpan.textContent = userData.height;
    ageSpan.textContent = userData.age;
    bmrSpan.textContent = userData.bmr;

    // Perform any additional operations with the user data here
  } else {
    console.log("No such document!");
  }
} catch (error) {
  console.error(error);
}

document.addEventListener("DOMContentLoaded", function () {
  // Retrieve user details from local storage
  const loggedInUser = JSON.parse(localStorage.getItem("loggedInUser"));

  // Get references to HTML elements
  const userEmailElement = document.getElementById("userEmail");

  // Update HTML content with user details
  if (loggedInUser) {
    userEmailElement.textContent = loggedInUser.email;
  } else {
    // Handle case where user details are not available
    userEmailElement.textContent = "";
    displayNameElement.textContent = "";
  }
});
