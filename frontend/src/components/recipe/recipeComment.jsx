import React from 'react';
import { useAddCommentRecipe } from "../../query/recipeQuery";
import { useForm } from 'react-hook-form';
import { toast } from 'react-toastify';

const RecipeComment = ({ recipeId }) => {
    const { mutate: addComment } = useAddCommentRecipe();
    const { register, formState: { errors }, reset, handleSubmit } = useForm({
        defaultValues: { text: "" }
    });

    const onSubmit = (data) => {
        try {
            addComment({ _id: recipeId, comment: data.text }, {
                onSuccess: (response) => {
                    toast.success(response.message);
                    reset();
                },
                onError: (error) => {
                    toast.error(error.response?.data?.message || error.message);
                }
            });
        } catch (error) {
            toast.error(error.message);
        }
    };

    return (
        <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-1.5">
            <div className="flex gap-2 items-center">
                <input
                    type="text"
                    className="flex-grow border border-slate-700 px-3.5 py-2.5 rounded-xl focus:outline-none focus:ring-2 focus:ring-amber-400/20 focus:border-amber-400 transition-all bg-slate-800/50 text-sm text-white placeholder:text-slate-500"
                    {...register('text', { required: "Comment text is required" })}
                    placeholder="Share your thoughts..."
                />
                <button
                    type="submit"
                    className="px-4 py-2.5 bg-gradient-to-r from-amber-400 to-yellow-500 text-slate-950 font-bold rounded-xl shadow-md hover:from-amber-300 hover:to-yellow-400 active:scale-95 transition-all text-sm flex-shrink-0"
                >
                    Send
                </button>
            </div>
            {errors.text && (
                <p className="text-xs font-medium text-rose-400 ml-1 mt-0.5">
                    {errors.text.message}
                </p>
            )}
        </form>
    );
};

export default RecipeComment;