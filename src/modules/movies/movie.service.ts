import { IMovie } from "./movie.interface";
import { Movie } from "./movie.model";

const createMovie = async (payload: IMovie) => {
  const result = await Movie.create(payload);
  return result;
};

const getAllMovies = async () => {
  const result = await Movie.find();
  return result;
};
const getMovieById = async (_id: string) => {
  const result = await Movie.findById(_id);
  return result;
};

export const movieServices = {
  createMovie,
  getAllMovies,
  getMovieById,
};
