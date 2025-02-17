// Import the functions you need from the SDKs you need
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

const loggedInUserData = JSON.parse(localStorage.getItem("loggedInUser"));
console.log("local storage", loggedInUserData);

const userId = loggedInUserData.email;
const userRef = doc(db, "users", userId);

const userDoc = await getDoc(doc(db, "users", userId)); // Assuming "users" is your Firestore collection name
const userData = userDoc.data();
console.log("user docs", userData.weightLossMeals);

const logOut = document.getElementById("logOutButton");

logOut.addEventListener("click", function () {
  console.log("storage Cleared !");
  localStorage.clear();
  // Redirect the user to the login page or perform any other logout actions
  window.location.href = "logIn.html";
});

const mealTypeSelect = document.getElementById("meal-type");
const mealOptionsContainer = document.getElementById("meal-options");
var mealList = [];

mealTypeSelect.addEventListener("change", function () {
  const selectedMeal = this.value;
  const selectedOptions = userData?.weightLossMeals[selectedMeal];

  mealOptionsContainer.innerHTML = "";

  selectedOptions.forEach((option) => {
    const card = document.createElement("div");
    card.classList.add("card");
    card.innerHTML = `
            <h3>${option.name}</h3>
            <img src="${option.image}" alt="${option.name}">
            <p><strong>Ingredients:</strong> ${option.ingredients}</p>
            <p><strong>Calories:</strong> ${option.calories}</p>
            <p> </p>
        `;
    mealOptionsContainer.appendChild(card);
  });
});

const selectedButton = document.getElementById("doneButton");

// Add an event listener to the button
selectedButton.addEventListener("click", async function () {
  console.log("meal List", mealList);
  // const userMeals = {
  //   weightLossMeals: mealList,
  // };
  // try {
  //   await updateDoc(userRef, userMeals);
  //   console.log("User data updated successfully!");
  //   alert('Meals Saved Successfully!')
  // } catch (error) {
  //   console.error("Error updating user data: ", error);
  //   alert(error);
  // }
});
