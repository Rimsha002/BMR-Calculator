const mealOptions = {
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

const logOut = document.getElementById("logOutButton");

logOut.addEventListener("click", function () {
  console.log("storage Cleared !");
  localStorage.clear();
  // Redirect the user to the login page or perform any other logout actions
  window.location.href = "logIn.html";
});

const mealTypeSelect = document.getElementById("meal-type");
const mealOptionsContainer = document.getElementById("meal-options");
const selectedMeals = [];

mealTypeSelect.addEventListener("change", function () {
  const selectedMeal = this.value;
  const selectedOptions = mealOptions[selectedMeal];

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

document.getElementById("doneButton").addEventListener("click", function () {
  const checkboxes = document.querySelectorAll(
    'input[name="selectedMeal"]:checked'
  );
  checkboxes.forEach((checkbox) => {
    const mealName = checkbox.value;
    if (!selectedMeals.includes(mealName)) {
      selectedMeals.push(mealName);
    }
  });

  if (selectedMeals.length > 0) {
    alert(
      `You have selected the following meals: ${selectedMeals.join(", ")}.`
    );
  } else {
    alert('Please select at least one meal before clicking "Done".');
  }
});
