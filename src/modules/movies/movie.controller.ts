import { Request, Response } from "express";
import { movieServices } from "./movie.service";

const createMovie = async (req: Request, res: Response) => {
	const movieData = req.body;
	const result = await movieServices.createMovie(movieData);
	res.json({
		success: true,
		message: "Movie created Successfully.",
		data: result,
	});
};

const getAllMovies = async (req: Request, res: Response) => {
	try {
		const result = await movieServices.getAllMovies();
		console.log(result);
		res.status(200).json({
			success: true,
			message: "Movies fetch successfully",
			data: result,
		});
	} catch (error) {
		res.status(500).json({
			success: false,
			message: "movies could not fetch",
			data: error,
		});
	}
};

const getMovieBySlug = async (req: Request, res: Response) => {
	try {
		const { slug } = req.params;
		const result = await movieServices.getMovieBySlug(slug);
		console.log(result);
		res.status(200).json({
			success: true,
			message: "Movies fetch successfully",
			data: result,
		});
	} catch (error) {
		res.status(500).json({
			success: false,
			message: "movies could not fetch",
			data: error,
		});
	}
};
export const movieController = {
	createMovie,
	getAllMovies,
	getMovieBySlug,
};
