// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.11.1/firebase-app.js";
import {
  getFirestore,
  doc,
  getDoc,
  updateDoc,
  setDoc,
} from "https://www.gstatic.com/firebasejs/10.11.1/firebase-firestore.js";

const weightLossMealOptions = {
  breakfast: [
    {
      name: "Greek Yogurt with Berries and Honey",
      ingredients:
        "Plain Greek yogurt (150g), mixed berries (50g), honey (1 tsp)",
      calories: 200,
      image: "/images/LossWeight/Breakfast/1.jpeg",
    },
    {
      name: "Oatmeal with Chopped Nuts and Banana",
      ingredients: "Oatmeal (150g), almonds (10g), banana (half)",
      calories: 250,
      image: "/images/LossWeight/Breakfast/2.jpeg",
    },
    {
      name: "Scrambled Eggs with Spinach",
      ingredients: "Eggs (2), spinach (50g), olive oil (1 tsp)",
      calories: 300,
      image: "/images/LossWeight/Breakfast/3.jpeg",
    },
    {
      name: "Avocado Toast with Egg",
      ingredients:
        "Whole grain bread (1 slice), avocado (half), poached egg (1)",
      calories: 350,
      image: "/images/LossWeight/Breakfast/4.jpeg",
    },
    {
      name: "Smoothie Bowl",
      ingredients:
        "Mixed berries (100g), spinach (30g), Greek yogurt (100g), honey (1 tbsp)",
      calories: 290,
      image: "/images/LossWeight/Breakfast/5.jpeg",
    },
  ],
  lunch: [
    {
      name: "Grilled Chicken Salad",
      ingredients:
        "Grilled chicken breast (100g), mixed greens (100g), cherry tomatoes (50g), balsamic vinaigrette (1 tbsp)",
      calories: 350,
      image: "/images/LossWeight/Lunch/1.jpeg",
    },
    {
      name: "Vegetable Stir-Fry with Tofu",
      ingredients: "Tofu (100g), mixed vegetables (200g), soy sauce (1 tbsp)",
      calories: 400,
      image: "/images/LossWeight/Lunch/2.jpeg",
    },
    {
      name: "Turkey Wrap",
      ingredients:
        "Whole wheat wrap, turkey breast (100g), lettuce, mustard (1 tsp)",
      calories: 300,
      image: "/images/LossWeight/Lunch/3.jpeg",
    },
    {
      name: "Quinoa and Chickpea Bowl",
      ingredients:
        "Quinoa (50g), chickpeas (100g), avocado (half), lemon juice (1 tbsp), olive oil (1 tsp)",
      calories: 450,
      image: "/images/LossWeight/Lunch/4.jpeg",
    },
    {
      name: "Beef and Vegetable Soup",
      ingredients: "Lean beef (100g), assorted vegetables (200g), beef broth",
      calories: 250,
      image: "/images/LossWeight/Lunch/5.jpeg",
    },
  ],
  dinner: [
    {
      name: "Baked Salmon with Asparagus",
      ingredients:
        "Salmon (150g), asparagus (100g), lemon butter sauce (1 tbsp)",
      calories: 400,
      image: "/images/LossWeight/Dinner/1.jpeg",
    },
    {
      name: "Chicken and Broccoli Stir-Fry",
      ingredients:
        "Chicken breast (100g), broccoli (100g), carrots (50g), teriyaki sauce (1 tbsp)",
      calories: 350,
      image: "/images/LossWeight/Dinner/2.jpeg",
    },
    {
      name: "Spaghetti Squash with Marinara Sauce",
      ingredients:
        "Spaghetti squash (200g), marinara sauce (100g), parmesan (1 tbsp)",
      calories: 300,
      image: "/images/LossWeight/Dinner/3.jpeg",
    },
    {
      name: "Pork Tenderloin with Sweet Potatoes",
      ingredients:
        "Pork tenderloin (100g), sweet potatoes (150g), green beans (100g)",
      calories: 450,
      image: "/images/LossWeight/Dinner/4.jpeg",
    },
    {
      name: "Vegetable Curry with Brown Rice",
      ingredients:
        "Mixed vegetables (200g), coconut milk (50ml), curry powder, brown rice (50g)",
      calories: 400,
      image: "/images/LossWeight/Dinner/5.jpeg",
    },
  ],
  snack: [
    {
      name: "Almonds and Walnuts Mix",
      ingredients: "Almonds (15g), walnuts (15g)",
      calories: 200,
      image: "/images/LossWeight/Snack/1.jpeg",
    },
    {
      name: "Greek Yogurt with Cucumber Slices",
      ingredients: "Greek yogurt (100g), cucumber (50g), dill, garlic powder",
      calories: 100,
      image: "/images/LossWeight/Snack/2.jpeg",
    },
    {
      name: "Rice Cakes with Avocado",
      ingredients: "Rice cakes (2), avocado (quarter)",
      calories: 150,
      image: "/images/LossWeight/Snack/3.jpeg",
    },
    {
      name: "Boiled Egg with Spinach",
      ingredients: "Egg (1), spinach (50g)",
      calories: 100,
      image: "/images/LossWeight/Snack/4.jpeg",
    },
    {
      name: "Carrot Sticks with Hummus",
      ingredients: "Carrot sticks (100g), hummus (50g)",
      calories: 150,
      image: "/images/LossWeight/Snack/5.jpeg",
    },
  ],
};

