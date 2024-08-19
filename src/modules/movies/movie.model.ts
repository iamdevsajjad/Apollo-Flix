import { Schema } from "mongoose";
import { IMovie, IReviews } from "./movie.interface";

const reviewSchema = new Schema<IReviews>({
  email: { type: String, required: true },
  rating: { type: Number, required: true },
  reviews: { type: String, required: true },
});

const movieSchema = new Schema<IMovie>({
  title: { type: String, required: true },
  description: { type: String, required: true },
  releaseDate: { type: String, required: true },
  genre: { type: String, required: true },
  isDeleted: { type: Boolean, required: true },
  viewCount: { type: Number, required: true },
  reviews: [reviewSchema],
});
