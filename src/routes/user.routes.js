import { Router } from "express";
import { addBookToFavourite, getFavouriteBooks, getUsers, profile } from "../controllers/user.controller.js";
import { auth } from "../middleware/auth.js";
import { isSuperAdmin } from "../middleware/isSuperAdmin.js";
const router = Router();

router.put('/add-book-to-favourite', auth, addBookToFavourite)
router.get('/', auth, isSuperAdmin, getUsers)

router.get("/profile", auth, profile);

router.get("/favourite-books", auth, getFavouriteBooks);


export default router;