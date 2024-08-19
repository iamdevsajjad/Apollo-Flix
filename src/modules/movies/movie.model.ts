import { model, Schema } from "mongoose";
import { IMovie, IReviews } from "./movie.interface";

const reviewSchema = new Schema<IReviews>({
  email: { type: String, required: true },
  rating: { type: Number, required: true },
  reviews: { type: String },
});

const movieSchema = new Schema<IMovie>({
  title: { type: String, required: [true, "Tittle is required."] },
  description: { type: String, required: [true, "Description is required."] },
  releaseDate: { type: String },
  genre: { type: String, required: true },
  isDeleted: { type: Boolean, default: false },
  viewCount: { type: Number, default: 0 },
  reviews: [reviewSchema],
});

export const Movie = model<IMovie>("Movie", movieSchema);
