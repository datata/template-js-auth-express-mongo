import "dotenv/config";
import User from "../../models/User.js";
import mongoose from "mongoose";
import bcrypt from "bcrypt";
import { dbConnection } from "../db.js";
import Author from "../../models/Author.js";
import Book from "../../models/Book.js";

const userSeeder = async () => {
	try {
		const connect = await dbConnection();
		console.log("Connected to MongoDB");

		const user = await User.create([
			{
				email: "user@user.com",
				password: bcrypt.hashSync("12345678", 10),
				role: "user",
				_id: "60f3b4e3e3e3e3e3e3e3e3e3",
			},
			{
				email: "admin@admin.com",
				password: bcrypt.hashSync("12345678", 10),
				role: "admin",
				_id: "60f3b4e3e3e3e3e3e3e3e3e4",
			},
			{
				email: "superadmin@superadmin.com",
				password: bcrypt.hashSync("12345678", 10),
				role: "super_admin",
				_id: "60f3b4e3e3e3e3e3e3e3e3e5",
			},
			{
				email: "dani@dani.com",
				password: bcrypt.hashSync("12345678", 10),
				role: "user",
				_id: "60f3b4e3e3e3e3e3e3e3e3e1",
			},
			{
				email: "david@david.com",
				password: bcrypt.hashSync("12345678", 10),
				role: "user",
				_id: "60f3b4e3e3e3e3e3e3e3e3e2",
			},
		]);

		console.log("Users created");
	} catch (error) {
		console.log(error);
	} finally {
		mongoose.disconnect();
	}
};

const authorSeeder = async () => {
	try {
		const connect = await dbConnection();
		console.log("Connected to MongoDB");

		const author = await Author.create([
			{
				name: "John Doe",
				age: 45,
				_id: "60f3b4e3e3e3e3e3e3e3e3e6",
			},
			{
				name: "Jane Doe",
				age: 40,
				_id: "60f3b4e3e3e3e3e3e3e3e3e7",
			},
			{
				name: "Mike Smith",
				age: 55,
				_id: "60f3b4e3e3e3e3e3e3e3e3e8",
			},
			{
				name: "Sara Smith",
				age: 50,
				_id: "60f3b4e3e3e3e3e3e3e3e3e9",
			},
		]);

		console.log("Authors created");
	} catch (error) {
		console.log(error);
	} finally {
		mongoose.disconnect();
	}
};

const bookSeeder = async () => {
	try {
		const connect = await dbConnection();
		console.log("Connected to MongoDB");

		const book = await Book.create([
			{
				title: "Book 1",
				description: "Description 1",
				author: "60f3b4e3e3e3e3e3e3e3e3e6",
			},
			{
				title: "Book 2",
				description: "Description 2",
				author: "60f3b4e3e3e3e3e3e3e3e3e7",
			},
			{
				title: "Book 3",
				description: "Description 3",
				author: "60f3b4e3e3e3e3e3e3e3e3e8",
			},
			{
				title: "Book 4",
				description: "Description 4",
				author: "60f3b4e3e3e3e3e3e3e3e3e9",
			},
		]);

		console.log("Books created");
	} catch (error) {
		console.log(error);
	} finally {
		mongoose.disconnect();
	}
};

const favouriteBooksSeeder = async () => {
	try {
		const connect = await dbConnection();
		console.log("Connected to MongoDB");

		const book = await Book.findOne({ _id: "60f3b4e3e3e3e3e3e3e3e3e6" });
		const book2 = await Book.findOne({ _id: "60f3b4e3e3e3e3e3e3e3e3e7" });
		const book3 = await Book.findOne({ _id: "60f3b4e3e3e3e3e3e3e3e3e8" });
		const book4 = await Book.findOne({ _id: "60f3b4e3e3e3e3e3e3e3e3e9" });
		const book5 = await Book.findOne({ _id: "60f3b4e3e3e3e3e3e3e3e3e10" });

		const user = await User.findOne({ _id: "60f3b4e3e3e3e3e3e3e3e3e1" });
		user.favouriteBooks.push(book);
		user.favouriteBooks.push(book2);
		user.favouriteBooks.push(book3);
		await user.save();

		const user2 = await User.findOne({ _id: "60f3b4e3e3e3e3e3e3e3e3e2" });
		user2.favouriteBooks.push(book2);
		user2.favouriteBooks.push(book4);
		user2.favouriteBooks.push(book5);
		await user2.save();

		const user3 = await User.findOne({ _id: "60f3b4e3e3e3e3e3e3e3e3e3" });
		user3.favouriteBooks.push(book);
		user3.favouriteBooks.push(book3);
		user3.favouriteBooks.push(book5);
		await user3.save();

		const user4 = await User.findOne({ _id: "60f3b4e3e3e3e3e3e3e3e3e4" });
		user4.favouriteBooks.push(book);
		user4.favouriteBooks.push(book2);
		user4.favouriteBooks.push(book3);
		user4.favouriteBooks.push(book4);
		user4.favouriteBooks.push(book5);
		console.log("Favourite book added");
	} catch (error) {
		console.log(error);
	} finally {
		mongoose.disconnect();
	}
};

const startSeeder = async () => {
	await userSeeder();
	await authorSeeder();
	await bookSeeder();
	await favouriteBooksSeeder();
};

startSeeder();
