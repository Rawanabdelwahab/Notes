import { Schema, model } from "mongoose";
const note = new Schema({
    text: {
        type: String
    }
}, { timestamps: true }
)
export default model('note', note)