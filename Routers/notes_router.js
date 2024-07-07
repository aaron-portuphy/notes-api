import { Router } from "express";
import { addNote, deleteNotes, getNotes, patchNotes, postNotes } from "../controllers/notes_controllers.js";

export const notesRouter = Router()

notesRouter.get('/note', getNotes)
notesRouter.get('/note/:id', addNote)
notesRouter.post('/note', postNotes)
notesRouter.patch('/note/:id', patchNotes)
notesRouter.delete('/note/:id', deleteNotes)