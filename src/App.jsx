

import Header from './components/Header/Header'
import Banner from './components/Banner/Banner'
import OurRecipes from './components/Our Recipes/OurRecipes'
import Recipes from './components/Recipes/Recipes'
import Sidebar from './components/Sidebar/Sidebar'
import { useState } from 'react'


function App() {
const [recipeQueue, setRecipeQueue]=useState([]);
const [preparing,setPreparing]=useState([])
const [totalTime,setTotalTime]=useState(0)
const [totalCalories,setTotalCalories]=useState(0)

const handleWantToCook = (recipe)=>{
const isExist  =recipeQueue.find(previousRecipe=>previousRecipe.recipe_id ===recipe.recipe_id);
if(!isExist){
  setRecipeQueue([...recipeQueue,recipe])
}
else{
alert('This Recipe Already Added')  
}

}

const calculateTimeAndCalories =(time,calories)=>{
setTotalTime(totalTime +time);
setTotalCalories(totalCalories+calories)


}



const handleRemove =(id)=>{
  // find which recipe to remove

  const deleteRecipe =recipeQueue.find(recipe=>recipe.recipe_id ===id);
// remove from want to cook table
const updatedQueue =recipeQueue.filter(recipe =>recipe.recipe_id !==id);
setRecipeQueue(updatedQueue);
setPreparing([...preparing,deleteRecipe])
}


  return (
    <div className='container mx-auto px-5'>
      {/*header section  */}
      <Header></Header>
      {/* banner section */}
      <Banner></Banner>
      {/* Our Recipes */}
      <OurRecipes></OurRecipes>
     <section className='flex flex-col md:flex-row gap-6'>
     <Recipes handleWantToCook={handleWantToCook}></Recipes>
     <Sidebar  handleRemove={ handleRemove} 
     recipeQueue={recipeQueue}
     calculateTimeAndCalories={calculateTimeAndCalories}
      preparing={preparing}
      totalTime={totalTime}
      totalCalories={totalCalories}
      ></Sidebar>

     </section>
      
     
    </div>
  )
}

export default App