const weightGainMealOptions = {
  breakfast: [
    {
      name: "Bagel with Cream Cheese and Smoked Salmon",
      ingredients: "Whole bagel, cream cheese (2 tbsp), smoked salmon (50g)",
      calories: 500,
      image: "/images/GainMuscles/Breakfast/1.jpeg",
    },
    {
      name: "Blueberry Pancakes with Syrup and Butter",
      ingredients:
        "Pancakes (3), blueberries (50g), maple syrup (2 tbsp), butter (1 tbsp)",
      calories: 600,
      image: "/images/GainMuscles/Breakfast/2.jpeg",
    },
    {
      name: "Full English Breakfast",
      ingredients:
        "Eggs (2), bacon (2 slices), sausage (1), baked beans (50g), mushrooms, toast (1 slice)",
      calories: 700,
      image: "/images/GainMuscles/Breakfast/3.jpeg",
    },
    {
      name: "Oatmeal with Whole Milk, Nuts, and Banana",
      ingredients:
        "Oatmeal (150g), whole milk (200ml), mixed nuts (30g), banana (1)",
      calories: 550,
      image: "/images/GainMuscles/Breakfast/4.jpeg",
    },
    {
      name: "French Toast with Cream and Strawberries",
      ingredients:
        "French toast (2 slices), whipping cream (2 tbsp), strawberries (50g), powdered sugar (1 tbsp)",
      calories: 650,
      image: "/images/GainMuscles/Breakfast/5.jpeg",
    },
  ],
  lunch: [
    {
      name: "Chicken Alfredo Pasta",
      ingredients:
        "Pasta (100g), Alfredo sauce (100g), grilled chicken breast (100g)",
      calories: 750,
      image: "/images/GainMuscles/Lunch/1.jpeg",
    },
    {
      name: "Cheeseburger with Fries",
      ingredients:
        "Beef burger (100g), cheddar cheese, bun, mayo, fries (150g)",
      calories: 900,
      image: "/images/GainMuscles/Lunch/2.jpeg",
    },
    {
      name: "Avocado and Chicken Salad with Creamy Dressing",
      ingredients:
        "Chicken breast (100g), avocado (1), mixed greens, creamy dressing (2 tbsp)",
      calories: 700,
      image: "/images/GainMuscles/Lunch/3.jpeg",
    },
    {
      name: "Steak Sandwich with Cheese and Onion Rings",
      ingredients:
        "Steak (150g), cheddar cheese, hoagie roll, onion rings (100g)",
      calories: 800,
      image: "/images/GainMuscles/Lunch/4.jpeg",
    },
    {
      name: "Sushi Platter",
      ingredients:
        "Assorted sushi including 8 pieces of nigiri and 6 pieces of maki",
      calories: 750,
      image: "/images/GainMuscles/Lunch/5.jpeg",
    },
  ],
  dinner: [
    {
      name: "Ribeye Steak with Garlic Butter",
      ingredients:
        "Ribeye steak (200g), garlic butter (2 tbsp), mashed potatoes (150g)",
      calories: 950,
      image: "/images/GainMuscles/Dinner/1.jpeg",
    },
    {
      name: "Lasagna with Meat Sauce",
      ingredients:
        "Lasagna noodles (100g), ricotta, ground beef (100g), mozzarella, meat sauce (100g)",
      calories: 800,
      image: "/images/GainMuscles/Dinner/2.jpeg",
    },
    {
      name: "Salmon Fillet with Hollandaise Sauce",
      ingredients:
        "Salmon (200g), hollandaise sauce (50g), steamed vegetables (100g)",
      calories: 700,
      image: "/images/GainMuscles/Dinner/3.jpeg",
    },
    {
      name: "Pork Chops with Apple Sauce and Scalloped Potatoes",
      ingredients: "Pork chops (200g), apple sauce, scalloped potatoes (150g)",
      calories: 850,
      image: "/images/GainMuscles/Dinner/4.jpeg",
    },
    {
      name: "Duck Confit with Polenta and Red Wine Sauce",
      ingredients: "Duck leg (1), creamy polenta (100g), red wine sauce",
      calories: 900,
      image: "/images/GainMuscles/Dinner/5.jpeg",
    },
  ],
  snack: [
    {
      name: "Mixed Nuts",
      ingredients: "Almonds, walnuts, cashews (50g total)",
      calories: 300,
      image: "/images/GainMuscles/Snack/1.jpeg",
    },
    {
      name: "Protein Shake with Whole Milk and Peanut Butter",
      ingredients:
        "Protein powder (1 scoop), whole milk (200ml), peanut butter (2 tbsp)",
      calories: 400,
      image: "/images/GainMuscles/Snack/2.jpeg",
    },
    {
      name: "Cheese and Crackers",
      ingredients: "Cheddar cheese (50g), crackers (50g)",
      calories: 350,
      image: "/images/GainMuscles/Snack/3.jpeg",
    },
    {
      name: "Greek Yogurt with Honey and Granola",
      ingredients:
        "Full-fat Greek yogurt (150g), honey (2 tbsp), granola (50g)",
      calories: 350,
      image: "/images/GainMuscles/Snack/4.jpeg",
    },
    {
      name: "Avocado Chocolate Mousse",
      ingredients: "Avocado (1), cocoa powder (2 tbsp), honey (2 tbsp)",
      calories: 400,
      image: "/images/GainMuscles/Snack/5.jpeg",
    },
  ],
};

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

