import express from "express";
import { movieController } from "./movie.controller";
const router = express.Router();

router.post("/", movieController.createMovie);
router.get("/:movieId", movieController.getMovieById);
router.get("/", movieController.getAllMovies);
export const movieRoute = router;
