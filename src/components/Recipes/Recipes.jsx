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
            <div key={recipe.recipe_id} className="card bg-base-100  shadow-xl ">
            <figure>
              <img className="rounded-xl md:h-52 w-full "
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
              <div className="flex gap-4">
                <div className="flex items-center gap-2">
                 <img className="w-5 h-5  " src='https://img.icons8.com/?size=50&id=H0JqzxqGxPQm&format=png'alt="" />
                 <p>{recipe.preparing_time} minutes</p>
                </div>

                <div className="flex items-center gap-2">
                 <img className="w-5 h-5  " src='https://img.icons8.com/?size=80&id=SXHd0vySm3pG&format=png'alt="" />
                 <p>{recipe.calories} calories</p>
                </div>
                
              </div>
              <div className="card-actions ">
                <button className="btn bg-green-400 rounded-xl text-gray-800 font-bold mt-4 ">Want To Cook</button>
               
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