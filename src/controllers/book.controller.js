export const createBook = async(req, res) => {
  res.status(201).json(
    {
      success: true,
      message: "Book created"
    }
  )
}