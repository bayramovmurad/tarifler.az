import React from 'react';
import { useAddLikeRecipe } from "../../query/recipeQuery";
import { toast } from 'react-toastify';

const RecipeLike = ({ recipe }) => {
  const { mutate: addLike } = useAddLikeRecipe();

  const handleLike = () => {
    try {
      addLike({ _id: recipe._id }, {
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
      onClick={handleLike}
      className="flex items-center gap-2 px-3.5 py-2 rounded-xl border border-gray-200 text-white  hover:bg-orange-50 hover:border-orange-200 hover:text-orange-600 active:scale-95 transition-all text-sm font-medium"
      type="button"
    >
      <span role="img" aria-label="like" className="text-base">👍</span>
      <span>{recipe.likes?.length || 0}</span>
    </button>
  );
}

export default RecipeLike;