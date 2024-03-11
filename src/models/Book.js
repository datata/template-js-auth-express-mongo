import { Schema, model } from "mongoose"

const BookSchema = new Schema(
  {
    title: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
    author: {
      type: Schema.Types.ObjectId,
      ref: 'Author'
    },
  },
  {
    timestamps: true,
    versionKey: false,
  }
)

const Book = model("Book", BookSchema)

export default Book