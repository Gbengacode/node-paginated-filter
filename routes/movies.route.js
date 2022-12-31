import express from "express";
import movieController from "../controllers/movie.controller.js";
const movieRouter = express.Router();

movieRouter.get("/movies", movieController.getMovies);

export default movieRouter;
