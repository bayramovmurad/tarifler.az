import { toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import { useForm } from "react-hook-form";
import { useAddRecipe } from "../query/recipeQuery";
import { useNavigate } from "react-router-dom";


const CreateRecipe = () => {
  const navigate = useNavigate();
  const {mutate:addRecipe, isLoading} = useAddRecipe();
  const {register, handleSubmit, formState:{errors},reset
  } = useForm({
    defaultValues:{name:"",ingredients:"", instructions:"", imageUrl:"", cookingTime:"", userOwner:""}
  })

  const onSubmit = (data) => {    
    reset();
    try {
      addRecipe(data, {
        onSuccess: (response) => {
          toast.success(response.message);
          navigate('/')
        },
        onError: () => {
          toast.error(response.message);
        }
      });
     
    } catch (error) {
      console.error("Failed to save the recipe: ", err);
    }
  }

  if(isLoading){
    return <h1>Loading...</h1>
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col w-[500px] max-w-full mx-auto gap-y-2 mt-10">
      <h3 className="text-white font-semibold text-2xl pb-4">Update Recipe</h3>
      <label className="text-white font-semibold leading-[10px]" htmlFor="name">Name</label>
      <input
        className="border border-black p-2 rounded-md"
        type="text"
        id="name"
        placeholder="Name"
        {...register("name", { required: "name is required" })}
      />
      {errors.name && <p className="text-red-500">{errors.name.message}</p>}
      <label className="text-white font-semibold leading-[10px]" htmlFor="ingredients">Ingredients</label>
      <input
        className="border border-black p-2 rounded-md"
        type="text"
        id="ingredients"
        placeholder="ingredients"
        {...register("ingredients", { required: "ingredients is required" })}
      />
      {errors.ingredients && <p className="text-red-500">{errors.ingredients.message}</p>}
      <label className="text-white font-semibold leading-[10px]" htmlFor="instructions">instructions</label>
      <input
        className="border border-black p-2 rounded-md"
        type="text"
        id="instructions"
        placeholder="Instructions"
        {...register("instructions", { required: "instructions is required" })}
      />
      {errors.instructions && <p className="text-red-500">{errors.instructions.message}</p>}
      <label className="text-white font-semibold leading-[10px]" htmlFor="instructions">Image URL</label>
      <input
        className="border border-black p-2 rounded-md"
        type="text"
        id="imgUrl"
        placeholder="Image URL"
        {...register("imageUrl", { required: "imageUrl is required" })}
      />
      {errors.imageUrl && <p className="text-red-500">{errors.imageUrl.message}</p>}
      <label className="text-white font-semibold leading-[10px]" htmlFor="instructions">Cooking Time</label>
      <input
        id="cookingTime"
        className="border border-black p-2 rounded-md"
        type="number"
        placeholder="Cooking Time"
        {...register("cookingTime", { required: "cookingTime is required" })}
      />
      {errors.cookingTime && <p className="text-red-500">{errors.cookingTime.message}</p>}
      <input className="border border-black text-white bg-black hover:bg-white hover:text-black font-semibold duration-300" type="submit" value="Send" />
    </form>
  );
}

export default CreateRecipe;
