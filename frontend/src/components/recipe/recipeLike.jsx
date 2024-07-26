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
    <button onClick={handleLike} className="mr-4 flex items-center">
      <span role="img" aria-label="like">👍</span>
      <span className="ml-2">{recipe.likes?.length || 0}</span>
    </button>
  );
}

export default RecipeLike;
