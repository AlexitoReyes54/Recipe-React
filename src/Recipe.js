import React from 'react';
import style from './recipe.module.css'
const Recipe = ({title,calories,image,ingredients}) =>{
  var key = 0;
  return (
    <div className={style.recipe}>
      <h1> {title}</h1>

      {ingredients.map(ingredients =>(
        <li key={key++}>{ingredients.text} </li>
      ))}

      <p>{calories}</p>
      <img className={style.image} src={image} alt="non" />
    </div>
  );
}

export default Recipe;
//
