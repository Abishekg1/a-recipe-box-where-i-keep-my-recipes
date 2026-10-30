let recipes = []; 
// Turns a multi-line text box value into a clean array of lines. 
function linesToArray(text) { 
  return text 
    .split("\n") 
    .map(line => line.trim()) 
    .filter(line => line !== ""); 
} 
 
// Reads the form fields and returns a recipe object. 
function readForm() { 
  const name = document.querySelector("#name-input").value.trim(); 
  const ingredients = linesToArray(document.querySelector("#ingredients-input").value); 
  const steps = linesToArray(document.querySelector("#steps-input").value); 
  return { name, ingredients, steps }; 
} 
 
// Adds a new recipe to the recipes array.
function saveRecipe(recipeData) {
  recipes.push(recipeData);} 
 
// Clears the form fields.
function clearForm() {
  document.querySelector("#recipe-form").reset();} 
 
// Creates one recipe card element with its text.
function createRecipeCard(recipe) {
  const card = document.createElement("article");
  card.className = "card"; 
  const title = document.createElement("h3");
  title.textContent = recipe.name;
  card.appendChild(title); 
  const ingredientHeading = document.createElement("strong");
  ingredientHeading.textContent = "Ingredients";
  card.appendChild(ingredientHeading); 
  const ingredientList = document.createElement("ul");
  recipe.ingredients.forEach(item => {
    const li = document.createElement("li");
    li.textContent = item;
    ingredientList.appendChild(li);
  });
  card.appendChild(ingredientList); 
  if (recipe.steps.length > 0) {
    const stepHeading = document.createElement("strong");
    stepHeading.textContent = "Steps";
    card.appendChild(stepHeading); 
    const stepList = document.createElement("ol");
    recipe.steps.forEach(step => {
      const li = document.createElement("li");
      li.textContent = step;
      stepList.appendChild(li);
    });
    card.appendChild(stepList);  } 
 
  return card;} 
 
// Redraws the recipe list and empty message from the recipes array.
function drawRecipes() {
  const list = document.querySelector("#recipe-list");
  const emptyMessage = document.querySelector("#empty-message"); 
  list.textContent = "";
  recipes.forEach(recipe => list.appendChild(createRecipeCard(recipe))); 
  if (recipes.length === 0) {
    emptyMessage.textContent = "No recipes yet. Add your first one above.";
  } else {
    emptyMessage.textContent = "";  } 
} 
 
// Handles the form submit: saves a new recipe, clears the form and shows it.
function handleFormSubmit(event) { 
  event.preventDefault(); 
  const recipeData = readForm(); 
  if (recipeData.name === "" || recipeData.ingredients.length === 0) { 
    alert("Please enter a name and at least one ingredient."); 
    return; 
  } 
  saveRecipe(recipeData);
  clearForm();
  drawRecipes();} 
 
// Sets up the form listener and draws the page.
function start() { 
  document.querySelector("#recipe-form").addEventListener("submit", handleFormSubmit); 
  drawRecipes();} 
 
start(); 
