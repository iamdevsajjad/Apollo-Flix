import { Request, Response } from "express";
import { movieServices } from "./movie.service";

const createMovie = async (req: Request, res: Response) => {
  const movieData = req.body;
  const result = movieServices.createMovie(movieData);
  res.json({
    success: true,
    message: "Movie created Successfully.",
    data: result,
  });
};

export const movieController = {
  createMovie,
};
