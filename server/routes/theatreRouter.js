import { Router } from "express";
import express from 'express';
import isLoggedIn from "../middlewares/authMiddleware.js";
import { addTheatre, deleteTheatre, getAllTheatre, getAllTheatreByOwner, updateTheatre } from "../controller/theatreController.js";
import { GetAllTheatresByMovie, GetShowById, addShow, deleteShow, getAllShowsByTheatre } from "../controller/showController.js";
const router = express.Router();

// theatre API(s)
router.post('/add-theatre',isLoggedIn,addTheatre);
router.post("/get-all-theatres-by-owner",isLoggedIn,getAllTheatreByOwner);
router.get("/get-all-theatres",isLoggedIn,getAllTheatre);
router.put("/update-theatre",isLoggedIn,updateTheatre);
router.delete("/delete-theatre",isLoggedIn,deleteTheatre);

// Shows API(s)
router.post("/add-show",isLoggedIn,addShow);
router.post("/get-all-shows-by-theatre",isLoggedIn,getAllShowsByTheatre);
router.delete("/delete-show",isLoggedIn,deleteShow);
router.post("/get-all-theatres-by-movie",isLoggedIn,GetAllTheatresByMovie);
router.post("/get-show-by-id",isLoggedIn,GetShowById);
export default router;