import { useForm } from "react-hook-form";
import { useAddDislikeRecipe } from "../../query/recipeQuery";
import { toast } from "react-toastify";

const RecipeDislike = ({ recipe }) => {
    const { mutate: addDislike } = useAddDislikeRecipe();

    const handleDislike = () => {
        try {
            addDislike({ _id: recipe._id }, {
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
        <button
            onClick={handleDislike}
            className="flex items-center gap-2 px-3.5 py-2 rounded-xl border border-gray-200 text-white  hover:bg-rose-50 hover:border-rose-200 hover:text-rose-600 active:scale-95 transition-all text-sm font-medium"
            type="button"
        >
            <span role="img" aria-label="dislike" className="text-base">👎</span>
            <span>{recipe.dislikes?.length || 0}</span>
        </button>
    );
};

export default RecipeDislike;