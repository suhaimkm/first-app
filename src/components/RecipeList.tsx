import React, { useEffect, useState } from "react";


const RecipeList = () => {
  const [recipes, setRecipes] = useState([]);
  interface recipe {
    id: number;
    name: string;
    ingredients: string;
    instructions: string;
  }

  const fetchRecipes = async () => {
      const response = await fetch("https://dummyjson.com/recipes");
      const data = await response.json();
      setRecipes(data);
    
  };

  useEffect(() => {
    fetchRecipes();
  }), 


return (
    <div>
      <h1 className="bg-danger">Recipe List</h1>
      <ul className="list-group">
        {recipes.map((recipe) => (
          <li key={recipe.id} className="list-group-item">
            <h3>{recipe.name}</h3>
            <p>Ingredients: {recipe.ingredients}</p>
            <p>Instructions: {recipe.instructions}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};