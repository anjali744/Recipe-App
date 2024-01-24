const recipes = [
  {
    id: 1,
    title: "Pancake",
    picture_url:
      "https://lilluna.com/wp-content/uploads/2022/09/easy-pancakes3-resize-10.jpg",
    ingredients: [
      { NAME: "flour", AMOUNT: "1 cup" },
      { NAME: "baking powder", AMOUNT: "1 teaspoon" },
      { NAME: "sugar", AMOUNT: "2 tablespoons" },
      { NAME: "salt", AMOUNT: "1/2 teaspoon" },
      { NAME: "milk", AMOUNT: "1 cup" },
      { NAME: "egg", AMOUNT: "1" },
    ],
    instructions:
      "Sift the dry ingredients together. Make a well, then add the wet ingredients. Stir to combine. Scoop the batter into a hot griddle or pan. Cook for two to three minutes, then flip. Continue cooking until brown on both sides.",
  },
  {
    id: 2,
    title: "Samosa",
    picture_url:
      "https://static.toiimg.com/thumb/61050397.cms?imgsize=246859&width=800&height=800",
    ingredients: [
      { NAME: "potatoes", AMOUNT: "2 cups" },
      { NAME: "peas", AMOUNT: "1 cups" },
      { NAME: "spices", AMOUNT: "To taste" },
      { NAME: "flour", AMOUNT: "2 cups" },
      { NAME: "water", AMOUNT: "1/2 cup" },
    ],
    instructions:
      " Prepare the filling with boiled potatoes, peas, and spices and make a dough using flour and water. Roll out the dough and fill it with the prepared mixture. Shape the samosas and deep-fry until golden brown.",
  },
  {
    id: 3,
    title: "Gulab Jamun",
    picture_url:
      "https://t3.ftcdn.net/jpg/02/01/86/30/360_F_201863058_ukeJp13ndFKiFARq7clD88TbRNUXEosy.jpg",
    ingredients: [
      { NAME: "milk powder", AMOUNT: "1 cup" },
      { NAME: "ghee", AMOUNT: "2 tablespoons" },
      { NAME: "milk", AMOUNT: "1/4 cup" },
      { NAME: "sugar", AMOUNT: "1 cup" },
      { NAME: "cardamom", AMOUNT: "1/2 teaspoon" },
    ],
    instructions:
      "Mix milk powder, ghee, and milk to form a dough. Shape the dough into small balls. Deep-fry the balls until golden brown. Prepare sugar syrup with sugar and cardamom. Soak the fried balls in the sugar syrup.",
  },
  {
    id: 4,
    title: "Ginger Chicken Kebab",
    picture_url:
      "https://culinaryginger.com/wp-content/uploads/Grilled-Tandoori-Chicken-Kebabs-4--720x720.jpg",
    ingredients: [
      { NAME: "chicken boneless", AMOUNT: "500 gm" },
      { NAME: "ginger paste", AMOUNT: "2 tablespoon" },
      { NAME: "crushed green chillies", AMOUNT: "1/2 tablespoons" },
      { NAME: "salt", AMOUNT: "as required" },
      { NAME: "white pepper powder", AMOUNT: "1 teaspoon" },
    ],
    instructions:
      "Prepare by washing and drying chicken, then cut into cubes. Mix chicken with green chili paste, white pepper powder, salt, ginger paste, and malt vinegar; rub the mixture on chicken. Whisk hung yogurt in a bowl, add marinated chicken, let it marinate for 30 minutes, then skewer and grill for about 10 minutes.",
  },
  {
    id: 5,
    title: "Pumpkin Hummus Recipe",
    picture_url:
      "https://www.liveeatlearn.com/wp-content/uploads/2022/09/pumpkin-hummus-vert.jpg",
    ingredients: [
      { NAME: "chickpeas", AMOUNT: "2 cups" },
      { NAME: "pumpkin", AMOUNT: "1.5 cups" },
      { NAME: "cumin powder", AMOUNT: "1 teaspoon" },
      { NAME: "lemon juice", AMOUNT: "1.5 tablespoon" },
      { NAME: "water", AMOUNT: "as required" },
    ],
    instructions:
      "Wash chickpeas and boil. Puree pumpkin. Blend boiled chickpeas with pumpkin puree, tahini sauce, lemon juice, minced garlic, and cumin powder until smooth. Transfer to a bowl, cool, and garnish with cumin powder and olive oil. Enjoy with crackers or chips.",
  },
  {
    id: 6,
    title: "Cucumber Sandwich",
    picture_url:
      "https://www.cookingclassy.com/wp-content/uploads/2023/07/cucumber-sandwiches-3.jpg",
    ingredients: [
      { NAME: " cucumber", AMOUNT: "1" },
      { NAME: "bread- white", AMOUNT: "4 slices" },
      { NAME: "salt", AMOUNT: "as required" },
      { NAME: "black pepper powder", AMOUNT: "1 teaspoon" },
      { NAME: "green chilli", AMOUNT: "1 piece" },
    ],
    instructions:
      "Spread one side of each slice of bread with the herbed cream cheese.Layer cucumber slices over half of the bread slices. Season with fresh cracked black pepper, to taste. Top with remaining bread slices, cream cheese mixture down. ",
  },
];

