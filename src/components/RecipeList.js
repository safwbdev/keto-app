import React, { Component } from 'react'
import Recipe from './Recipe';

export default class RecipeList extends Component {
    render() {
        let count = 0;
        return (
            <div className="recipes row">
                {this.props.recipes.map(function(recipe, key){
          count = count + 1; //for modal id
          return <Recipe
                    getcount= {count} 
                    key={key}
                    title={recipe.recipe.label}
                    calories={recipe.recipe.calories}
                    image={recipe.recipe.image}
                    ingredients={recipe.recipe.ingredients}
                    nutrients={recipe.recipe.totalNutrients}
                    />
                  })}
            </div>
        )
    }
}


