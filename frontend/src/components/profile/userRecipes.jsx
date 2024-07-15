import { useDeleteRecipeMutation, useGetRecipesQuery, useUpdateRecipeMutation } from "../../redux/recipe/recipeApiSlice";

const UserRecipes = ({ user }) => {
  const { data: recipes} = useGetRecipesQuery();
  const [updateReceipe] = useUpdateRecipeMutation();
  const [deleteRecipe] = useDeleteRecipeMutation();

  const userId = user?.user?._id;
  const userRecipes = recipes?.filter(item => item.userOwner?._id === userId);
  return (
    <div>
      <h2>Your Recipes</h2>
      {userRecipes?.length > 0 ? (
        <ul>
          {userRecipes.map(recipe => (
            <li key={recipe._id}>
              <h2>{recipe.name}</h2>
              <img src={recipe.imageUrl} alt={recipe.name} />
              <h3>{recipe.ingredients}</h3>
              <p>{recipe.instructions}</p>
              <div>
                <h2>{recipe.userOwner?.username}</h2>
              </div>
              <div className='flex gap-x-4'>
                <button onClick={() => deleteRecipe({ id: recipe._id })}>delete</button>
                <button>update</button>
              </div>
            </li>
          ))}
        </ul>
      ) : (
        <p>No recipes found.</p>
      )}
    </div>
  )
}
export default UserRecipes