import express from "express";
import { getAllRecipes, getRecipeById, createRecipe, updateRecipe, deleteRecipe, likeRecipe, dislikesRecipe, addComment } from "../controllers/recipeController.js";
import tokenVerify from "../middleware/tokenVerify.js";

const router = express.Router();

router.get("/", getAllRecipes);
router.get("/:id", getRecipeById);
router.post("/", tokenVerify, createRecipe);
router.put("/:id", updateRecipe);
router.delete("/:id", deleteRecipe);

router.post("/:id/like", tokenVerify, likeRecipe);
router.post("/:id/dislike", tokenVerify, dislikesRecipe);
router.post("/:id/comment", tokenVerify, addComment);

export default router;
