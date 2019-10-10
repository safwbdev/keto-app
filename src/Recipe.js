import React from 'react';
import style from './recipe.module.css';
const Recipe = ({title, calories, image, ingredients,nutrients, carbs, fat, protein }) => {
    console.log(nutrients);
    return(
        <div className={"col-lg-3 col-md-3 col-md-3 col-xs-12" + style.recipe_outer}>
            <div className={"col-lg-12 col-md-12 col-sm-12 col-xs-12 "+ style.recipe}>
                <img src={image} alt="" />
                <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12">
                    <h4>{title}</h4>
                    <div className="row">
                        <div className={"col-lg-4 col-md-4 col-sm-4 col-xs-4 " + style.nutrient}>
                            <div className={style.label}>{carbs.label}</div>
                            <div className={style.content}>{(carbs.quantity).toFixed(2) + " "+ carbs.unit}</div>
                        </div>
                        <div className={"col-lg-4 col-md-4 col-sm-4 col-xs-4 " + style.nutrient}>
                            <div className={style.label}>{fat.label}</div>
                            <div className={style.content}>{(fat.quantity).toFixed(2) + " "+ fat.unit}</div>
                        </div>
                        <div className={"col-lg-4 col-md-4 col-sm-4 col-xs-4 " + style.nutrient}>
                            <div className={style.label}>{protein.label}</div>
                            <div className={style.content}>{(protein.quantity).toFixed(2) + " "+ protein.unit}</div>
                        </div>
                    </div>

            {/* <ol>
                {ingredients.map(ingredient => (
                    <li>{ingredient.text}</li>
                ))}
            </ol>
            <p>{calories}</p> */}
                </div>
                
            </div>
        </div>
    )
}
export default Recipe;