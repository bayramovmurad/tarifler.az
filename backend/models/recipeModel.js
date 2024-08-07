import mongoose from 'mongoose';

const RecipeSchema = mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    ingredients:{
        type:String,
        required:true
    },
    instructions:{
        type:String,
        required:true
    },
    imageUrl:{
        type:String,
        required:true
    },
    cookingTime:{
        type:Number,
        required:true
    },
    userOwner:{
        type: mongoose.Schema.Types.ObjectId,
        ref: "users",
        required: true
    },
    likes: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: "users"
    }],
    dislikes: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: "users"
    }],
    comments: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: "comment"
    }]

});

export const RecipeModel = mongoose.model("receipe", RecipeSchema);