import React from 'react';
import RecipeList from "../components/recipe/recipeList";
import { useGlobalContext } from "../context/context";

const Recipe = () => {
  const { recipes, recipesLoading } = useGlobalContext();

  // Modern UI for loading state
  if (recipesLoading) {
    return (
      <div className="flex flex-col items-center justify-center min-h-[60vh] space-y-5 bg-slate-950 text-white">
        <div className="relative flex justify-center items-center w-16 h-16">
          <div className="absolute inset-0 rounded-full border-4 border-slate-800"></div>
          <div className="absolute inset-0 rounded-full border-4 border-amber-400 border-t-transparent animate-spin"></div>
        </div>
        <p className="text-slate-400 font-medium tracking-wide animate-pulse">
          Preparing delicious recipes...
        </p>
      </div>
    );
  }

  // Cleaner notification screen if no data is available
  if (!recipes || recipes.length === 0) {
    return (
      <div className="flex flex-col items-center justify-center min-h-[60vh] px-4 text-center bg-slate-950">
        <div className="p-6 rounded-full mb-6 shadow-sm border border-slate-800 bg-slate-900">
          <span className="text-4xl">🍽️</span>
        </div>
        <h2 className="text-2xl md:text-3xl font-semibold text-white tracking-tight">
          It's empty here for now
        </h2>
        <p className="text-slate-400 mt-3 max-w-md mx-auto leading-relaxed">
          The table hasn't been set yet. You can inspire others by adding your first recipe!
        </p>
      </div>
    );
  }

  return (
    <section className="min-h-screen bg-slate-950 py-16 px-4 sm:px-6 lg:px-8 selection:bg-amber-400 selection:text-slate-950">
      <div className="max-w-7xl mx-auto">
        {/* Header Section */}
        <div className="flex flex-col items-center text-center mb-16 space-y-4">
          <span className="text-amber-400 font-semibold tracking-wider uppercase text-sm">
            Explore the Menu
          </span>
          <h1 className="text-4xl md:text-5xl font-bold text-white tracking-tight">
            Most Delicious <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-400 to-yellow-500">Recipes</span>
          </h1>
          <p className="mt-4 text-lg text-slate-400 max-w-2xl mx-auto leading-relaxed">
            Browse the most unique and delicious dishes straight from our users' kitchens, and discover new flavors for yourself.
          </p>
        </div>

        {/* Recipes List (Grid system with modern spacing) */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-12">
          {recipes.map((recipe) => (
            <RecipeList key={recipe._id} recipe={recipe} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Recipe;