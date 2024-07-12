import { useGetRecipesQuery } from "../redux/recipe/recipeApiSlice";
import RecipeList from "../components/recipe/recipeList";

const Recipe = () => {
  const { data: getReceipes, isLoading } = useGetRecipesQuery();
  console.log(getReceipes);

  if (isLoading) {
    return <h2>Loading...</h2>
  }
  return (
      <div className="w-[500px] mx-auto mt-10">
        {
          getReceipes.map((recipe) => (
            <RecipeList key={recipe._id} recipe={recipe} />
          ))
        }
      </div>
  )
}
export default Recipe