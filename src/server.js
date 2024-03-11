// importamos dependecias de librerias
import express from "express";
import "dotenv/config";
import { dbConnection } from "./database/db.js";
import router from "./routes/router.js";
import Book from "./models/Book.js";

const app = express();

// parsea el body
app.use(express.json());

const PORT = process.env.PORT || 4001;

// API ROUTES
app.get("/api/healthy", (req, res) => {
	res.status(200).json({
		success: true,
		message: "server is healthy",
	});
});

app.use("/api", router);

app.get("/books", async (req, res) => {
	try {
		const books = await Book.find();

		res.status(200).json({
			success: true,
			message: "Books retrrieved successfully",
			data: books,
		});
	} catch (error) {
		res.status(500).json({
			success: false,
			message: error.message,
		});
	}
});

dbConnection()
	.then(() => {
		console.log("Database connected");

		app.listen(PORT, () => {
			console.log(`Server running o port ${PORT}`);
		});
	})
	.catch((error) => {
		console.log(error);
	});
