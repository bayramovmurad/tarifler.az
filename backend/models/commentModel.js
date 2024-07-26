import mongoose from "mongoose";

const CommentSchema = mongoose.Schema({
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "users",
        required:true
    },
    text:{
        type:String,
        required:true
    },
    createdAt: {
        type: Date,
        default: Date.now
    }
});

export const CommentModel = mongoose.model("comment", CommentSchema);