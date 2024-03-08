import { Router } from "express";
import { addBookToFavourite, getUsers } from "../controllers/user.controller.js";
const router = Router();

router.put('/add-book-to-favourite', addBookToFavourite)
router.get('/', getUsers)


export default router;