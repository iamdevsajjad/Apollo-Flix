import express, { Request, Response } from "express";
import { movieRoute } from "../modules/movies/movie.route";
const app = express();
app.use(express.json());
app.use("/api/v1/movies", movieRoute);

app.get("/", (req: Request, res: Response) => {
	res.send("Hello World!");
});

export default app;
