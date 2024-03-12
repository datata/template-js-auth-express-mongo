import Book from "../models/Book.js";
import { handleError } from "../utils/handleError.js";

export const createBook = async (req, res) => {
	try {
		const { title, description, author } = req.body;
		// const title = req.body.title

		// throw new Error('aljdhakjsdhaksdjhas')

		if (!title || !description || !author) {
			throw new Error("title description and author required");
		}

		const newBook = await Book.create({
			// title: title
			title,
			description,
			author,
		});

		res.status(201).json({
			success: true,
			message: "Book created",
			data: newBook,
		});
	} catch (error) {
		if (error.message === "title description and author required") {
			handleError(res, error.message, 404);
		}

		handleError(res, "Cant create book", 500);
	}
};

export const getBooks = async (req, res) => {
	try {
		// const books = await Book.find().select('title').skip().limit();
		const books = await Book.find().select("title");

		res.status(200).json({
			success: true,
			message: "Book retrieved",
			data: books,
		});
	} catch (error) {
		res.status(500).json({
			success: false,
			message: "Book cant retrieved",
			error: error.message,
		});
	}
};

export const udpateBookById = async (req, res) => {
	try {
		const { title, description } = req.body;

		const bookId = req.params.id;

		if (!title || !description) {
			return res.status(400).json({
				success: true,
				message: "title and description required",
			});
		}

		const bookUpdated = await Book.findOneAndUpdate(
			{
				_id: bookId,
			},
			{
				title: title,
        description
			},
			{
				new: true,
			}
		);

		res.status(200).json({
			success: true,
			message: "Book updated",
			data: bookUpdated,
		});
	} catch (error) {
		res.status(500).json({
			success: false,
			message: "Book cant retrieved",
			error: error.message,
		});
	}
};

export const getBookById = async (req, res) => {
	try {
		const bookId = req.params.id;

		const book = await Book.findById(bookId);

		res.status(200).json({
			success: true,
			message: "Book retrieved",
			data: book,
		});
	} catch (error) {
		res.status(500).json({
			success: false,
			message: "Book cant retrieved",
			error: error.message,
		});
	}
};

export const deleteBookById = async (req, res) => {
	try {
		const bookId = req.params.id;

		await Book.findByIdAndDelete(bookId);

		res.status(200).json({
			success: true,
			message: "Book deleted",
		});
	} catch (error) {
		res.status(500).json({
			success: false,
			message: "Book cant deleted",
			error: error.message,
		});
	}
};
