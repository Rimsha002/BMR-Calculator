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

const logOut = document.getElementById("logOutButton");

logOut.addEventListener("click", function () {
  console.log("storage Cleared !");
  localStorage.clear();
  // Redirect the user to the login page or perform any other logout actions
  window.location.href = "logIn.html";
});

const mealTypeSelect = document.getElementById("meal-type");
const mealOptionsContainer = document.getElementById("meal-options");

mealTypeSelect.addEventListener("change", function () {
  const selectedMeal = this.value;
  const selectedOptions = weightLossMealOptions[selectedMeal];

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
