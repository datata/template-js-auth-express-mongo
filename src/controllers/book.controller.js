import Book from "../models/Book.js"

export const createBook = async(req, res) => {
  try {
    const { title, description, author } = req.body
    // const title = req.body.title

    if(!title || !description || !author) {
      return res.status(400).json(
        {
          success: false,
          message: "title description and author required"
        }
      )
    }

    const newBook = await Book.create(
      {
        // title: title
        title,
        description,
        author
      }
    )

    res.status(201).json(
      {
        success: true,
        message: "Book created",
        data: newBook
      }
    )
  } catch (error) {
    res.status(500).json(
      {
        success: false,
        message: "Book cant created",
        error: error.message
      }
    )
  }
}

export const getBooks = async(req, res) => {
  try {
    // const books = await Book.find().select('title').skip().limit();
    const books = await Book.find().select('title');

    res.status(200).json(
      {
        success: true,
        message: "Book retrieved",
        data: books
      }
    )
  } catch (error) {
    res.status(500).json(
      {
        success: false,
        message: "Book cant retrieved",
        error: error.message
      }
    )
  }
}

export const udpateBookById = async(req, res) => {
  try {
    const { title } = req.body

    const bookId = req.params.id

    if (!title) {
      return res.status(400).json(
        {
          success: true,
          message: "title required",
        }
      )
    }

    const bookUpdated = await Book.findOneAndUpdate(
      {
        _id: bookId 
      },
      {
        title: title
      },
      {
        new: true
      }
    )

    res.status(200).json(
      {
        success: true,
        message: "Book updated",
        data: bookUpdated
      }
    )
  } catch (error) {
    res.status(500).json(
      {
        success: false,
        message: "Book cant retrieved",
        error: error.message
      }
    )
  }
} 