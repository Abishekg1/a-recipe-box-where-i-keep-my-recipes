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
// Handles the form submit: reads the recipe and checks the name and ingredients.
function handleFormSubmit(event) {
  event.preventDefault();
  const recipeData = readForm();
  if (recipeData.name === "" || recipeData.ingredients.length === 0) {
    alert("Please enter a name and at least one ingredient.");
    return;
  }
  console.log(recipeData);
} 
// Sets up the form listener.
function start() {
  document.querySelector("#recipe-form").addEventListener("submit", handleFormSubmit);
} 
start();