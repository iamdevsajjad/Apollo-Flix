import { format } from "date-fns";
import slugify from "slugify";
import { IMovie } from "./movie.interface";
import { Movie } from "./movie.model";

const createMovie = async (payload: IMovie) => {
	const date = format(payload.releaseDate, "dd-MM-yyyy");
	const slug = slugify(`${payload.title}-${date}`);
	const result = await Movie.create({ ...payload, slug });
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
