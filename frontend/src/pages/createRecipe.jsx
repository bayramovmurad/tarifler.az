import { useDispatch, useSelector } from "react-redux";
import { useAddRecipesMutation } from "../redux/recipe/recipeApiSlice";
import { setCreateRecipe } from "../redux/recipe/recipeSlice";

const CreateRecipe = () => {
  const dispatch = useDispatch();
  const { createRecipe } = useSelector(state => state.recipe);
  const [addRecipes] = useAddRecipesMutation();


  const handleChange = (e) => {
    const { name, value } = e.target;
    dispatch(setCreateRecipe({name,value}))
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const result = await addRecipes(createRecipe).unwrap();
      dispatch(setCreateRecipe(result));
    } catch (err) {
      console.error("Failed to save the recipe: ", err);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="flex flex-col w-[500px] max-w-full mx-auto gap-y-4 mt-10">
      <input
        className="border border-black p-3"
        type="text"
        placeholder="name"
        name="name"
        value={createRecipe.name}
        onChange={handleChange}
      />
      <input
        className="border border-black p-3"
        type="text"
        placeholder="ingredients"
        name="ingredients"
        value={createRecipe.ingredients}
        onChange={handleChange}
      />
      <input
        className="border border-black p-3"
        type="text"
        placeholder="instructions"
        name="instructions"
        value={createRecipe.instructions}
        onChange={handleChange}
      />
      <input
        className="border border-black p-3"
        type="text"
        placeholder="imageUrl"
        name="imageUrl"
        value={createRecipe.imageUrl}
        onChange={handleChange}
      />
      <input
        className="border border-black p-3"
        type="number"
        placeholder="cookingTime"
        name="cookingTime"
        value={createRecipe.cookingTime}
        onChange={handleChange}
      />
      <input
        className="border border-black p-3"
        type="text"
        placeholder="userOwner"
        name="userOwner"
        value={createRecipe.userOwner}
        onChange={handleChange}
      />
      <input className="border border-black p-3" type="submit" value="Submit" />
    </form>
  );
}

export default CreateRecipe;
