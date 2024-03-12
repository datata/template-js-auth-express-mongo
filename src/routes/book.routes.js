import { Router } from "express";
import { createBook, deleteBookById, getBookById, getBooks, udpateBookById } from "../controllers/book.controller.js"
import { auth } from "../middleware/auth.js";
import { isSuperAdmin } from "../middleware/isSuperAdmin.js";

const router = Router();

router.post('/', auth, isSuperAdmin, createBook)
router.get('/', getBooks)
router.get('/:id', getBookById)
router.put('/:id', auth, isSuperAdmin, udpateBookById)
router.delete('/:id', auth, isSuperAdmin, deleteBookById)


export default router;