// import React from 'react';
// import logo from './logo.svg';
// import './App.css';

import React, { useEffect, useState } from 'react';
import Recipe from './Recipe';
import './App.css';

// function App() {
//   console.log("lolol");
//   console.log(process.env.REACT_APP_API_KEY);
//   console.log("lolol");
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

const App = () => {
  // const APP_ID = "9c089c43";
  // const API_KEY = "5bbe625dd846170d793fb00511b590a4";
  const APP_ID = process.env.REACT_APP_APP_ID;
  const API_KEY = process.env.REACT_APP_API_KEY;
  const [recipes, setRecipes] = useState([]);
  const [search, setSearch] = useState('');
  const [query, setQuery] = useState('egg')

  useEffect(() => {
    getRecipes();
  }, [query]);

  const getRecipes = async () => {
  const response = await fetch(
    `https://api.edamam.com/search?q=${query}&app_id=${APP_ID}&app_key=${API_KEY}`
  );
const data = await response.json();
    setRecipes(data.hits);
    // console.log(data.hits);
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
      <form onSubmit={getSearch} className="search-form">
        <input 
          type="text" 
          className="search-bar" 
          value={search} 
          onChange={updateSearch} 
        />
        <button className="search-button" type="submit">
          Search
        </button>
      </form>
      <div className="recipes">
      {recipes.map(recipe=>(
        <Recipe 
          key={recipe.recipe.label}
          title={recipe.recipe.label}
          calories={recipe.recipe.calories}
          image={recipe.recipe.image}
          ingredients={recipe.recipe.ingredients}
         />
      ))}
    </div>
    </div>
    
  )
}

export default App;
