import { Router } from "express";
import express from 'express';
import isLoggedIn from "../middlewares/authMiddleware.js";
import { BookShow, GetBookings, MAkePayment } from "../controller/bookingController.js";

const router = express.Router();

router.post("/make-payment",isLoggedIn,MAkePayment);
router.post("/book-show",isLoggedIn,BookShow);
router.get("/get-bookings/",isLoggedIn,GetBookings);

export default router;