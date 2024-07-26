import RecipeComment from "./recipeComment"
import RecipeDislike from "./recipeDislike";
import RecipeLike from "./recipeLike";

const RecipeList = ({ recipe }) => {
  console.log(recipe);
  return (
    <div className="bg-white rounded-md p-5 text-black mb-8" key={recipe._id}>
      <h2 className="font-semibold text-2xl">{recipe.name}</h2>
      <img className="mx-auto my-4 rounded-md" src={recipe.imageUrl} alt={recipe.name} />
      <h3 className="mb-2 text-xl">{recipe.ingredients}</h3>
      <p className="mb-2">{recipe.instructions}</p>
      <div>
        <h4 className="font-bold"><span className="font-thin">Author:</span> {recipe.userOwner?.username}</h4>
      </div>
      <div className="flex items-center mt-4">
        <RecipeLike recipe={recipe} />
        <RecipeDislike recipe={recipe}/>
      </div>
      <div className="mt-4">
        <h4 className="font-bold">Comments:</h4>
        <RecipeComment recipeId={recipe._id} />
        {recipe.comments?.length ? (
          <ul>
            {recipe.comments?.map(comment => (
              <li key={comment._id} className="mt-2 p-2 bg-gray-100 rounded">
                <div className="font-semibold">{comment?.user?.username}</div>
                <div>{comment.text}</div>
              </li>
            ))}
          </ul>
        ) : (
          <p>No comments yet.</p>
        )}
      </div>
    </div>
  )
}
export default RecipeList
