import mongoose from "mongoose";

const postSchema = mongoose.Schema(
    {
        userId: {
            type: String,
            required: true,
        },
        type: String,
        status: String,
        description: String,
        comments : []
    },
    { timestamps: true }
);

const Query = mongoose.model("Query", postSchema);

export default Query;
