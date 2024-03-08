import { Router } from "express";
import { addBookToFavourite } from "../controllers/user.controller.js";
const router = Router();

router.put('/add-book-to-favourite', addBookToFavourite)


export default router;