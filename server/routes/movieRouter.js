import { Router } from "express";
import express from 'express';
import isLoggedIn from "../middlewares/authMiddleware.js";
import { GetMovieById, addMovie, deleteMovie, getAllMovies, updateMovie } from "../controller/movieController.js";
const router = express.Router();

router.post('/add-movie',isLoggedIn,addMovie);
router.get('/get-all-movies',isLoggedIn,getAllMovies);
router.put('/update-movie',isLoggedIn,updateMovie);
router.delete('/delete-movie',isLoggedIn,deleteMovie);
router.get("/get-movie-by-id/:movieId",isLoggedIn,GetMovieById)
export default router;