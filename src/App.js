import React, { useEffect, useState } from 'react';
import Recipe from './Recipe';
import './App.css';

const App = () => {
  const APP_ID = process.env.REACT_APP_APP_ID;
  const API_KEY = process.env.REACT_APP_API_KEY;
  const [recipes, setRecipes] = useState([]);
  const [search, setSearch] = useState('');
  const [query, setQuery] = useState('low carb')

  useEffect(() => {
    getRecipes();
  }, [query]);

  const getRecipes = async () => {
  const response = await fetch(
    `https://api.edamam.com/search?q=${query}&app_id=${APP_ID}&app_key=${API_KEY}`
  );
const data = await response.json();
    setRecipes(data.hits);
    console.log(data.hits);
  };

  const updateSearch = e => {
    setSearch(e.target.value);
  }

  const getSearch = e => {
    e.preventDefault();
    setQuery(search);
    setSearch();
  }
 
  return (
    <div className="App">
      <div className="container">
        <div className="row">
          <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12ß">
            <form onSubmit={getSearch} className="search-form">
              <input 
                type="text" 
                className="search-bar" 
                value={search} 
                onChange={updateSearch} />
              <button className="search-button" type="submit">
                Search
              </button>
            </form>
          </div>
        </div>

        <div className="recipes">
          <div className="row">
            {recipes.map(recipe=>(
              <Recipe 
                key={recipe.recipe.label}
                title={recipe.recipe.label}
                calories={recipe.recipe.calories}
                image={recipe.recipe.image}
                ingredients={recipe.recipe.ingredients}
                nutrients={recipe.recipe.totalNutrients}
                carbs={recipe.recipe.totalNutrients.CHOCDF}
                fat={recipe.recipe.totalNutrients.FAT}
                protein={recipe.recipe.totalNutrients.PROCNT}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

export default App;
