import { useState } from "react";
import './style.css';
import RecipeUpdate from "./recipeUpdate";
import { useGlobalContext } from "../../context/context";
import { useDeleteRecipe } from "../../query/recipeQuery";

const UserRecipes = () => {
  const { userData, setRecipeUpdate, recipes, isLoading } = useGlobalContext();
  const {mutate:deleteRecipe} = useDeleteRecipe();

  const userId = userData?.user?._id;
  const userRecipes = recipes?.filter(item => item.userOwner?._id === userId);
  const [showUpdate, setShowUpdate] = useState(false);

  const updateRecipeField = (recipe) => {
    setShowUpdate(true);
    setRecipeUpdate(recipe);
  }


  if (isLoading) {
    return <div>Loading...</div>;
  }

  return (
    <div className="relative mt-10">
      <h2 className="mb-4 font-bold text-3xl">Your Recipes</h2>
      {userRecipes?.length > 0 ? (
        <div className={`flex flex-wrap justify-between gap-y-10`}>
          {userRecipes.map(recipe => (
            <div className="w-[230px] bg-white text-black rounded-md p-2" key={recipe._id}>
              <h2 className="font-semibold leading-[20px] mb-2 scrollContainer">{recipe.name}</h2>
              <img className="rounded-md h-[150px] w-[230px]" src={recipe.imageUrl} alt={recipe.name} />
              <div className='flex gap-x-4 justify-between my-2'>
                <button onClick={() => updateRecipeField(recipe)} className="border border-black px-2 rounded-md bg-black text-white hover:font-semibold hover:bg-white hover:text-black duration-300">Update</button>
                <button className="border border-black px-2 rounded-md bg-black text-white hover:font-semibold hover:bg-white hover:text-black duration-300" onClick={() => deleteRecipe({ _id: recipe._id })}>Delete</button>
              </div>
            </div>
          ))}
        </div>
      ) : (
        <p>No recipes found.</p>
      )}
      {showUpdate && (
        <div className="fixed inset-0 bg-gray-800 bg-opacity-90 flex items-center justify-center z-50">
          <RecipeUpdate />
        </div>
      )}
    </div>
  )
}

export default UserRecipes;
