import { noteModel } from "../model/notes_model.js";

export const getNotes = async (req, res, next) =>{
    try {
        const allNotes = await noteModel.find()
        res.json(allNotes)
    } catch (error) {
        next(error)
    }
}

export const addNote = async (req, res, next) =>{
    try {
        const addedNote = await noteModel.findById()
        res.json(addedNote)
    } catch (error) {
        next(error)
    }
}

export const postNotes = async (req, res, next) =>{
    try {
        const oneNote = await noteModel.create(req.body)
        res.json(oneNote)
    } catch (error) {
        next(error)
    }
}

export const patchNotes = async (req, res, next) =>{
    try {
        const updateNote = await noteModel.findByIdAndUpdate(req.params.id, req.body, {new:true})
        res.status(200).json(updateNote)
    } catch (error) {
        next(error)
    }
}

export const deleteNotes = async (req, res, next)=>{
    try {
        const eraseNote = await noteModel.findByIdAndDelete(req.params.id)
        res.json(eraseNote)
    } catch (error) {
        next(error)
    }
}