import mongoose from "mongoose";

const postSchema = mongoose.Schema(
    {
        userId: {
            type: String,
            required: true,
        },
        name: String,
        description: String,
        participants: Array
    },
    { timestamps: true }
);

const Club = mongoose.model("Club", postSchema);

export default Club;
