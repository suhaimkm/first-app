import React, { useEffect, useState } from "react";

const RecipeList = () => {
  interface Recipe {
    id: number;
    name: string;
    ingredients: string;
    instructions: string;
  }

  const [recipes, setRecipes] = useState<Recipe[]>([]);

  const fetchRecipes = async () => {
    const response = await fetch("https://dummyjson.com/recipes");
    const data = await response.json();
    setRecipes(data.recipes);
  };

  useEffect(() => {
    fetchRecipes();
  }, []);

  return (
    <div className="container ">
      <h2 className="mb-4 text-center">recipe List</h2>
      <div className="row">
        {recipes.map((recipe) => (
          <div key={recipe.id} className="col-md-4 mb-4">
            <div className="card h-100">
              <div className="card-body">
                <h5 className="card-title">{recipe.name}</h5>
                <p className="card-text">Ingredients: {recipe.ingredients}</p>
                <p className="card-text">Instructions: {recipe.instructions}</p>
              
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
export default RecipeList;  
