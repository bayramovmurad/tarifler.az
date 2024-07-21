import RecipeList from "../components/recipe/recipeList";
import { useGlobalContext } from "../context/context";

const Recipe = () => {
  const { recipes, isLoading } = useGlobalContext();

  if (isLoading) {
    return <h2>Loading...</h2>
  }
  return (
      <div className="w-[500px] mx-auto mt-20">
        {
          recipes.map((recipe) => (
            <RecipeList key={recipe._id} recipe={recipe} />
          ))
        }
      </div>
  )
}
export default Recipe