import { useEffect } from "react";
import { useState } from "react";


const Recipes = () => {
const [recipes,setRecipes]=useState([]);

useEffect(()=>{
fetch('recipes.json')
.then(response =>response.json())
.then(data =>setRecipes(data))



},[])

    return (
        <div className="md:w-2/3">
       <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 ">
       {
         recipes.map(recipe =>
            <div key={recipe.recipe_id} className="card bg-base-100  shadow-xl">
            <figure>
              <img className="rounded-xl md:h-52 w-full"
                src={recipe.recipe_image}
                alt="Recipe_Image" />
            </figure>
            <div className="card-body">
              <h2 className="card-title text-gray-800 text-lg font-bold">{recipe.recipe_name}</h2>
              <p className="text-gray-600 text-base">{recipe.short_description}</p>
              <h3 className="text-gray-800 font-bold text-lg">Ingredients: {recipe.ingredients.length}</h3>
              <ul className="ml-6">
                {
                 recipe.ingredients.map((item,index)=>(
                 <li className="list-disc text-gray-600" key={index}>{item}</li> 
                
               ) )}
              </ul>
              <div className="card-actions justify-end">
                <button className="btn btn-primary">Buy Now</button>
              </div>
            </div>
          </div>    


         )   
        } 

       </div>
        </div>
    );
};

export default Recipes;