// Create element with help DOM
function createRecipeElement(recipe) {
  const container = document.getElementById("recipe-container");
  const recipeCard = document.createElement("div");
  recipeCard.className = "food-card";
  const imgElement = document.createElement("img");
  imgElement.src = recipe.picture_url;
  imgElement.className = "food-img";
  const titleElement = document.createElement("h2");
  titleElement.textContent = recipe.title;

  const ingredientsElement = document.createElement("ul");
  // for each ingredient make <li>
  recipe.ingredients.forEach((ingredient) => {
    const li = document.createElement("li");
    li.textContent = `${ingredient.NAME}: ${
      ingredient.AMOUNT || "Not specified"
    }`;
    ingredientsElement.appendChild(li);
  });

  //creating instruction for receipe
  const instructionsElement = document.createElement("p");
  instructionsElement.textContent = recipe.instructions;

  recipeCard.appendChild(titleElement);
  recipeCard.appendChild(imgElement);
  recipeCard.appendChild(ingredientsElement);
  recipeCard.appendChild(instructionsElement);
  container.appendChild(recipeCard);
}

document.addEventListener("DOMContentLoaded", function () {
  document.getElementById("recipe-container").innerHTML = "";
  recipes.forEach((recipe) => createRecipeElement(recipe));
});

// Timer..........................................................
let pageStartTime = new Date().getTime();

function updatePageTimer() {
  let currentTime = new Date().getTime();
  let elapsedTime = (currentTime - pageStartTime) / 1000;
  document.getElementById("page-timer").textContent =
    "Time spent on the page: " + elapsedTime.toFixed(0) + " seconds";
}
setInterval(updatePageTimer, 1000);

// add new receipe by pop-up..........................................................
function addRecipe() {
  let recipesList = document.getElementById("recipes");
  let title = document.getElementById("title").value;
  let ingredients = document.getElementById("ingredients").value.split(",");
  let timer = parseInt(document.getElementById("timer").value); // Convert timer to integer
  let recipeItem = document.createElement("li");

  if (ingredients.length < 5 || isNaN(timer) || timer <= 0) {
    alert("Please provide valid ingredients and a positive timer value.");
    return;
  }

  // Create a countdown timer
  let countdown = timer * 60;
  let countdownInterval = setInterval(function () {
    if (countdown <= 0) {
      clearInterval(countdownInterval); // Stop the countdown when it reaches 0
      alert("Time is over! Your recipe is ready.");
    } else {
      countdown--;
    }
  }, 1000);

  let recipeContent = `
    <strong>${title}</strong><br>
    ${ingredients.map((ingredient) => `&emsp;${ingredient}`).join("<br>")}
    <br>Cooking Timer: ${timer} minutes
  `;
  recipeItem.innerHTML = recipeContent;
  recipesList.appendChild(recipeItem);

  document.getElementById("title").value = "";
  document.getElementById("ingredients").value = "";
  document.getElementById("timer").value = "";
  document.getElementById("instruction").value = "";

  document.getElementById("popup").style.display = "none";
}
function cancelRecipe() {
  closePopup();
}
function closePopup() {
  document.getElementById("popup").style.display = "none";
  document.getElementById("title").value = "";
  document.getElementById("ingredients").value = "";
  document.getElementById("timer").value = "";
  document.getElementById("instruction").value = "";
}
// search-Recipe..........................................................

const searchRecipe = () => {
  const searchWord = document.getElementById("searchInput").value.toLowerCase();
  const errorMessage = document.getElementById("errorMessage");
  let foundRecipe = false;

  document.querySelectorAll(".food-card").forEach((card) => {
    const recipeTitle = card.querySelector("h2").innerText.toLowerCase();
    const isMatch = recipeTitle.includes(searchWord);
    card.style.display = isMatch ? "block" : "none";
    foundRecipe = foundRecipe || isMatch;
  });

  errorMessage.style.display = foundRecipe ? "none" : "block";
};
