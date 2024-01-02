import { Router } from "express";
import express from 'express';
import { getProfile, login, register } from "../controller/userController.js";
import isLoggedIn from "../middlewares/authMiddleware.js";
const router = express.Router();

router.post('/register',register);
router.post('/login',login);
router.get('/getProfile',isLoggedIn,getProfile);

export default router;