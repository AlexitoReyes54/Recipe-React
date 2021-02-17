import React,{useEffect,useState} from 'react';
import './App.css';
import Recipe from "./Recipe";

function App() {

  // APP_ID = "1c64a758"
  // APP_KEY = "85a71b0b17359eb1366af2672499a654"
  

  const [recipes,setRecipes] = useState([]);
  const [search,setSearch] = useState("");
  const [query,setQuery] = useState("chicken");
  useEffect(() => {
  	

  	setTimeout(async () => {
  		console.log("search: "+search)
  		console.log("query: "+query)
  		await getRecipes();
  	},1000)

  },[query]);

  const getRecipes = async ()=>{
  	const request = "https://api.edamam.com/search?q="+query+"&app_id=1c64a758&app_key=85a71b0b17359eb1366af2672499a654"
    const response = await fetch(request);
    const data = await response.json();
    setRecipes(data.hits)
    console.log(request)

  }

  const changeQuery = async (e) => {
  	console.log(e.target.value)
  	setSearch(e.target.value)
  	//setQuery(q)
  }

    const useQuery = async (e) => {
    	e.preventDefault();
    	console.log(search)
  	setQuery(search)	
  	//setQuery(q)
  }

  return (
    <div className="App">
      <form className="search-form" onSubmit={useQuery} >
        <input className="search-bar" type="text" onChange={changeQuery}/>
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
