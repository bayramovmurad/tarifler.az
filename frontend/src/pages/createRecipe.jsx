import { useDispatch, useSelector } from "react-redux";
import { useAddRecipesMutation } from "../redux/recipe/recipeApiSlice";
import { clearRecipe, setCreateRecipe } from "../redux/recipe/recipeSlice";
import { getToken } from "../utils/token";
import { toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';

const CreateRecipe = () => {
  const dispatch = useDispatch();
  const { createRecipe } = useSelector(state => state.recipe);
  const [addRecipes] = useAddRecipesMutation();

  getToken()

  const handleChange = (e) => {
    const { name, value } = e.target;
    dispatch(setCreateRecipe({ name, value }))
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const result = await addRecipes(createRecipe).unwrap();
      dispatch(setCreateRecipe(result));
      toast.success("Successfully");
      // dispatch(clearRecipe())
    } catch (err) {
      console.error("Failed to save the recipe: ", err);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="flex flex-col w-[500px] max-w-full mx-auto gap-y-4 mt-10">
      <input
        className="border border-black p-2 rounded-md"
        type="text"
        placeholder="name"
        name="name"
        value={createRecipe.name}
        onChange={handleChange}
      />
      <input
        className="border border-black p-2 rounded-md"
        type="text"
        placeholder="ingredients"
        name="ingredients"
        value={createRecipe.ingredients}
        onChange={handleChange}
      />
      <input
        className="border border-black p-2 rounded-md"
        type="text"
        placeholder="instructions"
        name="instructions"
        value={createRecipe.instructions}
        onChange={handleChange}
      />
      <input
        className="border border-black p-2 rounded-md"
        type="text"
        placeholder="imageUrl"
        name="imageUrl"
        value={createRecipe.imageUrl}
        onChange={handleChange}
      />
      <input
        className="border border-black p-2 rounded-md"
        type="number"
        placeholder="cookingTime"
        name="cookingTime"
        value={createRecipe.cookingTime}
        onChange={handleChange}
      />
      <input className="border border-black text-white bg-black hover:bg-white hover:text-black font-semibold duration-300" type="Submit" value="Send" />
    </form>
  );
}

export default CreateRecipe;
