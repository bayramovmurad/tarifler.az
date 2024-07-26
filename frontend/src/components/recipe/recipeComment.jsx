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
        <form onSubmit={handleSubmit(onSubmit)}>
            <input
                type="text"
                {...register('text', { required: "Text is required" })}
                placeholder="Add a comment"
            />
            {errors.text && <p className="text-red-500">{errors.text.message}</p>}
            <input type="submit" value="Add Comment" />
        </form>
    );
};

export default RecipeComment;
