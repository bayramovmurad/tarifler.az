const RecipeList = ({recipe}) => {
  console.log(recipe);
  return (
          <div className="bg-black text-white mb-4" key={recipe._id}>
              <h2>{recipe.name}</h2>
              <img src={recipe.imageUrl} alt={recipe.name} />
              <h3>{recipe.ingredients}</h3>
              <p>{recipe.instructions}</p>
              <div>
                  <h2>{recipe.userOwner?.username}</h2>
              </div>
          </div>
  )
}
export default RecipeList