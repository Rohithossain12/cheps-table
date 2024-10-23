/* eslint-disable react/prop-types */


const Sidebar = ({ recipeQueue, handleRemove, preparing,calculateTimeAndCalories ,
  totalTime,totalCalories
}) => {

  return (
    <div className="md:w-1/3 border-2 rounded-2xl p-2 text-gray-600">
      {/* Want To Cook  */}
      <div className="overflow-x-auto">
        <h2 className="border-b-2 mx-auto font-semibold text-2xl text-gray-800 text-center pb-2 ">Want To Cook : {recipeQueue.length}</h2>
        <table className="table">
          {/* head */}
          <thead>
            <tr>
              <th></th>
              <th>Name</th>
              <th>Time</th>
              <th>Calories</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {recipeQueue.map((recipe, index) => (

              <tr className="hover" key={index}>
                <th>{index + 1}</th>
                <td>{recipe.recipe_name}</td>
                <td>{recipe.preparing_time}</td>
                <td>{recipe.calories}</td>
                <td>
                  <button onClick={() =>{ handleRemove(recipe.recipe_id)
                    calculateTimeAndCalories(recipe.preparing_time,recipe.calories)
                  }} className="btn bg-green-400 rounded-xl text-gray-800 font-bold ">Preparing</button></td>
              </tr>

            ))}
          </tbody>
        </table>
      </div>



      {/* Currently Cocking */}
      <div className="overflow-x-auto mt-12">
        <h2 className="border-b-2 mx-auto font-semibold text-2xl text-gray-800 text-center pb-2 ">Currently Cooking : {preparing.length}</h2>
        <table className="table">
          {/* head */}
          <thead>
            <tr>
              <th></th>
              <th>Name</th>
              <th>Time</th>
              <th>Calories</th>

            </tr>
          </thead>
          <tbody>
            {preparing.map((recipe, index) => (

              <tr className="hover" key={index}>
                <th>{index + 1}</th>
                <td>{recipe.recipe_name}</td>
                <td>{recipe.preparing_time}</td>
                <td>{recipe.calories}</td>

              </tr>

            ))}
            <tr className="border-none">
              <th></th>
              <td></td>
              <td>Total Time = {totalTime}</td>
              <td>Total Calories = {totalCalories}</td>

            </tr>
          </tbody>
        </table>
      </div>

    </div>
  );
};

export default Sidebar;


