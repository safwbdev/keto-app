import React from 'react';
import style from './recipe.module.css';
import Nutrient from './Nutrient'
const Recipe = ({title, calories, image, ingredients, nutrients, getcount }) => {

    const protien=[nutrients.PROCNT];
    const fats=[
        nutrients.FAT, 
        nutrients.FAMS, 
        nutrients.FASAT, 
        nutrients.FAPU
    ];
    const sodium=[
        nutrients.NA];
    const carbs=[
        nutrients.CHOCDF, 
        nutrients.FIBTG, 
        nutrients.SUGAR
    ];
    const vitamins=[
        nutrients.TOCPHA,
        nutrients.CA,
        nutrients.FE,
        nutrients.K,
        nutrients.VITA_RAE,
        nutrients.VITB6A,
        nutrients.VITC,
        nutrients.VITK1,
    ];

    return(

        <div className={"col-lg-3 col-md-3 col-md-6 col-xs-12 " + style.recipe_outer}>
            {/* {image ? (<div></div>) : (<h1>LOADING</h1>)} */}
            <div className={"col-lg-12 col-md-12 col-sm-12 col-xs-12 "+ style.recipe} data-toggle="modal" data-target={"#recipeWindow" + getcount}>
                <div className={"col-lg-12 col-md-12 col-sm-12 col-xs-12 "  + style.image} style={{backgroundImage: `url(${image})`}}>
                    <div className={style.overlay}></div>
                    <a className={"" + style.view_recipe} >
                        <span>{title}</span>
                    </a>
                </div>
            </div>
            <div className="modal fade" id={"recipeWindow" + getcount} role="dialog">
                <div className="modal-dialog" role="document">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h3 className="modal-title">{title}</h3>
                            <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                                <span aria-hidden="true">&times;</span>
                            </button>
                        </div>
                        <div className="modal-body">
                            <div className="row">
                                <div className="col-md-4 modal-col">
                                    <div style={{color:'red'}}><img src={image} /></div>
                                </div>
                                <div className="col-md-8 modal-col">
                                    <ul className="nav nav-tabs" id="myTab" role="tablist">
                                        <li className="nav-item">
                                            <a className="nav-link active" id="recipe-tab" data-toggle="tab" href={"#recipe"+ getcount} role="tab" aria-controls="ingredients" aria-selected="true">Recipe</a>
                                        </li>
                                        <li className="nav-item">
                                            <a className="nav-link " id="nutrition-tab" data-toggle="tab" href={"#nutrition"+ getcount} role="tab" aria-controls="nutrition" aria-selected="false">Nutrition Info</a>
                                        </li>
                                    </ul>
                                    <div className="tab-content" id="myTabContent">
                                        <div className="tab-pane fade show active" id={"recipe"+getcount} role="tabpanel">
                                            <ul>
                                                {ingredients.map((ingredient, key) => (
                                                    <li key={key}>{ingredient.text}</li>
                                                ))}
                                            </ul>
                                        </div>
                                        <div className="tab-pane fade" id={"nutrition"+getcount} role="tabpanel">
                                            <div className="col-md-12 ">
                                                <div className="row calorie-row">
                                                        <div className="col-md-6 label">Calories</div>
                                                        <div className="col-md-6 amount">{calories.toFixed(2)}</div>
                                                </div> 
                                                <div className="row">
                                                    <div className="col-md-6">
                                                        {fats.map((data, key) => (
                                                            <Nutrient key={key} getData={data} />
                                                        ))}
                                                        {sodium.map((data, key) => (
                                                            <Nutrient key={key} getData={data} />
                                                        ))}
                                                        {carbs.map((data, key) => (
                                                            <Nutrient key={key} getData={data} />
                                                        ))}
                                                        {protien.map((data, key) => (
                                                            <Nutrient key={key} getData={data} />
                                                        ))}
                                                    </div>
                                                    <div className="col-md-6">
                                                        {vitamins.map((data, key) => (
                                                            <Nutrient key={key} getData={data} />
                                                        ))}

                                                    </div>
                                                </div> 
                                            </div>
                                        </div>
                                    </div>
                                    
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
    )
}
export default Recipe;


