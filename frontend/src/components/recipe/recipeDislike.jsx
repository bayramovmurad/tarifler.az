import { useForm } from "react-hook-form"
import { useAddDislikeRecipe } from "../../query/recipeQuery";

const RecipeDislike = ({recipe}) => {
    const {mutate:addDislike} = useAddDislikeRecipe();

    const handleDislike = () => {
        try {
            addDislike({_id: recipe._id}, {
                onSuccess: (response) => {
                    toast.success(response.message);
                },
                onError: (error) => {
                    toast.error(error.response?.data?.message || error.message);
                }
            });
        } catch (error) {
            toast.error(error.message);
        }
    };

  return (
      <button onClick={handleDislike} className="flex items-center">
          <span role="img" aria-label="dislike">👎</span>
          <span className="ml-2">{recipe.dislikes?.length || 0}</span>
      </button>
  )
}
export default RecipeDislike