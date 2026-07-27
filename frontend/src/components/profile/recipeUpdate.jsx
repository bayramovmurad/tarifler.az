import { useState } from "react";
import './style.css';
import RecipeUpdate from "./recipeUpdate";
import { useGlobalContext } from "../../context/context";
import { useDeleteRecipe } from "../../query/recipeQuery";

const UserRecipes = () => {
    const { userData, setRecipeUpdate, recipes, isLoading } = useGlobalContext();
    const { mutate: deleteRecipe } = useDeleteRecipe();

    const userId = userData?.user?._id;
    const userRecipes = recipes?.filter(item => item.userOwner?._id === userId);
    const [showUpdate, setShowUpdate] = useState(false);

    const updateRecipeField = (recipe) => {
        setShowUpdate(true);
        setRecipeUpdate(recipe);
    }

    // Modern UI for loading state
    if (isLoading) {
        return (
            <div className="flex flex-col items-center justify-center min-h-[40vh] space-y-4">
                <div className="relative flex justify-center items-center w-12 h-12">
                    <div className="absolute inset-0 rounded-full border-4 border-slate-800"></div>
                    <div className="absolute inset-0 rounded-full border-4 border-amber-400 border-t-transparent animate-spin"></div>
                </div>
                <p className="text-slate-400 font-medium text-sm animate-pulse">
                    Loading your recipes...
                </p>
            </div>
        );
    }

    return (
        <div className="relative mt-6">
            {userRecipes?.length > 0 ? (
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                    {userRecipes.map(recipe => (
                        <div className="bg-slate-900 rounded-2xl shadow-xl border border-slate-800 overflow-hidden hover:border-slate-700 transition-all duration-300 flex flex-col group p-4" key={recipe._id}>

                            {/* Recipe Image */}
                            <div className="relative h-44 overflow-hidden bg-slate-950 rounded-xl mb-4">
                                <img
                                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105 opacity-90 group-hover:opacity-100"
                                    src={recipe.imageUrl}
                                    alt={recipe.name}
                                />
                            </div>

                            {/* Recipe Name */}
                            <h2 className="font-semibold text-white text-base line-clamp-2 mb-4 flex-grow scrollContainer">
                                {recipe.name}
                            </h2>

                            {/* Action Buttons */}
                            <div className='flex items-center gap-2 pt-3 border-t border-slate-800'>
                                <button
                                    onClick={() => updateRecipeField(recipe)}
                                    className="flex-1 px-3 py-2 rounded-xl border border-slate-700 text-slate-200 bg-slate-800/50 hover:bg-slate-800 hover:text-amber-400 font-medium text-xs active:scale-95 transition-all"
                                    type="button"
                                >
                                    Update
                                </button>
                                <button
                                    className="flex-1 px-3 py-2 rounded-xl border border-rose-500/30 text-rose-400 bg-rose-500/10 hover:bg-rose-500/20 font-medium text-xs active:scale-95 transition-all"
                                    onClick={() => deleteRecipe({ _id: recipe._id })}
                                    type="button"
                                >
                                    Delete
                                </button>
                            </div>

                        </div>
                    ))}
                </div>
            ) : (
                <div className="text-center py-12 bg-slate-900/50 rounded-2xl border border-slate-800 border-dashed">
                    <p className="text-slate-400 text-sm">You haven't added any recipes yet.</p>
                </div>
            )}

            {showUpdate && (
                <div
                    className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/80 backdrop-blur-md overflow-y-auto"
                    onClick={() => setShowUpdate(false)} // Closes on backdrop click
                >
                    <div
                        className="relative w-full max-w-lg"
                        onClick={(e) => e.stopPropagation()} // Prevents closing when clicking inside
                    >
                        <RecipeUpdate onClose={() => setShowUpdate(false)} />
                    </div>
                </div>
            )}
        </div>
    )
}

export default UserRecipes;