import React from 'react';
import style from './recipe.module.css';
const Recipe = ({title, calories, image, ingredients, nutrients, getcount }) => {
    // console.log(nutrients);
    console.log("nutrients");

    function getNutrients(nutrient){
        return nutrient.label +" : " + nutrient.quantity.toFixed(2) + " " + nutrient.unit
    }
    const nuts=[
        nutrients.CHOCDF, nutrients.ENERC_KCAL, nutrients.FAMS, nutrients.FAPU, nutrients.FASAT, nutrients.FAT, nutrients.FE, nutrients.FIBTG, nutrients.FOLDFE, nutrients.FOLFD, nutrients.K, nutrients.MG, nutrients.NA, nutrients.NIA, nutrients.P, nutrients.PROCNT, nutrients.RIBF, nutrients.SUGAR, nutrients.THIA, nutrients.TOCPHA, nutrients.VITA_RAE, nutrients.VITB6A
    ];
    
    return(
        <div className={"col-lg-3 col-md-3 col-md-3 col-xs-12" + style.recipe_outer}>
            <div className={"col-lg-12 col-md-12 col-sm-12 col-xs-12 "+ style.recipe}>
                <img src={image} alt="" />
                <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12">
                    <h4>{title}</h4>
                </div>
                <button type="button" className={"btn btn-primary " + style.view_recipe} data-toggle="modal" data-target={"#recipeWindow" + getcount}>
                    View Recipe
                </button>
                    <div className="modal fade" id={"recipeWindow" + getcount} role="dialog">
                        <div className="modal-dialog" role="document">
                            <div className="modal-content">
                                <div className="modal-header">
                                    <h5 className="modal-title">{title}</h5>
                                    <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                                    <span aria-hidden="true">&times;</span>
                                    </button>
                                </div>
                                <div className="modal-body">
                                    <ul className="nav nav-tabs" id="myTab" role="tablist">
                                        <li className="nav-item">
                                            <a className="nav-link" id="recipe-tab" data-toggle="tab" href={"#recipe"+ getcount} role="tab" aria-controls="ingredients" aria-selected="true">Recipe</a>
                                        </li>
                                        <li className="nav-item">
                                            <a className="nav-link active" id="nutrition-tab" data-toggle="tab" href={"#nutrition"+ getcount} role="tab" aria-controls="nutrition" aria-selected="false">Nutrition Info</a>
                                        </li>
                                    </ul>
                                    <div className="tab-content" id="myTabContent">
                                        <div className="tab-pane fade" id={"recipe"+getcount} role="tabpanel">
                                            <ul>
                                                {ingredients.map((ingredient, key) => (
                                                    <li key={key}>{ingredient.text}</li>
                                                ))}
                                            </ul>
                                        </div>
                                        <div className="tab-pane fade show active" id={"nutrition"+getcount} role="tabpanel">
                                            <p>Calories : {calories.toFixed(2)}</p>
                                            {nuts.map((nut, key) => (
                                                    <div key={key}>{getNutrients(nut)}</div>
                                                ))}
                                        </div>
                                    </div>
                                </div>
                                <div className="modal-footer">
                                    <button type="button" className="btn btn-secondary" data-dismiss="modal">Close</button>
                                </div>
                            </div>
                        </div>
                    </div>
            </div>
        </div>
    )
}
export default Recipe;


