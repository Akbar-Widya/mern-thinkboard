import express from "express"
import { createNote, deleteNote, getAllNotes, updateNote } from "../controllers/notesController.js"

const router = express.Router()

// endpoints: http_method, url, function
router.get("/", getAllNotes)
router.post("/", createNote)
router.put("/:id", updateNote)
router.delete("/:id", deleteNote)

export default router