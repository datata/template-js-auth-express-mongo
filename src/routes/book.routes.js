import { Router } from "express";
import { createBook, getBooks } from "../controllers/book.controller.js"

const router = Router();

router.post('/', createBook)
router.get('/', getBooks)


export default router;