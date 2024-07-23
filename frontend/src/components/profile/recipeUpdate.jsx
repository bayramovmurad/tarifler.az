import { toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import { useForm } from 'react-hook-form';
import { useGlobalContext } from "../../context/context";
import { useEffect } from 'react';
import { useUpdateRecipe } from "../../query/recipeQuery";

const RecipeUpdate = () => {
    const { recipeUpdate, handleRecipeUpdate } = useGlobalContext();
    const {mutate:updateRecipe} = useUpdateRecipe();
    const { register, handleSubmit, reset, setValue, formState: { errors } } = useForm({
        defaultValues: { _id: "", name: "", ingredients: "", instructions: "", imageUrl: "", cookingTime: "", userOwner: "" }
    });

    useEffect(() => {
        if (recipeUpdate) {
            setValue("_id", recipeUpdate._id);
            setValue("name", recipeUpdate.name);
            setValue("ingredients", recipeUpdate.ingredients);
            setValue("instructions", recipeUpdate.instructions);
            setValue("imageUrl", recipeUpdate.imageUrl);
            setValue("cookingTime", recipeUpdate.cookingTime);
            setValue("userOwner", recipeUpdate.userOwner._id);
        }
    }, [recipeUpdate, setValue]);

    const onSubmit = (data) => {
        try {
            updateRecipe(data,{
                onSuccess: (response) => {
                    toast.success(response.message);
                    handleRecipeUpdate(null);
                    reset();
                },
                onError: () => {
                    toast.error("Something went wrong");
                }
            });
            
        } catch (error) {
            toast.error("Failed to update recipe.");
            console.error("Update error:", error);
        }
    }

    return (
        <form onSubmit={handleSubmit(onSubmit)} className="absolute top-20 flex flex-col w-[500px] max-w-full mx-auto gap-y-4 mt-10">
            <input
                className="border border-black p-2 rounded-md"
                type="text"
                placeholder="Name"
                {...register("name", { required: true })}
            />
            <input
                className="border border-black p-2 rounded-md"
                type="text"
                placeholder="Ingredients"
                {...register("ingredients", { required: true })}
            />
            <input
                className="border border-black p-2 rounded-md"
                type="text"
                placeholder="Instructions"
                {...register("instructions", { required: true })}
            />
            <input
                className="border border-black p-2 rounded-md"
                type="text"
                placeholder="Image URL"
                {...register("imageUrl", { required: true })}
            />
            <input
                className="border border-black p-2 rounded-md"
                type="number"
                placeholder="Cooking Time"
                {...register("cookingTime", { required: true })}
            />
            <input className="border border-black text-white bg-black hover:bg-white hover:text-black font-semibold duration-300" type="submit" value="Send" />
        </form>
    );
};

export default RecipeUpdate;
