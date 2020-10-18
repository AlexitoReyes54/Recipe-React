import React,{useEffect,useState} from 'react';
import './App.css';
import Recipe from "./Recipe";

function App() {

  // APP_ID = "1c64a758"
  // APP_KEY = "85a71b0b17359eb1366af2672499a654"
  const request = "https://api.edamam.com/search?q=chicken&app_id=1c64a758&app_key=85a71b0b17359eb1366af2672499a654"

  const [recipes,setRecipes] = useState([]);
  useEffect(() => {
    getRecipes()
    //console.log("efecto");
  },[]);

  const getRecipes = async ()=>{
    const response = await fetch(request);
    const data = await response.json();
    setRecipes(data.hits)

  }

  return (
    <div className="App">
      <form className="search-form">
        <input className="search-bar" type="text"/>
        <button className="search-button" type="submit">Buscar</button>
      </form>

        <div className="recipes">
        {recipes.map(recipes =>(<Recipe
          key={recipes.recipe.label}
          title={recipes.recipe.label}
          calories={recipes.recipe.calories}
          image={recipes.recipe.image}
          ingredients={recipes.recipe.ingredients}
          />))}
          </div>
    </div>
  );
}

export default App;
