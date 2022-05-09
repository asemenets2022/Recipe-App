import React, { useState } from "react";
import "./App.css";
import RecipeCreate from "./RecipeCreate";
import RecipeList from "./RecipeList";
import RecipeData from "./RecipeData";

function App() {
  const [recipes, setRecipes] = useState(RecipeData);

  // TODO: Add the ability for the <RecipeList /> component to list and delete an existing recipe.
  // TODO: Add the ability for the <RecipeCreate /> component to create new recipes.

  const submitRecipe = (rObject) => {
    setRecipes([...recipes, rObject])
  }

  const deleteRecipe = (name) => {
    const revisedRecipes = recipes.filter((recipe) => recipe.name !== name)
    setRecipes(revisedRecipes);
  }

  return (
    <div className="App">
      <header><h1>Delicious Food Recipes</h1></header>
      <RecipeList recipes={recipes} deleteRecipe={deleteRecipe} />
      <RecipeCreate submitRecipe={submitRecipe} />
    </div>
  );
}

export default App;
