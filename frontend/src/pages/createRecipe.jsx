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
          navigate('/');
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
    <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col w-[500px] max-w-full mx-auto gap-y-4 mt-10">
      <input
        className="border border-black p-2 rounded-md"
        type="text"
        placeholder="name"
        name="name"
        {...register("name",{ required: "Password is required" })}
      />
      {errors.name && <p className="text-red-500">{errors.password.message}</p> }
      <input
        className="border border-black p-2 rounded-md"
        type="text"
        placeholder="ingredients"
        name="ingredients"
        {...register("ingredients",{ required: "Password is required" })}
      />
      {errors.ingredients && <p className="text-red-500">{errors.password.message}</p>}
      <input
        className="border border-black p-2 rounded-md"
        type="text"
        placeholder="instructions"
        name="instructions"
       {...register("instructions",{ required: "Password is required" })}
      />
      {errors.instructions && <p className="text-red-500">{errors.password.message}</p>}
      <input
        className="border border-black p-2 rounded-md"
        type="text"
        placeholder="imageUrl"
        name="imageUrl"
      {...register("imageUrl",{ required: "Password is required" })}
      />
      {errors.imageUrl && <p className="text-red-500">{errors.password.message}</p>}
      <input
        className="border border-black p-2 rounded-md"
        type="number"
        placeholder="cookingTime"
        name="cookingTime"
       {...register("cookingTime",{ required: "Password is required" })}
      />
      {errors.cookingTime && <p className="text-red-500">{errors.password.message}</p>}
      <input className="border border-black text-white bg-black hover:bg-white hover:text-black font-semibold duration-300" type="Submit" value="Send" />
    </form>
  );
}

export default CreateRecipe;
