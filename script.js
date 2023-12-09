const recipe1 = {
  title: "Pancake",
  ingredients: ["flour", "baking powder", "sugar", "salt", "milk", "egg"],
  instructions:
    "Step 1: Sift the dry ingredients together.\nStep 2: Make a well, then add the wet ingredients. Stir to combine\nStep 3: Scoop the batter onto a hot griddle or pan.\nStep 4:Cook for two to three minutes, then flip.\nStep 5:Continue cooking until brown on both sides. ",
};
const recipe2 = {
  title: "Samosa",
  ingredients: ["potatoes", "peas", "spices", "flour", "water"],
  instructions:
    "Step 1: Prepare the filling with boiled potatoes, peas, and spices.\nStep 2: Make a dough using flour and water.\nStep 3: Roll out the dough and fill it with the prepared mixture.\nStep 4: Shape the samosas and deep-fry until golden brown.",
};

const recipe3 = {
  title: "Gulab Jamun",
  ingredients: ["milk powder", "ghee", "milk", "sugar", "cardamom"],
  instructions:
    "Step 1: Mix milk powder, ghee, and milk to form a dough.\nStep 2: Shape the dough into small balls.\nStep 3: Deep-fry the balls until golden brown.\nStep 4: Prepare sugar syrup with sugar and cardamom.\nStep 5: Soak the fried balls in the sugar syrup.",
};

//data from index.html .getElement
document.addEventListener("DOMContentLoaded", function () {
  let container = document.getElementById("recipe-container");

  // Create new recipe <h10>Pancake</h10>
  function createRecipeElement(recipe) {
    const titleElement = document.createElement("h10");
    titleElement.textContent = recipe.title;

    // if you want add one recipe only use this.
    // const titleElement = document.createElement("h10");
    // titleElement.textContent = recipe1.title;

    // Create list of ingredients <ul><li>
    const ingredientsElement = document.createElement("ul");
    recipe1.ingredients.forEach((ingredient) => {
      const li = document.createElement("li");
      li.textContent = ingredient;
      ingredientsElement.appendChild(li);
    });

    //create "p" for instruction
    const instructionsElement = document.createElement("p");
    instructionsElement.textContent = recipe1.instructions;

    container.appendChild(titleElement);
    container.appendChild(ingredientsElement);
    container.appendChild(instructionsElement);
  }
  createRecipeElement(recipe1);
  createRecipeElement(recipe2);
  createRecipeElement(recipe3);
});

// Function: add a new ingredient(honey) to the recipe
function addIngredient(recipe, newIngredient) {
  recipe.ingredients.push(newIngredient);
  // updated ingredients
  container.innerHTML = "";
  createRecipeElement(recipe);
}

addIngredient(recipe1, "honey");
