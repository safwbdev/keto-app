import React from 'react';
import style from './recipe.module.css';
const Recipe = ({title, calories, image, ingredients,nutrients, carbs, fat, protein }) => {
    console.log(nutrients);
    return(
        <div className={"col-md-3 "+ style.recipe}>
            <img src={image} alt="" />
            <h1>{title}</h1>
            <p>{carbs.label + " : " + (carbs.quantity) + " "+ carbs.unit}</p>
            <p>{fat.label + " : " + (fat.quantity) + " "+ fat.unit}</p>
            <p>{protein.label + " : " + (protein.quantity) + " "+ protein.unit}</p>
            {/* <ol>
                {ingredients.map(ingredient => (
                    <li>{ingredient.text}</li>
                ))}
            </ol>
            <p>{calories}</p> */}
        </div>
    )
}
export default Recipe;