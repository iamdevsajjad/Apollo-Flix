import express from "express";
import { movieController } from "./movie.controller";
const router = express.Router();

router.post("/", movieController.createMovie);
router.get("/:slug", movieController.getMovieBySlug);
router.get("/", movieController.getAllMovies);
export const movieRoute = router;
