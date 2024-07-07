import { Schema, model } from "mongoose";

 const notesSchema = new Schema({
    name: {type: String, required: true},
    date: {type: Date, required: true},
    description: {type: String }
})

export const noteModel = model('note', notesSchema)