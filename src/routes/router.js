import { Router } from "express";
import authRoutes from "./auth.routes.js";
import bookRoutes from "./book.routes.js"
import userRoutes from "./user.routes.js"

const router = Router();

router.use('/auth', authRoutes)
router.use('/books', bookRoutes)
router.use('/users', userRoutes)

export default router;