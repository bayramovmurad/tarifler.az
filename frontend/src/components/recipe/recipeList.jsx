import React from 'react';
import RecipeComment from "./recipeComment";
import RecipeDislike from "./recipeDislike";
import RecipeLike from "./recipeLike";

const RecipeList = ({ recipe }) => {
  return (
    <div className="bg-slate-900 rounded-3xl shadow-xl border border-slate-800 overflow-hidden hover:border-slate-700 transition-all duration-300 flex flex-col group" key={recipe._id}>

      {/* Recipe Image */}
      <div className="relative h-56 sm:h-64 overflow-hidden bg-slate-950">
        <img
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105 opacity-90 group-hover:opacity-100"
          src={recipe.imageUrl}
          alt={recipe.name}
        />
      </div>

      {/* Content */}
      <div className="p-5 sm:p-6 flex flex-col flex-grow text-white">

        <h2 className="font-bold text-xl sm:text-2xl text-white mb-2 leading-tight">
          {recipe.name}
        </h2>

        <div className="flex items-center gap-1.5 mb-5 text-sm">
          <span className="font-medium text-slate-400">Author:</span>
          <span className="font-semibold text-amber-400 bg-amber-400/10 px-2.5 py-0.5 rounded-lg border border-amber-400/20">
            @{recipe.userOwner?.username}
          </span>
        </div>

        {/* Ingredients */}
        <div className="mb-4 bg-slate-800/50 p-4 rounded-2xl border border-slate-800">
          <h3 className="text-xs font-bold text-amber-400/90 uppercase tracking-wider mb-2">
            Ingredients
          </h3>
          <p className="text-slate-300 text-sm leading-relaxed">
            {recipe.ingredients}
          </p>
        </div>

        {/* Instructions */}
        <div className="mb-6 flex-grow">
          <h3 className="text-xs font-bold text-amber-400/90 uppercase tracking-wider mb-2">
            Instructions
          </h3>
          <p className="text-slate-400 text-sm leading-relaxed line-clamp-4">
            {recipe.instructions}
          </p>
        </div>

        {/* Like / Dislike */}
        <div className="flex items-center gap-3 pt-4 border-t border-slate-800">
          <RecipeLike recipe={recipe} />
          <RecipeDislike recipe={recipe} />
        </div>

        {/* Comments */}
        <div className="mt-5 pt-5 border-t border-slate-800">
          <div className="flex items-center justify-between mb-4">
            <h4 className="font-bold text-slate-200 text-sm">Comments</h4>
            <span className="bg-slate-800 text-amber-400 px-2.5 py-0.5 rounded-full text-xs font-bold border border-slate-700">
              {recipe.comments?.length || 0}
            </span>
          </div>

          <div className="mb-4">
            <RecipeComment recipeId={recipe._id} />
          </div>

          {recipe.comments?.length ? (
            <ul className="space-y-3 max-h-48 overflow-y-auto pr-1">
              {recipe.comments?.map(comment => (
                <li key={comment._id} className="p-3.5 bg-slate-800/60 rounded-2xl border border-slate-800">
                  <div className="font-semibold text-sm text-amber-400 mb-1">
                    {comment?.user?.username}
                  </div>
                  <div className="text-sm text-slate-300 leading-relaxed">
                    {comment.text}
                  </div>
                </li>
              ))}
            </ul>
          ) : (
            <p className="text-sm text-slate-500 italic bg-slate-800/30 p-4 rounded-2xl text-center border border-slate-800 border-dashed">
              No comments yet.
            </p>
          )}
        </div>

      </div>
    </div>
  );
};

export default RecipeList;