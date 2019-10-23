import React, { useEffect, useState } from 'react';
import RecipeList from './components/RecipeList';
import './App.css';
import navimage from './assets/whitewood.jpg';

const App = () => {
  const APP_ID = process.env.REACT_APP_APP_ID;
  const API_KEY = process.env.REACT_APP_API_KEY;
  const [recipes, setRecipes] = useState([]);
  const [search, setSearch] = useState('');
  const [query, setQuery] = useState('low carb');

  useEffect(() => {
    getRecipes();
  }, [query]);

  const getRecipes = async () => {
  const response = await fetch(
    `https://api.edamam.com/search?q=${query}&app_id=${APP_ID}&app_key=${API_KEY}`
  );
  const data = await response.json();
    setRecipes(data.hits);
  };

  const updateSearch = e => {
    setSearch(e.target.value);
  }

  const getSearch = e => {
    e.preventDefault();
    setQuery(search);
    setSearch();
  }

  console.log(recipes);
 
  return (
    <div className="App">
      <nav className="navbar navbar-expand-lg" style={{backgroundImage: `url(${navimage})`}}>
        <div className="container">
          <a className="navbar-brand" href="#">Let's go Keto!</a>
            <form onSubmit={getSearch} className="search-form form-inline my-2 my-lg-0">
              <input 
                type="text" 
                className="search-bar" 
                value={search} 
                onChange={updateSearch} />
              <button className="search-button" type="submit">Search</button>
            </form>
        </div>
      </nav>
      <div className="container">
        {recipes.length > 0 ? (
          <RecipeList recipes={recipes} />
        ) : (
          <div className="loading row">
            <h1>LOADING</h1>
          </div>
          )}
      </div>
    </div>
  )
}

export default App;
