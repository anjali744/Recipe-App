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
      "https://www.google.com/imgres?imgurl=https%3A%2F%2Fstatic.toiimg.com%2Fthumb%2F61050397.cms%3Fimgsize%3D246859%26width%3D800%26height%3D800&tbnid=2ZUZnZVXTOUYuM&vet=12ahUKEwjJ_sXsi9aDAxUwKhAIHdByC4AQMygBegQIARB2..i&imgrefurl=https%3A%2F%2Frecipes.timesofindia.com%2Fus%2Frecipes%2Fsamosa%2Frs61050397.cms&docid=5vn2P6aaUi_lcM&w=800&h=800&q=image%20of%20samosa&client=firefox-b-d&ved=2ahUKEwjJ_sXsi9aDAxUwKhAIHdByC4AQMygBegQIARB2",
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
      "https://www.google.com/imgres?imgurl=https%3A%2F%2Fc2.staticflickr.com%2F6%2F5559%2F30562381266_8994c463dd_z.jpg&tbnid=1byBguk9ArC-sM&vet=12ahUKEwiF_POvjNaDAxUqDBAIHXA9CQoQMygcegUIARDJAQ..i&imgrefurl=https%3A%2F%2Fwww.chitrasfoodbook.com%2F2016%2F10%2Fgulab-jamun-recipe-using-instant-mix.html&docid=kgSj79Z8hJliDM&w=499&h=640&q=image%20of%20gulab%20jamun&client=firefox-b-d&ved=2ahUKEwiF_POvjNaDAxUqDBAIHXA9CQoQMygcegUIARDJAQ",
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
    id: 5,
    title: "Samosa",
    picture_url:
      "https://www.google.com/imgres?imgurl=https%3A%2F%2Fstatic.toiimg.com%2Fthumb%2F61050397.cms%3Fimgsize%3D246859%26width%3D800%26height%3D800&tbnid=2ZUZnZVXTOUYuM&vet=12ahUKEwjJ_sXsi9aDAxUwKhAIHdByC4AQMygBegQIARB2..i&imgrefurl=https%3A%2F%2Frecipes.timesofindia.com%2Fus%2Frecipes%2Fsamosa%2Frs61050397.cms&docid=5vn2P6aaUi_lcM&w=800&h=800&q=image%20of%20samosa&client=firefox-b-d&ved=2ahUKEwjJ_sXsi9aDAxUwKhAIHdByC4AQMygBegQIARB2",
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
    id: 6,
    title: "Gulab Jamun",
    picture_url:
      "https://www.google.com/imgres?imgurl=https%3A%2F%2Fc2.staticflickr.com%2F6%2F5559%2F30562381266_8994c463dd_z.jpg&tbnid=1byBguk9ArC-sM&vet=12ahUKEwiF_POvjNaDAxUqDBAIHXA9CQoQMygcegUIARDJAQ..i&imgrefurl=https%3A%2F%2Fwww.chitrasfoodbook.com%2F2016%2F10%2Fgulab-jamun-recipe-using-instant-mix.html&docid=kgSj79Z8hJliDM&w=499&h=640&q=image%20of%20gulab%20jamun&client=firefox-b-d&ved=2ahUKEwiF_POvjNaDAxUqDBAIHXA9CQoQMygcegUIARDJAQ",
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
];

// Create new recipe
function createRecipeElement(recipe) {
  const container = document.getElementById("recipe-container");
  const recipeCard = document.createElement("div");
  recipeCard.className = "food-card";
  const titleElement = document.createElement("h2");
  titleElement.textContent = recipe.title;

  const ingredientsElement = document.createElement("ul");
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
  recipeCard.appendChild(ingredientsElement);
  recipeCard.appendChild(instructionsElement);
  container.appendChild(recipeCard);
}
function addIngredient(recipes, newIngredient) {
  recipe.ingredients.push({ NAME: newIngredient, AMOUNT: undefined });
  // Clear the container and recreate all recipes
  document.getElementById("recipe-container").innerHTML = "";
  recipes.forEach((recipe) => createRecipeElement(recipe));
}
document.addEventListener("DOMContentLoaded", function () {
  recipes.forEach((recipe) => createRecipeElement(recipe));
  // adding a honey in Pancake recipe
  addIngredient(recipes[0], "honey");
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
  let timer = document.getElementById("timer").value;

  if (ingredients.length < 5) {
    alert("Please provide at least 5 ingredients.");
    return;
  }

  let recipeItem = document.createElement("li");
  let recipeContent = `
                <strong>${title}</strong><br>
                ${ingredients
                  .map((ingredient) => `&emsp;${ingredient}`)
                  .join("<br>")}
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
// find & Sort..........................................................

// function SearchResults(results) {
//   const searchResultsContainer = document.getElementById("searchResults");
//   searchResultsContainer.innerHTML = "";
//   results.forEach((recipe) => {
//     const recipeElement = document.createElement("div");
//     recipeElement.textContent = recipes.title;
//     searchResultsContainer.appendChild(recipeElement);
//   });
// }
// function SortedResults(results) {
//   const sortedResultsContainer = document.getElementById("sortedResults");
//   sortedResultsContainer.innerHTML = "";
//   results.forEach((recipe) => {
//     const recipeElement = document.createElement("div");
//     recipeElement.textContent = `${recipes.title} - Ingredients: ${recipes.ingredients.length}`;
//     sortedResultsContainer.appendChild(recipeElement);
//   });
// }
