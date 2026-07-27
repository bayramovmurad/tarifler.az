import { toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import { useForm } from "react-hook-form";
import { useAddRecipe } from "../query/recipeQuery";
import { useNavigate } from "react-router-dom";

const CreateRecipe = () => {
  const navigate = useNavigate();
  const { mutate: addRecipe, isLoading } = useAddRecipe();
  const { register, handleSubmit, formState: { errors }, reset } = useForm({
    defaultValues: { name: "", ingredients: "", instructions: "", imageUrl: "", cookingTime: "", userOwner: "" }
  });

  const onSubmit = (data) => {
    reset();
    try {
      addRecipe(data, {
        onSuccess: (response) => {
          toast.success(response.message);
          navigate('/');
        },
        onError: (error) => {
          toast.error(error?.response?.data?.message || "An error occurred");
        }
      });
    } catch (err) {
      console.error("Failed to save the recipe: ", err);
    }
  };

  // Modern UI for loading state
  if (isLoading) {
    return (
      <div className="flex flex-col items-center justify-center min-h-[70vh] space-y-5 bg-slate-950 text-white">
        <div className="relative flex justify-center items-center w-16 h-16">
          <div className="absolute inset-0 rounded-full border-4 border-slate-800"></div>
          <div className="absolute inset-0 rounded-full border-4 border-amber-400 border-t-transparent animate-spin"></div>
        </div>
        <p className="text-slate-400 font-medium tracking-wide animate-pulse">
          Adding recipe, please wait...
        </p>
      </div>
    );
  }

  return (
    <section className="min-h-[calc(100vh-80px)] bg-slate-950 flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8 selection:bg-amber-400 selection:text-slate-950">
      <div className="max-w-xl w-full bg-slate-900 rounded-3xl shadow-2xl border border-slate-800 p-8 sm:p-10">

        {/* Header */}
        <div className="text-center mb-10">
          <span className="inline-flex items-center justify-center w-14 h-14 rounded-2xl bg-amber-400/10 text-amber-400 mb-4 border border-amber-400/20 text-2xl font-bold">
            🍳
          </span>
          <h2 className="text-3xl font-bold text-white tracking-tight">
            Create New Recipe
          </h2>
          <p className="mt-2 text-sm text-slate-400">
            Share your kitchen's most delicious secrets with the community.
          </p>
        </div>

        {/* Form */}
        <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-y-5">

          {/* Name */}
          <div className="flex flex-col gap-1.5">
            <label className="text-sm font-semibold text-slate-300 ml-1" htmlFor="name">Recipe Name</label>
            <input
              className="border border-slate-700 p-3.5 rounded-xl focus:outline-none focus:ring-2 focus:ring-amber-400/20 focus:border-amber-400 transition-all bg-slate-800/50 text-white placeholder:text-slate-500 text-sm"
              type="text"
              id="name"
              placeholder="e.g., Delicious Lentil Soup"
              {...register("name", { required: "Recipe name is required" })}
            />
            {errors.name && <p className="text-xs font-medium text-rose-400 ml-1 mt-0.5">{errors.name.message}</p>}
          </div>

          {/* Ingredients */}
          <div className="flex flex-col gap-1.5">
            <label className="text-sm font-semibold text-slate-300 ml-1" htmlFor="ingredients">Ingredients</label>
            <input
              className="border border-slate-700 p-3.5 rounded-xl focus:outline-none focus:ring-2 focus:ring-amber-400/20 focus:border-amber-400 transition-all bg-slate-800/50 text-white placeholder:text-slate-500 text-sm"
              type="text"
              id="ingredients"
              placeholder="e.g., 1 cup lentils, 1 onion..."
              {...register("ingredients", { required: "Ingredients are required" })}
            />
            {errors.ingredients && <p className="text-xs font-medium text-rose-400 ml-1 mt-0.5">{errors.ingredients.message}</p>}
          </div>

          {/* Instructions */}
          <div className="flex flex-col gap-1.5">
            <label className="text-sm font-semibold text-slate-300 ml-1" htmlFor="instructions">Instructions</label>
            <textarea
              rows="4"
              className="border border-slate-700 p-3.5 rounded-xl focus:outline-none focus:ring-2 focus:ring-amber-400/20 focus:border-amber-400 transition-all bg-slate-800/50 text-white placeholder:text-slate-500 text-sm resize-none"
              id="instructions"
              placeholder="Step by step preparation..."
              {...register("instructions", { required: "Instructions are required" })}
            ></textarea>
            {errors.instructions && <p className="text-xs font-medium text-rose-400 ml-1 mt-0.5">{errors.instructions.message}</p>}
          </div>

          {/* Image URL */}
          <div className="flex flex-col gap-1.5">
            <label className="text-sm font-semibold text-slate-300 ml-1" htmlFor="imgUrl">Image URL</label>
            <input
              className="border border-slate-700 p-3.5 rounded-xl focus:outline-none focus:ring-2 focus:ring-amber-400/20 focus:border-amber-400 transition-all bg-slate-800/50 text-white placeholder:text-slate-500 text-sm"
              type="url"
              id="imgUrl"
              placeholder="https://..."
              {...register("imageUrl", { required: "Image URL is required" })}
            />
            {errors.imageUrl && <p className="text-xs font-medium text-rose-400 ml-1 mt-0.5">{errors.imageUrl.message}</p>}
          </div>

          {/* Cooking Time */}
          <div className="flex flex-col gap-1.5">
            <label className="text-sm font-semibold text-slate-300 ml-1" htmlFor="cookingTime">Cooking Time (minutes)</label>
            <input
              id="cookingTime"
              className="border border-slate-700 p-3.5 rounded-xl focus:outline-none focus:ring-2 focus:ring-amber-400/20 focus:border-amber-400 transition-all bg-slate-800/50 text-white placeholder:text-slate-500 text-sm"
              type="number"
              min="1"
              placeholder="e.g., 45"
              {...register("cookingTime", { required: "Cooking time is required" })}
            />
            {errors.cookingTime && <p className="text-xs font-medium text-rose-400 ml-1 mt-0.5">{errors.cookingTime.message}</p>}
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full mt-4 py-4 bg-gradient-to-r from-amber-400 to-yellow-500 text-slate-950 font-bold rounded-xl shadow-lg shadow-amber-500/20 hover:shadow-xl hover:from-amber-300 hover:to-yellow-400 active:scale-95 transition-all text-base"
          >
            Share Recipe
          </button>

        </form>
      </div>
    </section>
  );
}

export default CreateRecipe;