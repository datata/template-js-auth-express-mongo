import { Router } from "express";
import { addBookToFavourite, getFavouriteBooks, getUsers, profile } from "../controllers/user.controller.js";
import { auth } from "../middleware/auth.js";
const router = Router();

router.put('/add-book-to-favourite', addBookToFavourite)
router.get('/', getUsers)

router.get("/profile", auth, profile);

router.get("/favourite-books", getFavouriteBooks);


export default router;