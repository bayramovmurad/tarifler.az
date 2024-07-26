import { RecipeModel } from "../models/recipeModel.js";
import { CommentModel } from "../models/commentModel.js";


export const getAllRecipes = async (req, res) => {
    try {
        const recipes = await RecipeModel.find()
            .populate("userOwner", "username")
            .populate({
                path: "comments",
                populate: {
                    path: "user",
                    select: "username"
                }
            })
            .populate("likes", "username")
            .populate("dislikes", "username");
        res.status(200).json(recipes);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
};


export const getRecipeById = async (req, res) => {
    try {
        const recipe = await RecipeModel.findById(req.params.id)
            .populate("userOwner", "username")
            .populate({
                path: "comments",
                populate: {
                    path: "user",
                    select: "username"
                }
            })
            .populate("likes", "username")
            .populate("dislikes", "username");
        if (!recipe) return res.status(404).json({ message: "Recipe not found" });
        res.status(200).json(recipe);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
};

export const createRecipe = async (req, res) => {
    const { name, ingredients, instructions, imageUrl, cookingTime } = req.body;
    try {
        const user = req.user.id
        if (!user) return res.status(404).json({ message: "User not found" });

        const newRecipe = new RecipeModel({
            name,
            ingredients,
            instructions,
            imageUrl,
            cookingTime,
            userOwner: user
        });

        const savedRecipe = await newRecipe.save();
        res.status(201).json(savedRecipe);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
};

export const updateRecipe = async (req, res) => {
    try {
        const updatedRecipe = await RecipeModel.findByIdAndUpdate(req.params.id, req.body, { new: true });
        if (!updatedRecipe) return res.status(404).json({ message: "Recipe not found" });
        res.status(200).json(updatedRecipe);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
};

export const deleteRecipe = async (req, res) => {
    try {
        const deletedRecipe = await RecipeModel.findByIdAndDelete(req.params.id);
        if (!deletedRecipe) return res.status(404).json({ message: "Recipe not found" });
        res.status(200).json({ message: "Recipe deleted successfully" });
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
};

export const likeRecipe = async (req,res) => {
    try{
        const recipe = await RecipeModel.findById(req.params.id);
        if(!recipe) return res.status(404).json({message: "Recipe not found"}); 

        if(!recipe.likes.includes(req.user.id)){
            recipe.likes.push(req.user.id);
            recipe.dislikes.pull(req.user.id);
            await recipe.save();
        }
        res.status(200).json({ message: "Reaction added successfully", addLike: recipe });
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
};

export const dislikesRecipe = async (req,res) => {
    try {
        const recipe = await RecipeModel.findById(req.params.id);
        if(!recipe) return res.status(404).json({message: "Recipe not found"});
        
        if(!recipe.dislikes.includes(req.user.id)){
            recipe.dislikes.push(req.user.id);
            recipe.likes.pull(req.user.id);
            await recipe.save();
        };
        res.status(200).json({ message: "Reaction added successfully", addDislike: recipe });
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
};

export const addComment = async (req, res) => {
    const { text } = req.body;

    try {
        const recipe = await RecipeModel.findById(req.params.id);
        if (!recipe) return res.status(404).json({ message: "Recipe not found" });

        const newComment = new CommentModel({
            user: req.user.id,
            text
        });

        const savedComment = await newComment.save();
        recipe.comments.push(savedComment._id);
        await recipe.save();

        res.status(201).json({ message: "Comment added successfully", comment: savedComment });
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
};