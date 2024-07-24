const RecipeList = ({ recipe }) => {
  return (
    <div className="bg-white rounded-md p-5 text-black mb-8" key={recipe._id}>
      <h2 className="font-semibold text-2xl">{recipe.name}</h2>
      <img className="mx-auto my-4 rounded-md" src={recipe.imageUrl} alt={recipe.name} />
      <h3 className="mb-2 text-xl">{recipe.ingredients}</h3>
      <p className="mb-2">{recipe.instructions}</p>
      <div>
        <h4 className="font-bold"><span className="font-thin">Author:</span> {recipe.userOwner?.username}</h4>
      </div>
    </div>
  )
}
export default RecipeList