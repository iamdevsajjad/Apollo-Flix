import express, { Request, Response } from "express";
import { Movie } from "./movie.model";
const router = express.Router();

router.post("/", async (req: Request, res: Response) => {
  const result = await Movie.create(req.body);
  res.json({
    success: true,
    message: "Movie created Successfully.",
    data: result,
  });
});

export const movieRoute = router;
