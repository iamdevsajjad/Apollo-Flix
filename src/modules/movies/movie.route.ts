import express from "express";
import { movieController } from "./movie.controller";
const router = express.Router();

router.post("/", movieController.createMovie);
export const movieRoute = router;
