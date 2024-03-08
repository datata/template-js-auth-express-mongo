import User from "../models/User.js";

const addBookToFavourite = async(req, res) => {
  try {
    const bookId = req.body.bookId;
    // debe venir por el token
    const userId = req.body.userId;

    const user = await User.findOne(
      {
        _id: userId
      }
    )

    // console.log(user);

    //validacion de si el user existe

    user.favouriteBooks.push(bookId);
    await user.save();

    res.status(200).json(
      {
        success: true,
        message: `Book added to user as favourite`,
      }
    )
  } catch (error) {
    res.status(500).json(
      {
        success: false,
        message: "Book cant added to user as favourite",
        error: error.message
      }
    )
  }
}

export { addBookToFavourite }