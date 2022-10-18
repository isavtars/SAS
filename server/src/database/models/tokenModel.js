import mongoose  from "mongoose";
const Schema = mongoose.Schema;

const tokenSchema = new mongoose.Schema({
    userId: {
        type: Schema.Types.ObjectId,
        required: true,
        ref: "user",
    },
    token: {
        type: String,
        required: true,
    },
    createdAt: {
        type: Date,
        default: Date.now,
        expires: 3600,
    },
});

const tokenModel= new mongoose.model("token",tokenSchema) 
export default  tokenModel;