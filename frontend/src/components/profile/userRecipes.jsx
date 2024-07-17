import { useDeleteRecipeMutation, useGetRecipesQuery, useUpdateRecipeMutation } from "../../redux/recipe/recipeApiSlice";
import './style.css'


const UserRecipes = ({ user }) => {
  const { data: recipes, isLoading} = useGetRecipesQuery();
  const [updateReceipe] = useUpdateRecipeMutation();
  const [deleteRecipe] = useDeleteRecipeMutation();

  const userId = user?.user?._id;
  const userRecipes = recipes?.filter(item => item.userOwner?._id === userId);

  if(isLoading){
    return <div>Loading...</div>
  }

  return (
    <div className="mt-10">
      <h2 className="mb-4 font-bold text-3xl">Your Recipes</h2>
      {userRecipes?.length > 0 ? (
        <div className="flex flex-wrap justify-between gap-y-6">
          {userRecipes.map(recipe => (
            <div className="w-[230px] shadow-2xl rounded-md p-2" key={recipe._id}>
                  <h2 className="font-semibold leading-[20px] mb-2 scrollContainer">{recipe.name}</h2>
              <img className="rounded-md" src={recipe.imageUrl} alt={recipe.name} />
              <div className='flex gap-x-4 justify-between my-2'>
                <button className="border border-black px-2 rounded-md  bg-black text-white hover:font-semibold hover:bg-white hover:text-black duration-300">update</button>
                <button className="border border-black px-2 rounded-md  bg-black text-white hover:font-semibold hover:bg-white hover:text-black duration-300" onClick={() => deleteRecipe({ id: recipe._id })}>delete</button>
              </div>
            </div>
          ))}
        </div>
      ) : (
        <p>No recipes found.</p>
      )}
    </div>
  )
}
export default UserRecipes