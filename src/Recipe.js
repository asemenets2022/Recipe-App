import React from "react";

function Recipe({ recipe, deleteHandler }) {
  const deleteClick = () => {
    deleteHandler(recipe.name);
  };
  return (
    <tr>
      <td>{recipe.name}</td>
      <td>{recipe.cuisine}</td>
      <td><img src={recipe.photo} alt="food"/></td>
      <td>{recipe.ingredients}</td>
      <td>{recipe.preparation}</td>
      <td>
        <button name="delete" onClick={deleteClick}>
          Delete
        </button>
      </td>
    </tr>
  );
}

export default Recipe;
