import { useDispatch, useSelector } from "react-redux";
import { useEditRecipeMutation, useGetRecipesQuery } from "../../redux/recipe/recipeApiSlice";
import { setUpdateRecipe } from "../../redux/recipe/recipeSlice";
import { toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';

const RecipeUpdate = () => {
    const dispatch = useDispatch();
    const { updateRecipe } = useSelector(state => state.recipe);
    console.log(updateRecipe);
    const [editRecipe] = useEditRecipeMutation();

    // if (isLoading || !recipes || !updateRecipe) {
    //     return <div>Loading...</div>;
    // }

    // const recipeToEdit = userRecipes.find(item => item._id === updateRecipe._id);
    // console.log(recipeToEdit);

    const handleChange = (e) => {
        const { name, value } = e.target;
        dispatch(setUpdateRecipe({name,value}));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        editRecipe(updateRecipe)
            .unwrap()
            .then(() => {
                toast.success("Recipe updated successfully!");
            })
            .catch((error) => {
                toast.error("Failed to update recipe.");
                console.error("Update error:", error);
            });
    };

    return (
        <form onSubmit={handleSubmit} className="absolute top-20 flex flex-col w-[500px] max-w-full mx-auto gap-y-4 mt-10">
            <input
                className="border border-black p-2 rounded-md"
                type="text"
                placeholder="Name"
                name="name"
                value={updateRecipe.name}
                onChange={handleChange}
            />
            <input
                className="border border-black p-2 rounded-md"
                type="text"
                placeholder="Ingredients"
                name="ingredients"
                value={updateRecipe.ingredients}
                onChange={handleChange}
            />
            <input
                className="border border-black p-2 rounded-md"
                type="text"
                placeholder="Instructions"
                name="instructions"
                value={updateRecipe.instructions}
                onChange={handleChange}
            />
            <input
                className="border border-black p-2 rounded-md"
                type="text"
                placeholder="Image URL"
                name="imageUrl"
                value={updateRecipe.imageUrl}
                onChange={handleChange}
            />
            <input
                className="border border-black p-2 rounded-md"
                type="number"
                placeholder="Cooking Time"
                name="cookingTime"
                value={updateRecipe.cookingTime}
                onChange={handleChange}
            />
            <input className="border border-black text-white bg-black hover:bg-white hover:text-black font-semibold duration-300" type="submit" value="Send" />
        </form>
    );
};

export default RecipeUpdate;
