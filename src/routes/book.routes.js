import { Router } from "express";
import { createBook, getBooks, udpateBookById } from "../controllers/book.controller.js"

const router = Router();

router.post('/', createBook)
router.get('/', getBooks)
router.put('/:id', udpateBookById)


export default router;