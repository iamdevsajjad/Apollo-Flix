import { IMovie } from "./movie.interface";
import { Movie } from "./movie.model";

const createMovie = async (payload: IMovie) => {
  const result = await Movie.create(payload);
  return result;
};

export const movieServices = {
  createMovie,
};