const bmrButton = document.getElementById("bmrButton");

const logOut = document.getElementById("logOutButton");

logOut.addEventListener("click", function () {
  console.log("storage Cleared !");
  localStorage.clear();
  // Redirect the user to the login page or perform any other logout actions
  window.location.href = "logIn.html";
});

// Add an event listener to the button
bmrButton.addEventListener("click", function () {
  // Call your function here
  calculateBMR();
});

// BMR calculator
async function calculateBMR() {
  // Get input values

  let bmr;
  const weightInput = document.getElementById("weight").value;
  const heightInput = document.getElementById("height").value;
  const ageInput = document.getElementById("age").value;
  const gender = document.getElementById("gender").value;

  // Check if inputs are valid numbers
  const weight = parseFloat(weightInput);
  const height = parseFloat(heightInput);
  const age = parseFloat(ageInput);

  if (isNaN(weight) || isNaN(height) || isNaN(age)) {
    alert("Please enter valid numerical values for weight, height, and age.");
    return;
  }

  // Check if any input value is negative
  if (weight < 0 || height < 0 || age < 0) {
    alert("Please enter valid positive values for weight, height, and age.");
    return;
  }

  // Check if age is valid
  const currentYear = new Date().getFullYear();
  if (age <= 0 || age > currentYear) {
    alert("Please enter a valid age.");
    return;
  }

  // Calculate BMR
  if (gender === "male") {
    bmr = 88.362 + 13.397 * weight + 4.799 * height - 5.677 * age;
  } else {
    bmr = 447.593 + 9.247 * weight + 3.098 * height - 4.33 * age;
  }
  console.log("bmr", bmr.toFixed(0));
  const weightLossMeals = getRecommendedMeals(weightLossMealOptions);
  const weightGainMeals = getRecommendedMeals(weightGainMealOptions);
  console.log("System Recommended Meals:", weightLossMeals);

  const newData = {
    weight: weightInput,
    height: heightInput,
    age: ageInput,
    gender: gender,
    bmr: bmr.toFixed(2),
    weightLossMeals: weightLossMeals,
    weightGainMeals: weightGainMeals,
  };

  //Update the document with the new data
  try {
    await updateDoc(userRef, newData);
    console.log("User data updated successfully!");
  } catch (error) {
    console.error("Error updating user data: ", error);
  }

  // Display result
  document.getElementById(
    "result"
  ).innerHTML = `Your Basal Metabolic Rate (BMR) is: ${bmr.toFixed(
    2
  )} calories/day.`;
}

function getRecommendedMeals(mealOptions) {
  const mealCategories = Object.keys(mealOptions);
  const randomMeals = {};

  mealCategories.forEach((category) => {
    const meals = mealOptions[category];
    const randomIndex1 = Math.floor(Math.random() * meals.length);
    let randomIndex2;
    do {
      randomIndex2 = Math.floor(Math.random() * meals.length);
    } while (randomIndex2 === randomIndex1);
    randomMeals[category] = [meals[randomIndex1], meals[randomIndex2]];
  });

  return randomMeals;
}
